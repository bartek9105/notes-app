import { supabase } from "../../supabase";
import { SignUpPayload } from "./sign-up.types";

export const signUp = async (payload: SignUpPayload) => {
  await supabase.auth.signUp({
    ...payload,
    options: {
      emailRedirectTo: import.meta.env.VITE_EMAIL_REDIRECT,
    },
  });
};
