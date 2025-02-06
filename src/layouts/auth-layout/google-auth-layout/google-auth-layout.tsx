import { Button, Separator, Typography } from "@/components";
import styles from "./google-auth-layout.module.scss";
import { GoogleIcon } from "@/icons";

interface GoogleAuthLayoutProps {
  onGoogleAuth: () => void;
}

export const GoogleAuthLayout = ({ onGoogleAuth }: GoogleAuthLayoutProps) => {
  return (
    <div className={styles.container}>
      <Separator />
      <div className={styles.content}>
        <Typography variant="text-5" className={styles.hint}>
          Or log in with:
        </Typography>
        <Button
          variant="border"
          leftIcon={<GoogleIcon />}
          onClick={onGoogleAuth}
        >
          Google
        </Button>
      </div>
      <Separator />
    </div>
  );
};
