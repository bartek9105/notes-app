import { useSignInWithGoogleMutation, useSignUpMutation } from "@/api";
import { AuthHintLayout, AuthLayout, GoogleAuthLayout } from "../../layouts";
import { SignUpForm } from "./components";
import styles from "./sign-up.module.scss";
import { SignUpFormDataType } from "./components/sign-up-form/sign-up-form.types";
import { ROUTES } from "@/consts";

export const SignUp = () => {
  const { mutateAsync: signInWithGoogle, isPending: isGoogleSignInPending } =
    useSignInWithGoogleMutation();
  const { mutateAsync: signUp, isPending: isSignUpPending } =
    useSignUpMutation();

  const isPending = isGoogleSignInPending || isSignUpPending;

  const handleSignUp = async (payload: SignUpFormDataType) => {
    // TODO: Implement toasts
    try {
      await signUp(payload);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignInWithGoogle = async () => {
    await signInWithGoogle();
  };

  return (
    <AuthLayout
      title="Create Your Account"
      hint="Sign up to start organizing your notes and boost your productivity."
    >
      <div className={styles.content}>
        <SignUpForm onSubmit={handleSignUp} isPending={isPending} />
        <GoogleAuthLayout onGoogleAuth={handleSignInWithGoogle} />
        <AuthHintLayout
          linkTo={ROUTES.signIn()}
          hint="Already have an account?"
          linkText="Login"
        />
      </div>
    </AuthLayout>
  );
};
