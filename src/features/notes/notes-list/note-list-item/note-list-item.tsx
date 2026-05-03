import { Note } from "@/types";
import { Typography } from "@/components";
import styles from "./note-list-item.module.scss";
import { formatDate } from "@/utils";
import { NoteTagsList } from "./note-tags-list/note-tags-list";
import cn from "classnames";
import { PinNote } from "../../pin-note";

export type NoteListItemProps = {
  note: Note;
  isActive?: boolean;
};

export const NoteListItem = ({ note, isActive }: NoteListItemProps) => {
  const { title, created_at, tags, color } = note;

  return (
    <div
      role="button"
      aria-pressed="false"
      className={cn(styles.container, {
        [styles.active]: isActive,
        [styles.border]: color,
      })}
      style={{ borderLeftColor: color || "transparent" }}
    >
      <Typography variant="text-3">{title || "Untitled"}</Typography>
      <NoteTagsList tags={tags} />
      <div className={styles.bottom}>
        <Typography variant="text-6" className={styles.date}>
          {formatDate(created_at)}
        </Typography>
        <PinNote note={note} className={styles.pin} />
      </div>
    </div>
  );
};
