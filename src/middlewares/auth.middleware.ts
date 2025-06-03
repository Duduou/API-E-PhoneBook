import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { authConfig } from '../config/auth';

export function authenticate(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'Token ausente' });

  try {
    const decoded = jwt.verify(token, authConfig.secret) as any;
    req.user = { id: decoded.sub, admin: decoded.admin };
    next();
  } catch {
    return res.status(401).json({ error: 'Token inválido' });
  }
}
