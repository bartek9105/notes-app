import { z } from "zod";

export const signUpFormValidationSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
