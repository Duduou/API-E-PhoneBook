import { z } from 'zod';

export const categoriaSchema = z.object({
  nome: z.string().min(1),
  imagem: z.string().optional(),
});
