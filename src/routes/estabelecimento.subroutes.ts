import { Router } from 'express';
import { FotoController } from '../controllers/foto.controller';
import { TelefoneController } from '../controllers/telefone.controller';
import { EmailController } from '../controllers/email.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

// Fotos
router.post('/estabelecimentos/:id/fotos',authenticate, FotoController.create);
router.get('/estabelecimentos/:id/fotos', FotoController.index);
router.delete('/fotos/:id',authenticate, FotoController.delete);

// Telefones
router.post('/estabelecimentos/:id/telefones',authenticate, TelefoneController.create);
router.get('/estabelecimentos/:id/telefones', TelefoneController.index);
router.delete('/telefones/:id',authenticate, TelefoneController.delete);

// Emails
router.post('/estabelecimentos/:id/emails',authenticate, EmailController.create);
router.get('/estabelecimentos/:id/emails', EmailController.index);
router.delete('/emails/:id',authenticate, EmailController.delete);

export default router;
