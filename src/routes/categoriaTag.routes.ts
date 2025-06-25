import { Router } from 'express';
import { CategoriaTagController } from '../controllers/categoriaTag.controller';
import { authenticate } from '../middlewares/auth.middleware';
import { isAdmin } from '../middlewares/isAdmin.middleware';

const router = Router();

router.use(authenticate, isAdmin);

router.post('/categorias/:id/tags', CategoriaTagController.associar);
router.delete('/categorias/:id/tags/:tagId', CategoriaTagController.desassociar);
router.get('/categorias/:id/tags', CategoriaTagController.listar);

export default router;
