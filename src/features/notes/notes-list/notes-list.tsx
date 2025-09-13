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
import { useNotesList } from "./notes-list.hooks";
import { NotesListEmptyState } from "./notes-list-empty-state";

export const NotesList = ({
  title,
  buttonText,
  onNoteSelect,
}: NotesListProps) => {
  const {
    createNote,
    isCreatingNewNote,
    notes,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    activeNoteId,
  } = useNotesList();

  const renderNotesList = () => {
    if (notes.length === 0) {
      return <NotesListEmptyState />;
    }

    return (
      <InfiniteScrollContainer
        isFetching={isLoading}
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
        onScrollEndCallback={fetchNextPage}
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
    );
  };

  return (
    <>
      <Typography variant="text-1" className={styles.title}>
        {title}
      </Typography>
      <div className={styles.glass}>
        <Button
          className={styles.addNoteDesktopButton}
          leftIcon={<PlusIcon />}
          onClick={createNote}
          isLoading={isCreatingNewNote}
        >
          {buttonText}
        </Button>
      </div>
      {renderNotesList()}
      <Button
        className={styles.addNoteMobileButton}
        iconOnly
        icon={<PlusIcon />}
        onClick={createNote}
        isLoading={isCreatingNewNote}
      />
    </>
  );
};
