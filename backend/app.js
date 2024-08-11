require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).json({msg: "Bem vindo a nossa api"}) 
}); 

app.get("/user/:id", checkT, async (req, res) => {
    const id = req.params.id
   
    const user = await User.findById(id, '-senha')

    if (!user) {
        return res.status(404).json({msg: 'usuario não existe'});
    }

    return res.status(200).json({user});

})

function checkT(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]

    if (!token) {
        return res.status(401).json({msg: "acesso negado"})
    }

    try {

        const secret = process.env.secret
        jwt.verify(token, secret)

        next()
    }
    catch (error) {
        res.status(400).json({msg: "token errado"})
    }
}


const User = require('./models/user')


app.post('/auth/registro', async(req, res) => {
 const {nome, email, senha, confirmarSenha} = req.body

 //validação
 if(!nome) {
    return res.status(422).json({msg: 'o nome é obrigatorio'});
 }

 if(!email) {
    return res.status(422).json({msg: 'o email é obrigatorio'});
 }

 if(!senha) {
    return res.status(422).json({msg: 'a password é obrigatorio'});
 }

 if (senha !== confirmarSenha) {
    return res.status(422).json({msg: 'senhas diferentes'});
 }

 //checar usuario

 const userExiste = await User.findOne({email: email});

 if (userExiste) {
    return res.status(422).json({msg: 'por favor utilize outro email'});
 }

 //criar senha
 const salt = await bcrypt.genSalt(12)
 const senhaHash = await bcrypt.hash(senha, salt)

 //criar usuario

 const user = new User({
    nome,
    email,
    senha: senhaHash,
 })

 try {
    await user.save()
    res.status(201).json({msg: 'Usuario criado com sucesso!!'})

 } catch (error) {
    console.log(error);

    res
    .status(500)
    .json({msg: 'Deu ruim para o servidor, tente mais tarde'})
 }

})


//login

app.post("/auth/login", async (req, res) => {
    const {email, senha} = req.body

    if(!email) {
        return res.status(422).json({msg: 'o email é obrigatorio'});
     }
    
     if(!senha) {
        return res.status(404).json({msg: 'a password é obrigatorio'});
     }

    //  checar se usuario existe

    const user = await User.findOne({email: email})

    if (!user) {
        return res.status(422).json({msg: 'usuario não existe'});
    }

    //checar a senha

    const checkSenha = await bcrypt.compare(senha, user.senha)
    if (!checkSenha) {
        return res.status(422).json({msg: 'senha incorrecta'});
    }

    try {

        secret = process.env.secret

        const token = jwt.sign({
            id:user._id,
        },
        secret
    )
    res.status(200).json({msg: 'autenticação realizada com sucesso', token});

    } catch (error) {
        console.log(error);
    
        res
        .status(500)
        .json({msg: 'Deu ruim para o servidor, tente mais tarde'})
     }

})

//credenciais
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;

mongoose.connect(`mongodb+srv://${db_user}:${db_pass}@cluster0.vhfkqme.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`).then(() => {
    app.listen(5501);
    console.log('conectou com sucesso');
})
.catch((err) => console.log(err));

// app.listen(5501);

const port = process.env.PORT || 5500;
app.listen(port, () => {
  console.log(`Server iniciando na porta ${port}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} esta em uso`);
  } else {
    console.error(err);
  }
});
