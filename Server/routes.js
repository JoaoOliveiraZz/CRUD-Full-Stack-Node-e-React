const mysql = require('mysql');
const express = require('express');
const cors = require('cors')

const app = express();

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
})

app.use(cors());
app.use(express.json());

app.listen('3001', () => {
    
});

app.post('/makeUser', (req, res) => {

    const {Nome} = req.body;
    const {Email} = req.body;
    const {Senha} = req.body;

    let insertQuery = "INSERT INTO usuario (Nome, Email, Senha) VALUES (?, ?, ?)";
    db.query(insertQuery, [Nome, Email, Senha], (err, result) => {
        res.send(result)
    });

});

app.get('/getUsers', (req, res) => {

    let query = 'SELECT * FROM usuario';

    db.query(query, (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })

})

app.post('/edituser', (req, res) => {
    let {id} = req.body;
    console.log(id);
    // let {Nome} = req.body;
    // let {Email} = req.body;
    // let {Senha} = req.body;

    // let query = "UPADATE usuario  SET Nome = ?, Email = ?, Senha = ? WHERE id = ?";

    // db.query(query, [Nome, Email, Senha, id], (err, result) => {
    //     res.send(result);
    // })
})



