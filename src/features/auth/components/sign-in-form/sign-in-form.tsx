import { useSignInWithGoogleMutation } from "@/api";
import { ROUTES } from "@/consts";
import { AuthFormLayout } from "../auth-form-layout/auth-form-layout";
import { GoogleAuthLayout } from "../google-auth-layout";
import { AuthHint } from "../auth-hint/auth-hint";
import { useSignIn } from "./sign-in-form.hooks";
import { AuthForm } from "../auth-form";
import { useTranslation } from "react-i18next";

export const SignInForm = () => {
  const { t } = useTranslation();

  const { handleSignInWithPassword, isSignUpPending } = useSignIn();
  const { mutateAsync: signInWithGoogle, isPending: isGoogleSignInPending } =
    useSignInWithGoogleMutation();

  const isPending = isGoogleSignInPending || isSignUpPending;

  const handleSignInWithGoogle = async () => {
    await signInWithGoogle();
  };

  return (
    <AuthFormLayout
      title={t("auth.sign-in.title")}
      hint={t("auth.sign-in.hint")}
    >
      <AuthForm
        onSubmit={handleSignInWithPassword}
        isPending={isPending}
        buttonLabel={t("auth.sign-in.form.submit")}
      />
      <GoogleAuthLayout onGoogleAuth={handleSignInWithGoogle} />
      <AuthHint
        linkTo={ROUTES.signUp()}
        hint={t("auth.sign-in.form.hint")}
        linkText={t("auth.sign-in.form.link")}
      />
    </AuthFormLayout>
  );
};
