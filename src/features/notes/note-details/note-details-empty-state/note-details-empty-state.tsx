import styles from "./note-details-empty-state.module.scss";
import { LogoFeather } from "@/assets";
import { Typography } from "@/components";
import { useTranslation } from "react-i18next";

export const NoteDetailsEmptyState = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <LogoFeather className={styles.icon} />
        <Typography variant="text-1">
          {t("notes.details-empty-state")}
        </Typography>
      </div>
    </div>
  );
};
