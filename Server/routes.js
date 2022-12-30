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




