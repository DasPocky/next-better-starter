import { z } from 'zod';

export const signUpSchema = z.object({
  name: z.string().min(2, 'Mindestens 2 Zeichen'),
  email: z.string().email(),
  password: z.string().min(8, 'Mindestens 8 Zeichen'),
});
