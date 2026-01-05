import { useToggle } from "@/hooks";
import { DeleteNoteModal } from "./delete-note-modal";
import { useParams } from "react-router-dom";
import { Button } from "@/components";
import { BinIcon } from "@/assets";
import styles from "./delete-note.module.scss";
import { useTranslation } from "react-i18next";

interface DeleteNoteProps {
  onDeleteNote: () => void;
}

export const DeleteNote = ({ onDeleteNote }: DeleteNoteProps) => {
  const { t } = useTranslation();
  const { id: activeNoteId } = useParams();

  const { isOpen: isDeleteNoteModalOpen, toggle: deleteNoteModalToggle } =
    useToggle();

  return (
    <>
      <Button
        onClick={deleteNoteModalToggle}
        iconOnly
        icon={<BinIcon className={styles.icon} />}
        variant="secondary"
        className={styles.buttonMobile}
        isFlat
      />
      <Button
        onClick={deleteNoteModalToggle}
        leftIcon={<BinIcon />}
        variant="border"
        className={styles.buttonDesktop}
      >
        {t("notes.delete-note-button")}
      </Button>
      <DeleteNoteModal
        noteId={activeNoteId}
        isOpen={isDeleteNoteModalOpen}
        toggle={deleteNoteModalToggle}
        onDeleteNote={onDeleteNote}
      />
    </>
  );
};
