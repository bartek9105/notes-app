import { useSignInWithGoogleMutation } from "@/api";
import { ROUTES } from "@/consts";
import { AuthFormLayout } from "../auth-form-layout/auth-form-layout";
import { GoogleAuthLayout } from "../google-auth-layout";
import { AuthHint } from "../auth-hint/auth-hint";
import { useSignUp } from "./sign-up-form.hooks";
import { AuthForm } from "../auth-form";

export const SignUpForm = () => {
  const { isSignUpPending, handleSignUp } = useSignUp();
  const { mutateAsync: signInWithGoogle, isPending: isGoogleSignInPending } =
    useSignInWithGoogleMutation();

  const isPending = isGoogleSignInPending || isSignUpPending;

  const handleSignInWithGoogle = async () => {
    await signInWithGoogle();
  };

  return (
    <AuthFormLayout
      title="Create Your Account"
      hint="Sign up to start organizing your notes and boost your productivity."
    >
      <AuthForm
        onSubmit={handleSignUp}
        isPending={isPending}
        buttonLabel="Sign up"
      />
      <GoogleAuthLayout onGoogleAuth={handleSignInWithGoogle} />
      <AuthHint
        linkTo={ROUTES.signIn()}
        hint="Already have an account?"
        linkText="Login"
      />
    </AuthFormLayout>
  );
};
