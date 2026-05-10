import { ConfirmationModal } from "@/components";
import styles from "./color-tags-modal.module.scss";
import { CheckIcon, TagIcon } from "@/assets";
import { useNoteDetails } from "../../note-details/note-details.hooks";
import { useEffect, useState } from "react";
import cn from "classnames";

const COLOR_TAGS = [
  {
    id: "red",
    color: "#FB3748",
  },
  {
    id: "green",
    color: "#21C16B",
  },
  {
    id: "blue",
    color: "#335CFF",
  },
  {
    id: "yellow",
    color: "#FFC107",
  },
  {
    id: "purple",
    color: "#9C27B0",
  },
  {
    id: "orange",
    color: "#FF9800",
  },
];

interface ColorTagsModalProps {
  isOpen: boolean;
  toggle: () => void;
}

export const ColorTagsModal = ({ isOpen, toggle }: ColorTagsModalProps) => {
  const { note, updateNote } = useNoteDetails();
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    undefined,
  );

  useEffect(() => {
    setSelectedColor(note?.color || undefined);
  }, [note?.color]);

  const handleUpdateNote = (color?: string) => {
    if (!color) return;
    updateNote({ color });
    toggle();
  };

  return (
    <ConfirmationModal
      isOpen={isOpen}
      title="Label color"
      icon={<TagIcon />}
      cancelButton={{
        text: "Cancel",
        onClick: toggle,
      }}
      confirmButton={{
        text: "Confirm",
        onClick: () => handleUpdateNote(selectedColor),
        variant: "primary",
        disabled: !selectedColor,
      }}
    >
      <ul className={styles.container}>
        {COLOR_TAGS.map(({ id, color }) => (
          <li
            role="button"
            aria-pressed="false"
            className={cn(styles.tag, {
              [styles.selected]: selectedColor === color,
            })}
            style={{ backgroundColor: color }}
            key={id}
            onClick={() => setSelectedColor(color)}
          >
            {selectedColor === color && <CheckIcon className={styles.check} />}
          </li>
        ))}
      </ul>
    </ConfirmationModal>
  );
};
