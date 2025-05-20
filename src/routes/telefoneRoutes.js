const express = require('express');
const router = express.Router();
const telefoneController = require('../controllers/telefoneController');

router.get('/estabelecimento/:estabelecimento_id', telefoneController.listByEstabelecimento);
router.get('/:id', telefoneController.getById);
router.post('/', telefoneController.create);
router.put('/:id', telefoneController.update);
router.delete('/:id', telefoneController.remove);

module.exports = router;
