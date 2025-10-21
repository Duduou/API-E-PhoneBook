import { Router } from 'express';
import { UsuarioController } from '../controllers/usuario.controller';
import { authenticate } from '../middlewares/auth.middleware';
import { upload } from '../middlewares/upload.middleware';

const router = Router();

router.use(authenticate);

router.post('/foto', upload.single('arquivo'), UsuarioController.uploadFoto);

router.get('/foto', UsuarioController.getFoto);

router.get('/nome', UsuarioController.getNome);

router.get('/id', UsuarioController.getId);

export default router;
