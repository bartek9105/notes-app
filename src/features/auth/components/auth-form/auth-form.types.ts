import { z } from "zod";
import { authFormValidationSchema } from "./auth-form.validations";

export type AuthFormDataType = z.infer<typeof authFormValidationSchema>;
