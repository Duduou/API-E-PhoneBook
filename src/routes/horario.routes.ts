import { Router } from 'express';
import { HorarioController } from '../controllers/horario.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.use(authenticate);

router.post('/estabelecimentos/:id/horario', HorarioController.create);
router.get('/estabelecimentos/:id/horario', HorarioController.get);
router.put('/estabelecimentos/:id/horario', HorarioController.update);
router.delete('/estabelecimentos/:id/horario', HorarioController.delete);

export default router;
