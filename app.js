//constantes
const express = require('express');

const path = require('path');

const app = express();



const publicPath= path.resolve(__dirname, './public/image')


app.listen(3000,()=>console.log('todo salio bien'))

//declarando el servidor

app.use(express.static('public'))

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname + '/views/home.html'))
});

