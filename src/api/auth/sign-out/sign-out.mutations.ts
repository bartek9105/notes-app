import { useMutation } from "@tanstack/react-query";
import { signOut } from "./sign-out.api";

export const useSignOutMutation = () => {
  return useMutation({
    mutationFn: signOut,
  });
};
