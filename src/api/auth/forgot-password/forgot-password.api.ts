import { ROUTES } from "@/consts";
import { ForgotPasswordPayload } from "./forgot-password.types";
import { supabase } from "@/config";

export const forgotPassword = async ({ email }: ForgotPasswordPayload) => {
  await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${
      import.meta.env.VITE_EMAIL_REDIRECT
    }/${ROUTES.resetPassword()}`,
  });
};
