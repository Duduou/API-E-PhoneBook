import { z } from 'zod';

export const fotoSchema = z.object({
  url: z.string().url(),
});
