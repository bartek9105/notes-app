import { supabase } from "../../supabase";

export const signInWithGoogle = async () => {
  await supabase.auth.signInWithOAuth({
    provider: "google",
  });
};
