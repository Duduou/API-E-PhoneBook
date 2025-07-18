import { z } from 'zod';

export const estabelecimentoSchema = z.object({
  nome: z.string().min(1),
  descricao: z.string().min(1),
  endereco: z.string().min(1),
  latitude: z.coerce.number(),
  longitude: z.coerce.number(),
  whatsapp: z.string().optional(),
  facebook: z.string().optional(),
  instagram: z.string().optional(),
  fotoPerfil: z.string().optional(),
});
