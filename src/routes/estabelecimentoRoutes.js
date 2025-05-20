const express = require('express');
const router = express.Router();
const controller = require('../controllers/estabelecimentoController');

router.get('/', controller.getAll);
router.get('/busca', controller.search);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;
