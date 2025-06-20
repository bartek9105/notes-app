import { Separator, Typography } from "@/components";
import styles from "./note-details-meta.module.scss";
import cn from "classnames";
import { formatDate, upperCaseFirstLetter } from "@/utils";
import { Note } from "@/types";
import { TagIcon, ClockIcon } from "@/assets";

interface NoteDetailsMetaProps {
  note: Note;
}

export const NoteDetailsMeta = ({ note }: NoteDetailsMetaProps) => {
  return (
    <div className={styles.container}>
      <Typography variant="text-1" as="h1">
        {note.title}
      </Typography>
      <div className={styles.meta}>
        <div className={styles.metaRow}>
          <div className={cn(styles.metaCol, styles.metaColLabel)}>
            <TagIcon />
            <Typography variant="text-6">Tags</Typography>
          </div>
          <div className={cn(styles.metaCol, styles.tags)}>
            {note.tags?.map((tag, index) => (
              <Typography variant="text-6" key={index} className={styles.tags}>
                {upperCaseFirstLetter(tag)}
              </Typography>
            ))}
          </div>
        </div>
        <div className={styles.metaRow}>
          <div className={cn(styles.metaCol, styles.metaColLabel)}>
            <ClockIcon />
            <Typography variant="text-6">Last edited</Typography>
          </div>
          <div className={styles.metaCol}>
            <Typography variant="text-6">
              {formatDate(note.created_at)}
            </Typography>
          </div>
        </div>
      </div>
      <Separator />
    </div>
  );
};
