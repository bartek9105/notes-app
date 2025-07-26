import styles from "./notes-list.module.scss";
import { NoteListItem } from "./note-list-item";
import { Button, InfiniteScrollContainer, Typography } from "@/components";
import { motion } from "motion/react";
import { PlusIcon } from "@/assets";

import {
  itemVariantsAnimation,
  listVariantsAnimation,
} from "./notes-list.const";
import { NotesListProps } from "./notes-list.types";

export const NotesList = ({
  title,
  notes,
  buttonText,
  onNoteSelect,
  isLoading,
  isFetchingNextPage,
  hasNextPage,
  onFetchNextPage,
  activeNoteId,
  onCreateNote,
  isCreatingNewNote,
}: NotesListProps) => {
  return (
    <>
      <Typography variant="text-1" className={styles.title}>
        {title}
      </Typography>
      <div className={styles.glass}>
        <Button
          className={styles.addNoteDesktopButton}
          leftIcon={<PlusIcon />}
          onClick={onCreateNote}
          isLoading={isCreatingNewNote}
        >
          {buttonText}
        </Button>
      </div>
      <InfiniteScrollContainer
        isFetching={isLoading}
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
        onScrollEndCallback={onFetchNextPage}
      >
        <motion.ul
          variants={listVariantsAnimation}
          initial="hidden"
          animate="visible"
          className={styles.list}
        >
          {notes.map((note) => (
            <motion.li
              key={note.id}
              onClick={() => onNoteSelect?.(note.id)}
              className={styles.listItem}
              variants={itemVariantsAnimation}
              initial="hidden"
              animate="visible"
            >
              <NoteListItem note={note} isActive={activeNoteId === note.id} />
            </motion.li>
          ))}
        </motion.ul>
      </InfiniteScrollContainer>
      <Button
        className={styles.addNoteMobileButton}
        iconOnly
        icon={<PlusIcon />}
        onClick={onCreateNote}
        isLoading={isCreatingNewNote}
      />
    </>
  );
};
