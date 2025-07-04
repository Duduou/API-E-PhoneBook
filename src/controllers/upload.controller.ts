import { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const HOST_PUBLIC = process.env.HOST_PUBLIC || 'localhost';
const PORT = process.env.PORT || 3000;

export const UploadController = {
  uploadSingle(req: Request, res: Response) {
    try {
        if(req.file)
        {
            const fileUrl = `${req.protocol}://${HOST_PUBLIC}:${PORT}/uploads/${req.file.filename}`;
            res.status(201).json({ url: fileUrl });
        }
        else
        {
            res.status(400).json({ error: 'Nenhum arquivo enviado.' });
        }
    }
    catch (error) {
        if (error instanceof Error) {
          res.status(400).json({ error: error.message });
        } else {
          res.status(400).json({ error: 'Ocorreu um erro desconhecido.' });
        }
    }
  }
};
