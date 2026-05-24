import { supabase } from "@/config";
import { Profile } from "./profile.types";

export const getMyProfile = async (): Promise<Profile | null> => {
  const { data, error } = await supabase
    .from("profiles")
    .select("id, has_completed_onboarding, created_at")
    .single();

  if (error) {
    throw error;
  }

  return data;
};

export const completeOnboarding = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Not authenticated");
  }

  const { error } = await supabase
    .from("profiles")
    .update({ has_completed_onboarding: true })
    .eq("id", user.id);

  if (error) {
    throw error;
  }
};
