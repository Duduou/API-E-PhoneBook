import { Router } from 'express';
import { CategoriaController } from '../controllers/categoria.controller';

const router = Router();

router.get('/', CategoriaController.index);
router.get('/:id', CategoriaController.show);
router.post('/', CategoriaController.create);
router.put('/:id', CategoriaController.update);
router.delete('/:id', CategoriaController.delete);

export default router;
