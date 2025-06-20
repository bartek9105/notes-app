import { Separator, Typography } from "@/components";
import styles from "./note-details-meta.module.scss";
import cn from "classnames";
import { formatDate, upperCaseFirstLetter } from "@/utils";
import { Note } from "@/types";
import { TagIcon, ClockIcon } from "@/assets";
import { ReactNode } from "react";

interface NoteDetailsMetaProps {
  note: Note;
}

interface NoteDetailsMetaRowProps {
  LabelIcon: ReactNode;
  label: string;
  MetaValue: ReactNode;
}

const NoteDetailsMetaRow = ({
  LabelIcon,
  label,
  MetaValue,
}: NoteDetailsMetaRowProps) => {
  return (
    <div className={styles.metaRow}>
      <div className={cn(styles.metaCol, styles.metaColLabel)}>
        {LabelIcon}
        <Typography variant="text-6">{label}</Typography>
      </div>
      <div className={cn(styles.metaCol, styles.tags)}>{MetaValue}</div>
    </div>
  );
};

export const NoteDetailsMeta = ({ note }: NoteDetailsMetaProps) => {
  return (
    <div className={styles.container}>
      <Typography variant="text-1" as="h1">
        {note.title}
      </Typography>
      <div className={styles.meta}>
        <NoteDetailsMetaRow
          LabelIcon={<TagIcon />}
          label="Tags"
          MetaValue={note.tags?.map((tag, index) => (
            <Typography variant="text-6" key={index} className={styles.tags}>
              {upperCaseFirstLetter(tag)}
            </Typography>
          ))}
        />
        <NoteDetailsMetaRow
          LabelIcon={<ClockIcon />}
          label="Last edited"
          MetaValue={
            <Typography variant="text-6">
              {formatDate(note.created_at)}
            </Typography>
          }
        />
      </div>
      <Separator />
    </div>
  );
};
