import { useSignUpMutation } from "@/api";
import { AuthFormDataType } from "../auth-form";
import { toast } from "sonner";

export const useSignUp = () => {
  const { mutateAsync: signUp, isPending: isSignUpPending } =
    useSignUpMutation();

  const handleSignUp = async (payload: AuthFormDataType) => {
    try {
      await signUp(payload);
      toast.success(
        "Account created successfuly. Check your email for verification.",
      );
    } catch {
      toast.error("Something went wrong when creating account");
    }
  };

  return {
    isSignUpPending,
    handleSignUp,
  };
};
