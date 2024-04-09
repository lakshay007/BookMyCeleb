// const express = require('express');
// const oracle = require('oracledb');
// const app = express();

// // Function to establish Oracle DB connection
// async function initializeOracle() {
//     try {
//         await oracle.createPool({
//             user: 'HR',
//             password: '123',
//             connectString: 'localhost/xe'
//         });
//         console.log('Oracle database connected!');
//     } catch (err) {
//         console.error('Error connecting to Oracle database:', err.message);
//     }
// }

// initializeOracle(); // Initialize Oracle DB connection

// app.listen(4000, () => {
//     console.log('Listening on port 4000');
// });

// app.use(express.json());

// app.get('/UserData/:id', (req, res) => {
//     async function getUserData() {
//         let connection;
//         try {
//             connection = await oracle.getConnection();
//             const result = await connection.execute('SELECT * FROM logindetails WHERE username = :id', [req.params.id], {outFormat: oracle.OUT_FORMAT_OBJECT});
//             return result.rows.length === 0 ? [] : result.rows[0];
//         } catch (err) {
//             console.error('Error executing query:', err.message);
//             throw err;
//         } finally {
//             if (connection) {
//                 try {
//                     await connection.close();
//                 } catch (err) {
//                     console.error('Error closing connection:', err.message);
//                 }
//             }
//         }
//     }

//     getUserData()
//         .then((data) => res.json(data))
//         .catch((err) => res.status(500).json({ error: 'Internal Server Error' }));
// });

// app.get('/Celebs', (req, res) => {
//     async function getCelebs() {
//         let connection;
//         try {
//             connection = await oracle.getConnection();
//             const result = await connection.execute('SELECT * FROM artist');
//             return result.rows;
//         } catch (err) {
//             console.error('Error executing query:', err.message);
//             throw err;
//         } finally {
//             if (connection) {
//                 try {
//                     await connection.close();
//                 } catch (err) {
//                     console.error('Error closing connection:', err.message);
//                 }
//             }
//         }
//     }

//     getCelebs()
//         .then((celebs) => res.json(celebs))
//         .catch((err) => res.status(500).json({ error: 'Internal Server Error' }));
// });

// // Similarly, convert other routes like '/categories/:id', '/Celebs/:id', '/Celebs/Rating/:id', '/Celebs/Budget/:id', and '/UserData' to use Oracle database queries.

// // Example: Convert the '/categories/:id' route
// app.get('/categories/:id', (req, res) => {
//     async function getCategories() {
//         let connection;
//         try {
//             connection = await oracle.getConnection();
//             const result = await connection.execute('SELECT * FROM event natural join performsat, artist WHERE artist.username = performsat.username AND event.categname  = :id', [req.params.id]);
//             return result.rows;
//         } catch (err) {
//             console.error('Error executing query:', err.message);
//             throw err;
//         } finally {
//             if (connection) {
//                 try {
//                     await connection.close();
//                 } catch (err) {
//                     console.error('Error closing connection:', err.message);
//                 }
//             }
//         }
//     }

//     getCategories()
//         .then((categories) => res.json(categories))
//         .catch((err) => res.status(500).json({ error: 'Internal Server Error' }));
// });

// // Similarly, convert other routes using async functions with Oracle DB queries.

// // Example: Convert the '/UserData' route for POST request
// app.post('/UserData', express.json(), (req, res) => {
//     async function postUserData() {
//         let connection;
//         try {
//             connection = await oracle.getConnection();
//             const { username, password, name } = req.body;
//             const newUser = await connection.execute('INSERT INTO logindetails (username, password) VALUES (:username, :password) RETURNING *', [username, password]);
//             const newUserInfo = await connection.execute('INSERT INTO userr (u_username, u_name) VALUES (:username, :name) RETURNING *', [username, name]);
//             return { user: newUser.rows[0], userInfo: newUserInfo.rows[0] };
//         } catch (err) {
//             console.error('Error executing query:', err.message);
//             throw err;
//         } finally {
//             if (connection) {
//                 try {
//                     await connection.close();
//                 } catch (err) {
//                     console.error('Error closing connection:', err.message);
//                 }
//             }
//         }
//     }

//     postUserData()
//         .then((result) => res.json(result))
//         .catch((err) => res.status(500).json({ error: 'Internal Server Error' }));
// });

// // Similarly, convert other POST routes and ensure they handle errors properly.

// // Example: Convert the '/Celebs/:id' route for GET request
// app.get('/Celebs/:id', (req, res) => {
//     async function getCelebsById() {
//         let connection;
//         try {
//             connection = await oracle.getConnection();
//             const celebs = await connection.execute('SELECT * FROM artist WHERE name LIKE :id', ['%' + req.params.id + '%']);
//             return celebs.rows;
//         } catch (err) {
//             console.error('Error executing query:', err.message);
//             throw err;
//         } finally {
//             if (connection) {
//                 try {
//                     await connection.close();
//                 } catch (err) {
//                     console.error('Error closing connection:', err.message);
//                 }
//             }
//         }
//     }

//     getCelebsById()
//         .then((celebs) => res.json(celebs))
//         .catch((err) => res.status(500).json({ error: 'Internal Server Error' }));
// });




const express = require('express');
const pool = require('./db');
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors());
app.listen(4000, () => {
    console.log('listening on 4000');
});
app.get('/UserData/:id', async(req, res) => {
    try{
        const { id } = req.params;
        const user = await pool.query('SELECT * FROM logindetails where username = $1', [id]);
        if (user.rows.length === 0) {
           
            
            res.json([]);
        } else {
            
            console.log(user.rows[0]);
            res.json(user.rows[0]);
        }
        
        console.log(user.rows[0]);
    
    }catch(err){
        console.error(err);
    }
});
app.get('/Celebs', async(req, res) => {
    try{
        const celebs = await pool.query('SELECT * FROM artist');
        res.json(celebs.rows);
    }catch(err){
        console.error(err);
    }
}
);

app.post('/UserData', async (req, res) => {
    try {
        const { username, password, name } = req.body;

        const newUser = await pool.query('INSERT INTO logindetails (username, password) VALUES ($1, $2) RETURNING *', [username, password]);

        
        const newUserInfo = await pool.query('INSERT INTO userr (u_username, u_name) VALUES ($1, $2) RETURNING *', [username, name]);

        
        res.json({ user: newUser.rows[0], userInfo: newUserInfo.rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/categories/:id', async(req, res) => {
    try{
        const categories = await pool.query('SELECT * FROM event natural join performsat, artist where artist.username = performsat.username and event.categname  = $1', [req.params.id]);
        res.json(categories.rows);
    }catch(err){
        console.error(err);
    }
}
);
app.get('/Celebs/:id', async (req, res) => {
    try {
        const celebs = await pool.query('SELECT * FROM artist WHERE name ILIKE $1', ['%' + req.params.id + '%']);
        res.json(celebs.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.get('/Celebs/Rating/:id', async (req, res) => {
    try {
        const celebs = await pool.query('SELECT * FROM artist WHERE rating = $1', [req.params.id]);
        res.json(celebs.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}
);

app.get('/Celebs/Budget/:id', async (req, res) => {
    try {
        const celebs = await pool.query('SELECT * FROM artist WHERE totalrate <= $1', [req.params.id]);
        res.json(celebs.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}
);

