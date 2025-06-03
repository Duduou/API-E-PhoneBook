import { z } from 'zod';

export const tagSchema = z.object({
  nome: z.string().min(1),
});
