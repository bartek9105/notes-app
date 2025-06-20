import { Button, Separator, Typography } from "@/components";
import styles from "./google-auth-layout.module.scss";
import { GoogleIcon } from "@/assets";
import { useTranslation } from "react-i18next";

interface GoogleAuthLayoutProps {
  onGoogleAuth: () => void;
}

export const GoogleAuthLayout = ({ onGoogleAuth }: GoogleAuthLayoutProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Separator />
      <div className={styles.content}>
        <Typography variant="text-5" className={styles.hint}>
          {t("auth.google.hint")}
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
