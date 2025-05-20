const express = require('express');
const router = express.Router();
const controller = require('../controllers/categoriaTagController');

router.get('/categoria/:categoria_id', controller.listTags);
router.post('/', controller.addTag);
router.delete('/', controller.removeTag);

module.exports = router;
