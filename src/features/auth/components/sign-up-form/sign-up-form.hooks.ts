import { useSignUpMutation } from "@/api";
import { AuthFormDataType } from "../auth-form";

export const useSignUp = () => {
  const { mutateAsync: signUp, isPending: isSignUpPending } =
    useSignUpMutation();

  const handleSignUp = async (payload: AuthFormDataType) => {
    // TODO: Implement toasts
    try {
      await signUp(payload);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    isSignUpPending,
    handleSignUp,
  };
};
