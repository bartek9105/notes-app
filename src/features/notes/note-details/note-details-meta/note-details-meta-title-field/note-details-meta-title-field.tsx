import { Field } from "@/components";
import styles from "./note-details-meta-title-field.module.scss";

export const NoteDetailsMetaTitleField = () => {
  return (
    <Field
      name="title"
      label=""
      className={styles.field}
      placeholder="Enter a title..."
    />
  );
};
