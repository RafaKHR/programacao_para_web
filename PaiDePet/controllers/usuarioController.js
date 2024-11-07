const Usuario = require('../models/usuario');

function cadastroView(req, res){
    let erro_form = req.query.erro_form;
    res.render('login-cadastro.html', {erro_form});
}

function loginView(req, res){
    let erro_login = req.query.erro_login;
    res.render('login-cadastro.html', {erro_login});
}

function postCadastro(req, res){
    let dados = {
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
    };

    let erro_form = false;
    if(dados.nome.length == 0){
        erro_form = true;
    }
    if(dados.email.length == 0){
        erro_form = true;
    }
    if(dados.senha.length == 0){
        erro_form = true;
    }

    if(erro_form){
        res.redirect(`/login-cadastro?erro_form=1`);
    }
    else{
        Usuario.create(dados).then(()=>{
            res.redirect('index.html');
        }).catch((err)=>{
            console.log(err);
            res.redirect(`/login-cadastro?erro_form=1`);
        });
    }
    
}

module.exports = {
    cadastroView,
    loginView,
    postCadastro
}