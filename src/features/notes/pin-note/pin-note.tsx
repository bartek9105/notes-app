import { Button } from "@/components";
import styles from "./pin-note.module.scss";
import { PinIcon } from "@/assets";
import cn from "classnames";
import { Note } from "@/types";
import { useUpdateNoteMutation } from "@/api";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

interface PinNoteProps {
  note: Note;
  className?: string;
}

export const PinNote = ({ note, className }: PinNoteProps) => {
  const { t } = useTranslation();
  const { id, isPinned } = note;

  const { mutateAsync: updateNoteMutation } = useUpdateNoteMutation();

  const handlePinNote = async () => {
    if (!id) return;

    try {
      await updateNoteMutation({
        id,
        isPinned: !isPinned,
      });
    } catch {
      toast.error(t("notes.pin-note.error"));
    }
  };

  return (
    <Button
      iconOnly
      icon={
        <PinIcon
          className={cn(styles.pin, { [styles.pinned]: isPinned }, className)}
        />
      }
      isFlat
      variant="border"
      onClick={(e) => {
        e.stopPropagation();
        handlePinNote();
      }}
    />
  );
};
