const express = require('express');
const router = express.Router();
const tagController = require('../controllers/tagController');

router.get('/', tagController.getAll);
router.get('/:id', tagController.getById);
router.post('/', tagController.create);
router.put('/:id', tagController.update);
router.delete('/:id', tagController.remove);

module.exports = router;
