import { ROUTES } from "@/consts";
import { supabase } from "../../supabase";
import { ForgotPasswordPayload } from "./forgot-password.types";

export const forgotPassword = async ({ email }: ForgotPasswordPayload) => {
  await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${
      import.meta.env.VITE_EMAIL_REDIRECT
    }/${ROUTES.resetPassword()}`,
  });
};
