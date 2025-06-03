import { Router } from 'express';
import { CategoriaController } from '../controllers/categoria.controller';
import { authenticate } from '../middlewares/auth.middleware';
import { isAdmin } from '../middlewares/isAdmin.middleware';
import { upload } from '../middlewares/upload.middleware';

const router = Router();

router.get('/', CategoriaController.index);
router.get('/:id', CategoriaController.show);
router.post('/',authenticate, isAdmin, CategoriaController.create);
router.put('/:id',authenticate, isAdmin, CategoriaController.update);
router.delete('/:id',authenticate, isAdmin, CategoriaController.delete);
router.post( '/:id/imagem', authenticate, isAdmin, upload.single('arquivo'), CategoriaController.uploadImagem);

export default router;
