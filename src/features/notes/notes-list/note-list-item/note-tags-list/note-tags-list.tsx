import { Note } from "@/types";
import styles from "./note-tags-list.module.scss";
import { Typography } from "@/components";

interface NoteTagsListProps {
  tags: Note["tags"];
}

const upperCaseFirstLetter = (tag: string) =>
  tag.charAt(0).toUpperCase() + tag.slice(1);

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
