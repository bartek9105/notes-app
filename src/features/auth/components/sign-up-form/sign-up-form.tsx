import { useSignInWithGoogleMutation } from "@/api";
import { ROUTES } from "@/consts";
import { AuthFormLayout } from "../auth-form-layout/auth-form-layout";
import { GoogleAuthLayout } from "../google-auth-layout";
import { AuthHint } from "../auth-hint/auth-hint";
import { useSignUp } from "./sign-up-form.hooks";
import { AuthForm } from "../auth-form";
import { useTranslation } from "react-i18next";

export const SignUpForm = () => {
  const { t } = useTranslation();

  const { isSignUpPending, handleSignUp } = useSignUp();
  const { mutateAsync: signInWithGoogle, isPending: isGoogleSignInPending } =
    useSignInWithGoogleMutation();

  const isPending = isGoogleSignInPending || isSignUpPending;

  const handleSignInWithGoogle = async () => {
    await signInWithGoogle();
  };

  return (
    <AuthFormLayout
      title={t("auth.sign-up.title")}
      hint={t("auth.sign-up.hint")}
    >
      <AuthForm
        onSubmit={handleSignUp}
        isPending={isPending}
        buttonLabel={t("auth.sign-up.form.submit")}
      />
      <GoogleAuthLayout onGoogleAuth={handleSignInWithGoogle} />
      <AuthHint
        linkTo={ROUTES.signIn()}
        hint={t("auth.sign-up.form.hint")}
        linkText={t("auth.sign-up.form.link")}
      />
    </AuthFormLayout>
  );
};
