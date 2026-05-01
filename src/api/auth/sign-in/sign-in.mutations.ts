import { useMutation } from "@tanstack/react-query";
import { signInWithGoogle, signInWithPassword } from "./sign-in.api";
import { SignInWithPasswordPayload } from "./sign-in.types";

export const useSignInWithGoogleMutation = () => {
  return useMutation({
    mutationFn: () => signInWithGoogle(),
  });
};

export const useSignInWithPasswordMutation = () => {
  return useMutation({
    mutationFn: (payload: SignInWithPasswordPayload) =>
      signInWithPassword(payload),
  });
};
