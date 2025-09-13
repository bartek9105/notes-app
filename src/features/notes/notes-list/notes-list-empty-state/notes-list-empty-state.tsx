import { Typography } from "@/components";
import styles from "./notes-list-empty-state.module.scss";
import { useTranslation } from "react-i18next";

export const NotesListEmptyState = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Typography variant="text-5">{t("notes.empty-state")}</Typography>
    </div>
  );
};
