import { SelectField, Separator, Typography } from "@/components";
import styles from "./note-details-meta.module.scss";
import cn from "classnames";
import { formatDate } from "@/utils";
import { Note } from "@/types";
import { TagIcon, ClockIcon } from "@/assets";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { NoteDetailsMetaTitleField } from "./note-details-meta-title-field";

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
  const { t } = useTranslation();

  const renderTagsList = () => {
    return (
      <SelectField
        className={styles.select}
        name="tags"
        placeholder={t("notes.tags-placeholder")}
      />
    );
  };

  return (
    <div className={styles.container}>
      <NoteDetailsMetaTitleField />
      <div className={styles.meta}>
        <NoteDetailsMetaRow
          LabelIcon={<TagIcon className={styles.icon} />}
          label={t("notes.tags")}
          MetaValue={renderTagsList()}
        />
        <NoteDetailsMetaRow
          LabelIcon={<ClockIcon className={styles.icon} />}
          label={t("notes.last-edited")}
          MetaValue={
            <Typography variant="text-5">
              {formatDate(note.created_at)}
            </Typography>
          }
        />
      </div>
      <Separator />
    </div>
  );
};
