import { Modal } from "@/components";
import { BinIcon } from "@/assets";
import { useDeleteNoteMutation } from "@/api";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/consts";

interface DeleteNoteModalProps {
  noteId?: string;
  isOpen: boolean;
  toggle: () => void;
}

export const DeleteNoteModal = ({
  isOpen,
  toggle,
  noteId,
}: DeleteNoteModalProps) => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const { mutateAsync, isPending } = useDeleteNoteMutation();

  const handleDeleteNote = async () => {
    if (!noteId) return;

    try {
      await mutateAsync(noteId);
      toast.success(t("notes.delete-note-modal.toasts.success"));
      navigate(ROUTES.notes.root());
    } catch {
      toast.error("notes.delete-note-modal.toasts.error");
    } finally {
      toggle();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      title={t("notes.delete-note-modal.title")}
      hint={t("notes.delete-note-modal.hint")}
      icon={<BinIcon />}
      cancelButton={{
        text: t("notes.delete-note-modal.buttons.cancel"),
        onClick: toggle,
      }}
      confirmButton={{
        text: t("notes.delete-note-modal.buttons.confirm"),
        onClick: handleDeleteNote,
        variant: "danger",
      }}
      buttonsDisabled={isPending}
    />
  );
};
