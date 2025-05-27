import { PropsWithChildren, ReactNode } from "react";
import styles from "./notes-layout.module.scss";

interface NotesLayoutProps {
  NotesListComponent: ReactNode;
}

export function NotesLayout({
  NotesListComponent,
}: PropsWithChildren<NotesLayoutProps>) {
  return (
    <div className={styles.container}>
      <div className={styles.list}>{NotesListComponent}</div>
      <div className={styles.details}>NOTE DETAILS</div>
      <div className={styles.actions}>ACTIONS</div>
    </div>
  );
}
