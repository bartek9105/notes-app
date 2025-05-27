import { PropsWithChildren, ReactNode } from "react";
import styles from "./notes-layout.module.scss";

interface NotesLayoutProps {
  renderNotesList: () => ReactNode;
}

export function NotesLayout({
  renderNotesList,
}: PropsWithChildren<NotesLayoutProps>) {
  return (
    <div className={styles.container}>
      <div className={styles.list}>{renderNotesList()}</div>
      <div className={styles.details}>NOTE DETAILS</div>
      <div className={styles.actions}>ACTIONS</div>
    </div>
  );
}
