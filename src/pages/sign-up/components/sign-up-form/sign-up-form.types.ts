import { z } from "zod";
import { signUpFormValidationSchema } from "./sign-up-form.validations";

export type SignUpFormDataType = z.infer<typeof signUpFormValidationSchema>;
