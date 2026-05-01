import { passwordValidationSchema } from "@/utils";
import { useTranslation } from "react-i18next";
import { z } from "zod";

export const useChangePasswordValidationSchema = () => {
  const { t } = useTranslation();

  return z
    .object({
      password: passwordValidationSchema,
      confirmPassword: passwordValidationSchema,
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t(
        "settings.change-password.form.confirmPassword.validation.match",
      ),
      path: ["confirmPassword"],
    });
};
