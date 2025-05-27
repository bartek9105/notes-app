import { Note } from "@/types";
import { Typography } from "@/components";
import styles from "./note-list-item.module.scss";
import { formatDate } from "@/utils";
import { NoteTagsList } from "./note-tags-list/note-tags-list";

export type NoteListItemProps = {
  note: Note;
};

export const NoteListItem = ({ note }: NoteListItemProps) => {
  const { title, created_at, tags } = note;

  return (
    <div role="button" aria-pressed="false" className={styles.container}>
      <Typography variant="text-3">{title}</Typography>
      <NoteTagsList tags={tags} />
      <Typography variant="text-6" className={styles.date}>
        {formatDate(created_at)}
      </Typography>
    </div>
  );
};
