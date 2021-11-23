//constantes
const { urlencoded } = require('body-parser');
const express = require('express');

const path = require('path');

const app = express();





const publicPath= path.resolve(__dirname, './public/image')

app.use(express.static(publicPath))

app.use(express.urlencoded({extended: true}))

//declarando el servidor

app.use(express.static('public'))

app.get('/',(req, res)=>{
    res.sendFile(path.resolve(__dirname + '/views/home.html'))
});


app.get('/register', (req, res)=>{
    res.sendFile(path.resolve(__dirname + '/views/register.html'))
});

app.get('/login', (req, res)=>{
    res.sendFile(path.resolve(__dirname + '/views/login.html'))
});


app.listen(3000,()=>console.log('todo salio bien'))