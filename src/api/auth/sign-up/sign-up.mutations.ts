import { useMutation } from "@tanstack/react-query";
import { signUp } from "./sign-up.api";
import { SignUpPayload } from "./sign-up.types";

export const useSignUpMutation = () => {
  return useMutation({
    mutationFn: (payload: SignUpPayload) => signUp(payload),
  });
};
