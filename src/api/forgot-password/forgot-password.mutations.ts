import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "./forgot-password.api";
import { ForgotPasswordPayload } from "./forgot-password.types";

export const useForgotPasswordMutation = () => {
  return useMutation({
    mutationFn: (payload: ForgotPasswordPayload) => forgotPassword(payload),
  });
};
