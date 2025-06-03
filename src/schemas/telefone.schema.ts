import { z } from 'zod';

export const telefoneSchema = z.object({
  numero: z.string().min(5),
});
