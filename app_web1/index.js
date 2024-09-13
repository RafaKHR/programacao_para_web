const lc = require('./letter_case/letter_case');


//npm init, npm install express@4.18.2


const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send('Abacaxi');
})
   
app.get('/upper/:n', function(req, res){
    let abacaxi = req.params.n
    res.send(lc.upper(abacaxi));
})

app.get('/lower/:n', function(req, res){
    res.send('Abacaxi');
})

const PORT = 8080;
app.listen(PORT, ()=> {
    console.log('Aplicativo está rodando na porta...' + 
    'ESTAMOS DENTRO!!');
} )
