const express = require('express');
const oracle = require('oracledb');
const app = express();

app.listen(5000, () => {console.log('listening on 3000')});
app.get('/', (req, res) => {
    res.send('Hello World');
}   );
let connection = await oracle.getConnection({
    user: 'HR',
    password: '123',
    connectString: 'localhost/xe'
});
app.get('/UserData/:username', (req, res) => {
    async function getData(){
        try{
            const res = await connection.execute('SELECT * FROM HR.signup WHERE USERNAME = :username', [req.params.username], {outFormat: oracle.OUT_FORMAT_OBJECT});
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
