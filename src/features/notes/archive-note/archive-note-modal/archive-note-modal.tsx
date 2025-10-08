import { Modal } from "@/components";
import { BinIcon } from "@/assets";
import { useUpdateNoteMutation } from "@/api";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { ROUTES } from "@/consts";
import { useNavigate } from "react-router-dom";

interface DeleteNoteModalProps {
  noteId?: string;
  isOpen: boolean;
  toggle: () => void;
}

export const ArchiveNoteModal = ({
  isOpen,
  toggle,
  noteId,
}: DeleteNoteModalProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { mutateAsync: updateNoteMutation, isPending: isUpdatingNote } =
    useUpdateNoteMutation();

  const handleArchiveNote = async () => {
    if (!noteId) return;

    try {
      await updateNoteMutation({
        id: noteId,
        isArchived: true,
      });
      toast.success(t("notes.archive-note-modal.toasts.success"));
      navigate(ROUTES.notes.allNotes.root());
    } catch {
      toast.error("notes.archive-note-modal.toasts.error");
    } finally {
      toggle();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      title={t("notes.archive-note-modal.title")}
      hint={t("notes.archive-note-modal.hint")}
      icon={<BinIcon />}
      cancelButton={{
        text: t("notes.archive-note-modal.buttons.cancel"),
        onClick: toggle,
      }}
      confirmButton={{
        text: t("notes.archive-note-modal.buttons.confirm"),
        onClick: handleArchiveNote,
        variant: "primary",
      }}
      buttonsDisabled={isUpdatingNote}
    />
  );
};
