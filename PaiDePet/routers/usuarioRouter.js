const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/login-cadastro', usuarioController.loginCadastroView);
router.post('/cadastro', usuarioController.postCadastro);

module.exports = router;