import { PropsWithChildren, ReactNode } from "react";
import styles from "./notes-layout.module.scss";
import { useScreenSize } from "@/hooks";

interface NotesLayoutProps {
  NotesList: ReactNode;
  NoteDetails: ReactNode;
  isNoteSelected: boolean;
}

export function NotesLayout({
  NotesList,
  NoteDetails,
  isNoteSelected,
}: PropsWithChildren<NotesLayoutProps>) {
  const { isDesktop } = useScreenSize();

  const shouldRenderNotesList = isDesktop || (!isNoteSelected && !isDesktop);

  return (
    <div className={styles.container}>
      {shouldRenderNotesList && <div className={styles.list}>{NotesList}</div>}
      <div className={styles.details}>{NoteDetails}</div>
      <div className={styles.actions}>ACTIONS</div>
    </div>
  );
}
