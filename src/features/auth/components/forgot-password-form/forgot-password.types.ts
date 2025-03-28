import { z } from "zod";
import { forgotPasswordFormValidationSchema } from "./forgot-password-form.validations";

export type ForgotPasswordDataType = z.infer<
  typeof forgotPasswordFormValidationSchema
>;
