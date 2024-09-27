const express = require('express');
const app = express();
let estoque = [];

app.get('/', function(req, res){
    res.send(`Boas vindas ao estoque, o que deseja?<br>
        Para adicionar um produto: /adicionar/id/nome/quantidade<br>
        Para listar os produtos no estoque: /listar<br>
        Para remover um produto do estoque: /remover/id<br>
        Para editar a quantidade de um produto: /editar/id/quantidade`);
})

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;
    const produtoExistente = estoque.find(produto => produto.id === id);

    if (produtoExistente) {
        return res.status(400).send('Produto com esse ID já existe.');
    }

    const novoProduto = {
        id: id,
        nome: nome,
        qtd: parseInt(qtd),
    };

    estoque.push(novoProduto);
    res.send(`Produto ${nome} adicionado ao estoque com sucesso!`);
});

app.get('/listar', (req, res) => {
    if (estoque.length === 0) {
        return res.send('O estoque está vazio.');
    }

    // Formatar a listagem dos produtos
    let listagemFormatada = estoque.map(produto => {
        return `${produto.id}, ${produto.nome}, ${produto.qtd}`;
    }).join('<br>'); // Usar <br> para quebrar a linha no HTML

    res.send(listagemFormatada); // Enviar a lista formatada como resposta
});

app.get('/remover/:id', (req, res) => {
    const { id } = req.params;
    const index = estoque.findIndex(produto => produto.id === id);

    if (index === -1) {
        return res.status(404).send('Produto não encontrado.');
    }

    const produtoRemovido = estoque.splice(index, 1);
    res.send(`Produto ${produtoRemovido[0].nome} removido do estoque.`);
});

app.get('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;
    const produto = estoque.find(produto => produto.id === id);

    if (!produto) {
        return res.status(404).send('Produto não encontrado.');
    }

    produto.qtd = parseInt(qtd);
    res.send(`A quantidade do produto ${produto.nome} foi alterada para ${qtd}.`);
});

const PORT = 8080;
app.listen(PORT, ()=> {
    console.log('Aplicativo está rodando na porta...' + 'ESTAMOS DENTRO!!');
})