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
app.use(express.json);

app.post('/makecadastro', (req, res) => {

    const {name} = req.body;

    console.log(name);
})


app.listen('3001', () => {
    console.log('rodando na porta 3001')
});


