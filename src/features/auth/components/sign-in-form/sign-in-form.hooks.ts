import { useSignInWithPasswordMutation } from "@/api";
import { AuthFormDataType } from "../auth-form";

export const useSignIn = () => {
  const { mutateAsync: signInWithPassword, isPending: isSignUpPending } =
    useSignInWithPasswordMutation();

  const handleSignInWithPassword = async (payload: AuthFormDataType) => {
    // TODO: Implement toasts
    try {
      await signInWithPassword(payload);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    isSignUpPending,
    handleSignInWithPassword,
  };
};
