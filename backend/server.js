const express = require('express');
const oracle = require('oracledb');
const app = express();

app.listen(5000, () => {console.log('listening on 3000')});
app.get('/', (req, res) => {
    res.send('Hello World');
}   );
app.get('/login', (req, res) => {
    async function getData(){
        try{
            let connection = await oracle.getConnection({
                user: 'HR',
                password: '123',
                connectString: 'localhost/xe'
            });
            const res = await connection.execute('SELECT * FROM HR.signup');
            return res.rows;
        }catch(err){
            console.error(err);
        }   
    }
    getData().then((result) => {
        res.send(result);
    }).catch((err) => {
        res.send(err);
    });
});
