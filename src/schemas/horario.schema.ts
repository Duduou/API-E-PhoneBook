import { z } from 'zod';

export const horarioSchema = z.object({
  dom: z.string().optional(),
  seg: z.string().optional(),
  ter: z.string().optional(),
  qua: z.string().optional(),
  qui: z.string().optional(),
  sex: z.string().optional(),
  sab: z.string().optional(),
});
