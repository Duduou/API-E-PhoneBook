const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Rotas CRUD
router.get('/', usuarioController.getAll);
router.get('/:id', usuarioController.getById);
router.post('/', usuarioController.create);
router.put('/:id', usuarioController.update);
router.delete('/:id', usuarioController.remove);

module.exports = router;
