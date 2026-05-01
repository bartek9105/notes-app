import { GoBackButton, Typography } from "@/components";
import { ROUTES } from "@/consts";
import { useNavigate } from "react-router-dom";
import styles from "./settings-item-layout.module.scss";
import { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";

interface SettingsItemLayoutProps extends PropsWithChildren {
  title: string;
  hint?: string;
}

export const SettingOptionLayout = ({
  children,
  title,
  hint,
}: SettingsItemLayoutProps) => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <GoBackButton
        onGoBack={() => navigate(ROUTES.settings.root())}
        className={styles.goBackButton}
      >
        {t("settings.go-back-button")}
      </GoBackButton>
      <div className={styles.text}>
        <Typography variant="text-1">{title}</Typography>
        {hint && (
          <Typography variant="text-5" className={styles.hint}>
            {hint}
          </Typography>
        )}
      </div>
      {children}
    </div>
  );
};
