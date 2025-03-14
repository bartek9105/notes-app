import { useMutation } from "@tanstack/react-query";
import { signInWithGoogle } from "./sign-in.api";

export const useSignInWithGoogleMutation = () => {
  return useMutation({
    mutationFn: () => signInWithGoogle(),
  });
};
