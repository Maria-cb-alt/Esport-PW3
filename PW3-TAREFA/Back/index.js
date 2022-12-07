const express = require('express');

const noticiasController = require('./controller/noticiasController');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/', noticiasController);


app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM: http://localhost:3000');
});