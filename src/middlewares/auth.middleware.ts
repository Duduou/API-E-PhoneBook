import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { authConfig } from '../config/auth';

export function authenticate(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1];
  if(token)
  {
    try {
      const decoded = jwt.verify(token, authConfig.secret) as any;
      req.user = { id: Number(decoded.sub), admin: decoded.admin };
      next();
    }
    catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(401).json({ error: 'Token inválido' });
      }
    }
  }
  else res.status(401).json({ error: 'Token ausente' });
}
