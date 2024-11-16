const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json());

let users = JSON.parse(fs.readFileSync('./backend/users.json', 'utf8'));
let messages = JSON.parse(fs.readFileSync('./backend/messages.json', 'utf8'));

app.post('/cadastro', (req, res) => {
  const { nome, email, senha } = req.body;
  const novoUsuario = { id: users.length + 1, nome, email, senha };
  users.push(novoUsuario);
  fs.writeFileSync('./backend/users.json', JSON.stringify(users));
  res.status(200).send('Usuário cadastrado com sucesso!');
});

app.post('/login', (req, res) => {
  const { email, senha } = req.body;
  const usuario = users.find(user => user.email === email && user.senha === senha);
  if (usuario) {
    res.status(200).send({ id: usuario.id, nome: usuario.nome });
  } else {
    res.status(401).send('Credenciais inválidas');
  }
});

app.post('/logout', (req, res) => {
  res.status(200).send('Logout efetuado com sucesso');
});

app.post('/mensagem', (req, res) => {
  const { autor, conteudo } = req.body;
  const novaMensagem = { id: messages.length + 1, autor, conteudo, data: new Date().toISOString() };
  messages.push(novaMensagem);
  fs.writeFileSync('./backend/messages.json', JSON.stringify(messages));
  res.status(200).send('Mensagem adicionada com sucesso!');
});

app.get('/mural', (req, res) => {
  res.status(200).send(messages);
});

app.get('/mensagem/:id', (req, res) => {
  const mensagem = messages.find(msg => msg.id == req.params.id);
  if (mensagem) {
    res.status(200).send(mensagem);
  } else {
    res.status(404).send('Mensagem não encontrada');
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});