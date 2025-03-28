import { z } from "zod";

export const forgotPasswordFormValidationSchema = z.object({
  email: z.string().email(),
});
