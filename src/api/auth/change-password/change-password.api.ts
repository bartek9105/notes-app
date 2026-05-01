import { supabase } from "@/config";
import { ChangePasswordPayload } from "./change-password.types";

export const changePassword = async ({ password }: ChangePasswordPayload) => {
  const { error } = await supabase.auth.updateUser({
    password,
  });

  if (error) {
    throw error;
  }
};
