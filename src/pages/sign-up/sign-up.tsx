import { useSignInWithGoogleMutation } from "@/api";
import { AuthLayout, GoogleAuthLayout } from "../../layouts";
import { SignUpForm } from "./components";
import styles from "./sign-up.module.scss";

export const SignUp = () => {
  const { mutateAsync: signInWithGoogle } = useSignInWithGoogleMutation();

  const handleSignInWithGoogle = async () => {
    await signInWithGoogle();
  };

  return (
    <AuthLayout
      title="Create Your Account"
      hint="Sign up to start organizing your notes and boost your productivity."
    >
      <div className={styles.content}>
        <SignUpForm onSubmit={() => {}} />
        <GoogleAuthLayout onGoogleAuth={handleSignInWithGoogle} />
      </div>
    </AuthLayout>
  );
};
