import { Button, Separator } from "@/components";
import styles from "./note-details-topbar.module.scss";
import { ArchiveIcon, ChevronLeftIcon, BinIcon } from "@/assets";

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
          Go Back
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
            Cancel
          </Button>
        </div>
      </div>
      <Separator />
    </div>
  );
};
