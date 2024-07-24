require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

//config JSON response
app.use(express.json());

//Rota publica
app.get('/', (req, res) => {
    res.status(200).json({msg: "Bem vindo a nossa api"}) 
}); 

//registrar user
app.post('/auth/registro', async(req, res) => {
 const {name, email, passwor, confirmpasswor} = req.body

 //validação
 if(!name) {
    return res.status(422).json({msg: 'o nome é obrigatorio'})
 }
})


//credenciais
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;

mongoose.connect(`mongodb+srv://${db_user}:${db_pass}@cluster0.vhfkqme.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`).then(() => {
    app.listen(5500);
    console.log('conectou com sucesso');
})
.catch((err) => console.log(err));

app.listen(5500);