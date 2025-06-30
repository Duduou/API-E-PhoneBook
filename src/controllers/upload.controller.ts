import { Request, Response } from 'express';

export const UploadController = {
  uploadSingle(req: Request, res: Response) {
    try {
        if(req.file)
        {
            const fileUrl = `${req.protocol}://192.168.1.203:3000/uploads/${req.file.filename}`;
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
