import { Note } from "@/types";
import styles from "./note-tags-list.module.scss";
import { Typography } from "@/components";
import { upperCaseFirstLetter } from "@/utils";

interface NoteTagsListProps {
  tags: Note["tags"];
}

export const NoteTagsList = ({ tags }: NoteTagsListProps) => {
  return (
    <ul className={styles.container}>
      {(tags || []).map((tag, idx) => (
        <li key={idx} className={styles.tag}>
          <Typography variant="text-6">{upperCaseFirstLetter(tag)}</Typography>
        </li>
      ))}
    </ul>
  );
};
