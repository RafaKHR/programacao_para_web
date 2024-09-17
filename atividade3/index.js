const calculadora = require('./calculadora');

const express = require('express');

const app = express();

app.get('/somar/:n1/:n2', function(req, res){
    let n1 = parseFloat(req.params.n1)
    let n2 = parseFloat(req.params.n2)
    let resul = calculadora.soma(n1, n2);
    res.send(`A soma entre ${n1} e ${n2} é: ${resul}`);
})

app.get('/subtrair/:n1/:n2', function(req, res){
    let n1 = parseFloat(req.params.n1)
    let n2 = parseFloat(req.params.n2)
    let resul = calculadora.subtracao(n1, n2);
    res.send(`A soma entre ${n1} e ${n2} é: ${resul}`);
})

app.get('/multiplicar/:n1/:n2', function(req, res){
    let n1 = parseFloat(req.params.n1)
    let n2 = parseFloat(req.params.n2)
    let resul = calculadora.multiplicacao(n1, n2);
    res.send(`A soma entre ${n1} e ${n2} é: ${resul}`);
})

app.get('/dividir/:n1/:n2', function(req, res){
    let n1 = parseFloat(req.params.n1)
    let n2 = parseFloat(req.params.n2)
    let resul = calculadora.divisao(n1, n2);
    res.send(`A soma entre ${n1} e ${n2} é: ${resul}`);
})


const PORT = 8080;
app.listen(PORT, ()=> {
    console.log('Aplicativo está rodando na porta...' + 'ESTAMOS DENTRO!!');
})

