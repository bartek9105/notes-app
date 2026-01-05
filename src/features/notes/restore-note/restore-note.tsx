import { Button } from "@/components";
import { RestoreIcon } from "@/assets";
import styles from "./restore-note.module.scss";
import { useUpdateNoteMutation } from "@/api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { ROUTES } from "@/consts";

export const RestoreNote = () => {
  const { t } = useTranslation();
  const { id: activeNoteId } = useParams();
  const navigate = useNavigate();

  const { mutateAsync: updateNoteMutation } = useUpdateNoteMutation();

  const handleRestoreNote = async () => {
    if (!activeNoteId) return;

    try {
      await updateNoteMutation({
        id: activeNoteId,
        isArchived: false,
      });
      navigate(ROUTES.notes.archived.root());
      toast.success(t("notes.restore-note.toasts.success"));
    } catch {
      toast.error("notes.restore-note.toasts.error");
    }
  };

  return (
    <>
      <Button
        onClick={handleRestoreNote}
        iconOnly
        icon={<RestoreIcon className={styles.icon} />}
        variant="secondary"
        className={styles.buttonMobile}
        isFlat
      />
      <Button
        onClick={handleRestoreNote}
        leftIcon={<RestoreIcon />}
        variant="border"
        className={styles.buttonDesktop}
      >
        {t("notes.restore-note.button")}
      </Button>
    </>
  );
};
