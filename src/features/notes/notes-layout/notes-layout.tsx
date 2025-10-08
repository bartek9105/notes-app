import { PropsWithChildren, ReactNode } from "react";
import styles from "./notes-layout.module.scss";
import { useScreenSize } from "@/hooks";

interface NotesLayoutProps {
  NotesList: ReactNode;
  NoteDetails: ReactNode;
  NoteActions: ReactNode;
  isNoteSelected: boolean;
}

export function NotesLayout({
  NotesList,
  NoteDetails,
  NoteActions,
  isNoteSelected,
}: PropsWithChildren<NotesLayoutProps>) {
  const { isDesktop } = useScreenSize();

  const shouldRenderNotesList = isDesktop || (!isNoteSelected && !isDesktop);

  return (
    <div className={styles.container}>
      {shouldRenderNotesList && <div className={styles.list}>{NotesList}</div>}
      <div className={styles.details}>{isNoteSelected && NoteDetails}</div>
      {isNoteSelected && <div className={styles.actions}>{NoteActions}</div>}
    </div>
  );
}
