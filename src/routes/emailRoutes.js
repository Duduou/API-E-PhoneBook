const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

router.get('/estabelecimento/:estabelecimento_id', emailController.listByEstabelecimento);
router.get('/:id', emailController.getById);
router.post('/', emailController.create);
router.put('/:id', emailController.update);
router.delete('/:id', emailController.remove);

module.exports = router;
