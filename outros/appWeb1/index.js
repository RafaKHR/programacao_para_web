const lc = require('./letter_case/letter_case');

// Importa o pacote express
const express = require('express');

// Cria uma aplicação express
const app = express();

app.get('/', function(req, res){
    res.send('Hello, World!');
});

app.get('/upper/:n', function(req, res){
    let word = req.params.n;
    res.send(lc.to_upper(word));
});

app.get('/lower/:n', function(req, res){
    let word = req.params.n;
    res.send(lc.to_lower(word));
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});