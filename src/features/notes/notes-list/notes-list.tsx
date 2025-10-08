import styles from "./notes-list.module.scss";
import { NoteListItem } from "./note-list-item";
import { Button, InfiniteScrollContainer, Typography } from "@/components";
import { motion } from "motion/react";
import { PlusIcon } from "@/assets";

import { NotesListProps } from "./notes-list.types";
import { useNotesList } from "./notes-list.hooks";
import { NotesListEmptyState } from "./notes-list-empty-state";
import { LIST_ANIMATION, LIST_ITEM_ANIMATION } from "@/consts";
import { useTranslation } from "react-i18next";

export const NotesList = ({
  title,
  buttonText,
  onNoteSelect,
  isArchived = false,
}: NotesListProps) => {
  const { t } = useTranslation();

  const {
    createNote,
    isCreatingNewNote,
    notes,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    activeNoteId,
  } = useNotesList({ isArchived });

  const isEmpty = notes.length === 0 && !isLoading;

  const renderNotesList = () => {
    if (isEmpty) {
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
          variants={LIST_ANIMATION}
          initial="hidden"
          animate="visible"
          className={styles.list}
        >
          {notes.map((note) => (
            <motion.li
              key={note.id}
              onClick={() => onNoteSelect?.(note.id)}
              className={styles.listItem}
              variants={LIST_ITEM_ANIMATION}
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
      {isArchived && (
        <Typography variant="text-5" className={styles.archivedNoteHint}>
          {t("notes.archived-note-list-hint")}
        </Typography>
      )}
      {!isArchived && (
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
      )}
      {renderNotesList()}
      {!isArchived && (
        <Button
          className={styles.addNoteMobileButton}
          iconOnly
          icon={<PlusIcon />}
          onClick={createNote}
          isLoading={isCreatingNewNote}
        />
      )}
    </>
  );
};
