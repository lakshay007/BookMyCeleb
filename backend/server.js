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

app.post('/UserData', async(req, res) => {
    try{
        const { username, password } = req.body;
        const newUser = await pool.query('INSERT INTO logindetails (username, password) VALUES ($1, $2) RETURNING *', [username, password]);
        res.json(newUser.rows[0]);
    }catch(err){
        console.error(err);
    }
});
app.get('/categories/:id', async(req, res) => {
    try{
        const categories = await pool.query('SELECT * FROM event natural join performsat natural join artist where categname = $1', [req.params.id]);
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































// let connection;
// app.listen(5000, async() => {
//     connection = await oracle.getConnection({
//     user: 'HR',
//     password: '123',
//     connectString: 'localhost/xe'
// });

    
//     console.log('listening on 5000')});
// app.get('/', (req, res) => {
//     res.send('Hello World');
// }   );
 
// app.get('/UserData/:username', (req, res) => {
//     async function getData(){
//         try{
//             const res = await connection.execute('SELECT * FROM HR.signup WHERE USERNAME = :username', [req.params.username], {outFormat: oracle.OUT_FORMAT_OBJECT});
//             return res.rows;
//         }catch(err){
//             console.error(err);
//         }   
//     }
//     getData().then((result) => {
//         res.send(result);
//     }).catch((err) => {
//         res.send(err);
//     });
// });
// app.post('/UserData', (req, res) => {
//     async function postData(){
//         try{
//             const res = await connection.execute('INSERT INTO HR.signup (USERNAME, PASSWORD) VALUES (:username, :password)', [req.body.username, req.body.password], {autoCommit: true});
//             return res;
//         }catch(err){
//             console.error(err);
//         }
//     }
//     postData().then((result) => {
//         res.send(result);
//     }).catch((err) => {
//         res.send(err);
//     });
// });

