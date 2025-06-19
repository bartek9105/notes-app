import { PropsWithChildren, ReactNode } from "react";
import styles from "./notes-layout.module.scss";
import { useScreenSize } from "@/hooks";

interface NotesLayoutProps {
  NotesListComponent: ReactNode;
  NoteDetailsComponent: ReactNode;
  isNoteSelected: boolean;
}

export function NotesLayout({
  NotesListComponent,
  NoteDetailsComponent,
  isNoteSelected,
}: PropsWithChildren<NotesLayoutProps>) {
  const { isDesktop } = useScreenSize();

  const shouldRenderNotesList = !isNoteSelected || isDesktop;

  return (
    <div className={styles.container}>
      {shouldRenderNotesList && (
        <div className={styles.list}>{NotesListComponent}</div>
      )}
      <div className={styles.details}>{NoteDetailsComponent}</div>
      <div className={styles.actions}>ACTIONS</div>
    </div>
  );
}
