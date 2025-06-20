import { supabase } from "@/config";
import { SignInWithPasswordPayload } from "./sign-in.types";

export const signInWithGoogle = async () => {
  await supabase.auth.signInWithOAuth({
    provider: "google",
  });
};

export const signInWithPassword = async (
  payload: SignInWithPasswordPayload
) => {
  await supabase.auth.signInWithPassword(payload);
};
