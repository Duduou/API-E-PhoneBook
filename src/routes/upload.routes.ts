import { Router } from 'express';
import { upload } from '../middlewares/upload.middleware';
import { UploadController } from '../controllers/upload.controller';

const router = Router();

router.post('/upload', upload.single('arquivo'), UploadController.uploadSingle);

export default router;
