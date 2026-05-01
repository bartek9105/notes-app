import { z } from "zod";
import { useChangePasswordValidationSchema } from "./change-password.validations";

export type ChangePasswordFormDataType = z.infer<
  ReturnType<typeof useChangePasswordValidationSchema>
>;
