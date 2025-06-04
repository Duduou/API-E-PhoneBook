import { Router } from 'express';
import { FavoritaController } from '../controllers/favorita.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.use(authenticate);

router.post('/favoritos/:id', FavoritaController.favoritar);
router.delete('/favoritos/:id', FavoritaController.desfavoritar);
router.get('/favoritos', FavoritaController.listar);

export default router;
