import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signOut } from "./sign-out.api";

export const useSignOutMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      queryClient.clear();
    },
  });
};
