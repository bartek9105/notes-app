import { Button, Separator } from "@/components";
import styles from "./note-details-topbar.module.scss";
import { useTranslation } from "react-i18next";
import { DeleteNote } from "../../delete-note";
import { ArchiveNote, RestoreNote } from "@/features";
import { Note } from "types/notes";
import { GoBackButton } from "@/components";

interface NoteDetailsTopbarPfgrops {
  onGoBack: () => void;
  disabled?: boolean;
  isArchived: Note["isArchived"];
  onDeleteNote: () => void;
}

export const NoteDetailsTopbar = ({
  onGoBack,
  disabled,
  isArchived,
  onDeleteNote,
}: NoteDetailsTopbarPfgrops) => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <GoBackButton onGoBack={onGoBack}>{t("notes.go-back")}</GoBackButton>
        <div className={styles.containerRightCol}>
          <DeleteNote onDeleteNote={onDeleteNote} />
          {isArchived ? <RestoreNote /> : <ArchiveNote />}
          <Button variant="secondary" isFlat disabled={disabled}>
            {t("notes.cancel")}
          </Button>
        </div>
      </div>
      <Separator />
    </div>
  );
};
