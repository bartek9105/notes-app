import { Button, Separator } from "@/components";
import styles from "./note-details-topbar.module.scss";
import { ArchiveIcon, ChevronLeftIcon } from "@/assets";
import { useTranslation } from "react-i18next";
import { DeleteNote } from "../../delete-note";

interface NoteDetailsTopbarPfgrops {
  onGoBack: () => void;
  onArchive: () => void;
  disabled?: boolean;
}

export const NoteDetailsTopbar = ({
  onArchive,
  onGoBack,
  disabled,
}: NoteDetailsTopbarPfgrops) => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Button
          onClick={onGoBack}
          leftIcon={<ChevronLeftIcon className={styles.icon} />}
          variant="secondary"
          className={styles.goBackButton}
          isFlat
        >
          {t("notes.go-back")}
        </Button>
        <div className={styles.containerRightCol}>
          <DeleteNote />
          <Button
            onClick={onArchive}
            iconOnly
            icon={<ArchiveIcon className={styles.icon} />}
            variant="secondary"
            className={styles.goBackButton}
            isFlat
            disabled={disabled}
          />
          <Button variant="secondary" isFlat disabled={disabled}>
            {t("notes.cancel")}
          </Button>
        </div>
      </div>
      <Separator />
    </div>
  );
};
