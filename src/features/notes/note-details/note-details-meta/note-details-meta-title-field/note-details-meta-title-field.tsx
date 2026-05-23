import { InputField } from "@/components";
import styles from "./note-details-meta-title-field.module.scss";

export const NoteDetailsMetaTitleField = () => {
  return (
    <InputField
      name="title"
      label=""
      className={styles.field}
      placeholder="Enter a title..."
    />
  );
};
