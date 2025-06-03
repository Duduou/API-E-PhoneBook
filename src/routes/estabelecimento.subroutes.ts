import { Router } from 'express';
import { FotoController } from '../controllers/foto.controller';
import { TelefoneController } from '../controllers/telefone.controller';
import { EmailController } from '../controllers/email.controller';

const router = Router();

// Fotos
router.post('/estabelecimentos/:id/fotos', FotoController.create);
router.get('/estabelecimentos/:id/fotos', FotoController.index);
router.delete('/fotos/:id', FotoController.delete);

// Telefones
router.post('/estabelecimentos/:id/telefones', TelefoneController.create);
router.get('/estabelecimentos/:id/telefones', TelefoneController.index);
router.delete('/telefones/:id', TelefoneController.delete);

// Emails
router.post('/estabelecimentos/:id/emails', EmailController.create);
router.get('/estabelecimentos/:id/emails', EmailController.index);
router.delete('/emails/:id', EmailController.delete);

export default router;
