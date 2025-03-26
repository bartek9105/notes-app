import { useSignInWithGoogleMutation } from "@/api";
import { ROUTES } from "@/consts";
import { AuthFormLayout } from "../auth-form-layout/auth-form-layout";
import { GoogleAuthLayout } from "../google-auth-layout";
import { AuthHint } from "../auth-hint/auth-hint";
import { useSignIn } from "./sign-in-form.hooks";
import { AuthForm } from "../auth-form";

export const SignInForm = () => {
  const { handleSignInWithPassword, isSignUpPending } = useSignIn();
  const { mutateAsync: signInWithGoogle, isPending: isGoogleSignInPending } =
    useSignInWithGoogleMutation();

  const isPending = isGoogleSignInPending || isSignUpPending;

  const handleSignInWithGoogle = async () => {
    await signInWithGoogle();
  };

  return (
    <AuthFormLayout title="Welcome to Note" hint="Please log in to continue">
      <AuthForm
        onSubmit={handleSignInWithPassword}
        isPending={isPending}
        buttonLabel="Login"
      />
      <GoogleAuthLayout onGoogleAuth={handleSignInWithGoogle} />
      <AuthHint
        linkTo={ROUTES.signUp()}
        hint="No account yet?"
        linkText="Sign up"
      />
    </AuthFormLayout>
  );
};
