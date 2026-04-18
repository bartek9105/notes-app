import { Typography } from "@/components";
import styles from "./notes-list-empty-state.module.scss";

interface NotesListEmptyStateProps {
  emptyStateText: string;
}

export const NotesListEmptyState = ({ emptyStateText }: NotesListEmptyStateProps) => {

  return (
    <div className={styles.container}>
      <Typography variant="text-5">{emptyStateText}</Typography>
    </div>
  );
};
