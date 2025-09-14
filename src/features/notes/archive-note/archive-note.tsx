import { Button } from "@/components";
import styles from "./archive-note.module.scss";
import { ArchiveIcon } from "@/assets";
import { ArchiveNoteModal } from "./archive-note-modal";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useToggle } from "@/hooks";

export const ArchiveNote = () => {
  const { t } = useTranslation();
  const { id: activeNoteId } = useParams();

  const { isOpen: isArchiveNoteModalOpen, toggle: archiveNoteModalToggle } =
    useToggle();

  return (
    <>
      <Button
        onClick={archiveNoteModalToggle}
        iconOnly
        icon={<ArchiveIcon className={styles.icon} />}
        variant="secondary"
        className={styles.buttonMobile}
        isFlat
        disabled={false}
      />
      <Button
        onClick={archiveNoteModalToggle}
        leftIcon={<ArchiveIcon />}
        variant="border"
        className={styles.buttonDesktop}
        disabled={false}
      >
        {t("notes.archive-note-button")}
      </Button>
      <ArchiveNoteModal
        noteId={activeNoteId}
        isOpen={isArchiveNoteModalOpen}
        toggle={archiveNoteModalToggle}
      />
    </>
  );
};
