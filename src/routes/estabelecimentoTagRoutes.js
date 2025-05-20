const express = require('express');
const router = express.Router();
const controller = require('../controllers/estabelecimentoTagController');

router.get('/estabelecimento/:estabelecimento_id', controller.listTags);
router.post('/', controller.addTag);
router.delete('/', controller.removeTag);

module.exports = router;
