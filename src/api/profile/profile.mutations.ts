import { useMutation, useQueryClient } from "@tanstack/react-query";
import { completeOnboarding } from "./profile.api";
import { PROFILE_QUERY_KEYS } from "./profile.const";

export const useCompleteOnboardingMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: completeOnboarding,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [PROFILE_QUERY_KEYS.getMyProfile],
      });
    },
  });
};
