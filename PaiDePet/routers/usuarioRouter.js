const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/cadastro', usuarioController.cadastroView);
router.get('/login', usuarioController.loginView);
router.post('/cadastro', usuarioController.postCadastro);

module.exports = router;