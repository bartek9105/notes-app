import { passwordValidationSchema } from "@/utils";
import { z } from "zod";

export const authFormValidationSchema = z.object({
  email: z.string().email(),
  password: passwordValidationSchema,
});
