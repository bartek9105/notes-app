import { useSignUpMutation } from "@/api";
import { AuthFormDataType } from "../auth-form";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

export const useSignUp = () => {
  const { t } = useTranslation();

  const { mutateAsync: signUp, isPending: isSignUpPending } =
    useSignUpMutation();

  const handleSignUp = async (payload: AuthFormDataType) => {
    try {
      await signUp(payload);
      toast.success(t("auth.sign-up.toasts.success"));
    } catch {
      toast.error(t("auth.sign-up.toasts.error"));
    }
  };

  return {
    isSignUpPending,
    handleSignUp,
  };
};
