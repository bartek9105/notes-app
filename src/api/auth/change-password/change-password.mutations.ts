import { useMutation } from "@tanstack/react-query";
import { changePassword } from "./change-password.api";
import { ChangePasswordPayload } from "./change-password.types";

export const useChangePasswordMutation = () => {
  return useMutation({
    mutationFn: (payload: ChangePasswordPayload) => changePassword(payload),
  });
};
