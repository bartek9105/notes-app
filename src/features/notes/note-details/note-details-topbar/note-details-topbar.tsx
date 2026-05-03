import { Button, Separator } from "@/components";
import styles from "./note-details-topbar.module.scss";
import { useTranslation } from "react-i18next";
import { DeleteNote } from "../../delete-note";
import { ArchiveNote, ColorTags, RestoreNote } from "@/features";
import { Note } from "types/notes";
import { GoBackButton } from "@/components";
import { PinNote } from "../../pin-note";

interface NoteDetailsTopbarProps {
  onGoBack: () => void;
  disabled?: boolean;
  note?: Note;
  onDeleteNote: () => void;
}

export const NoteDetailsTopbar = ({
  note,
  onGoBack,
  disabled,
  onDeleteNote,
}: NoteDetailsTopbarProps) => {
  const { t } = useTranslation();

  if (!note) return null;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <GoBackButton onGoBack={onGoBack}>{t("notes.go-back")}</GoBackButton>
        <div className={styles.containerRightCol}>
          <PinNote note={note} className={styles.pin} />
          <ColorTags />
          <DeleteNote onDeleteNote={onDeleteNote} />
          {note.isArchived ? <RestoreNote /> : <ArchiveNote />}
          <Button variant="secondary" isFlat disabled={disabled}>
            {t("notes.cancel")}
          </Button>
        </div>
      </div>
      <Separator />
    </div>
  );
};
