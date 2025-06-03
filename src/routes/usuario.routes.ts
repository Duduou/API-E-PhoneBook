import { Router } from 'express';
import { UsuarioController } from '../controllers/usuario.controller';
import { upload } from '../middlewares/upload.middleware';

const router = Router();


router.post('/foto', upload.single('arquivo'), UsuarioController.uploadFoto);

export default router;
