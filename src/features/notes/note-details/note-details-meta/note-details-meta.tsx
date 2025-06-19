import { Separator, Typography } from "@/components";
import styles from "./note-details-meta.module.scss";
import Tag from "../../../../assets/tag.svg";
import Clock from "../../../../assets/clock.svg";
import cn from "classnames";
import { formatDate, upperCaseFirstLetter } from "@/utils";
import { Note } from "@/types";

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
            <Tag />
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
            <Clock />
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
