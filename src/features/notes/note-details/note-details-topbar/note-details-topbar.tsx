import { Button, Separator } from "@/components";
import styles from "./note-details-topbar.module.scss";
import ChevronLeft from "../../../../assets/chevron-left.svg";
import Bin from "../../../../assets/bin.svg";
import Archive from "../../../../assets/archive.svg";

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
          leftIcon={<ChevronLeft className={styles.icon} />}
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
            icon={<Bin className={styles.icon} />}
            variant="secondary"
            className={styles.goBackButton}
            isFlat
          />
          <Button
            onClick={onArchive}
            iconOnly
            icon={<Archive className={styles.icon} />}
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
