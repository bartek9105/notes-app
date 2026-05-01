import { supabase } from "@/config";

export const getMe = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
};
