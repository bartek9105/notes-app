import { useMutation } from "@tanstack/react-query";
import { signInWithGoogle } from "./sign-in.api";

export const useSignInWithGoogle = () => {
  return useMutation({
    mutationFn: () => signInWithGoogle(),
  });
};
