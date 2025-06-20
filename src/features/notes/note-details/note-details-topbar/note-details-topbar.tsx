import { Button, Separator } from "@/components";
import styles from "./note-details-topbar.module.scss";
import { ArchiveIcon, ChevronLeftIcon, BinIcon } from "@/assets";
import { useTranslation } from "react-i18next";

interface NoteDetailsTopbarPfgrops {
  onGoBack: () => void;
  onArchive: () => void;
  onDelete: () => void;
}

export const NoteDetailsTopbar = ({
  onArchive,
  onDelete,
  onGoBack,
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
          <Button
            onClick={onDelete}
            iconOnly
            icon={<BinIcon className={styles.icon} />}
            variant="secondary"
            className={styles.goBackButton}
            isFlat
          />
          <Button
            onClick={onArchive}
            iconOnly
            icon={<ArchiveIcon className={styles.icon} />}
            variant="secondary"
            className={styles.goBackButton}
            isFlat
          />
          <Button variant="secondary" isFlat>
            {t("notes.cancel")}
          </Button>
        </div>
      </div>
      <Separator />
    </div>
  );
};
