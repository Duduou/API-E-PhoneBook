const express = require('express');
const router = express.Router();
const controller = require('../controllers/estabelecimentoCategoriaController');

// Listar categorias de um estabelecimento
router.get('/estabelecimento/:estabelecimento_id', controller.listCategorias);

// Adicionar categoria a estabelecimento
router.post('/', controller.addCategoria);

// Remover categoria de estabelecimento
router.delete('/', controller.removeCategoria);

module.exports = router;
