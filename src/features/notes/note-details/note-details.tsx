import { SkeletonLayout } from "@/components";
import styles from "./note-details.module.scss";

import { NoteDetailsTopbar } from "./note-details-topbar";
import { NoteDetailsForm } from "./note-details-form/note-details-form";
import { AnimatePresence, motion } from "motion/react";
import { APPEAR_ANIMATION } from "@/consts";
import { useNoteDetails } from "./note-details.hooks";

export interface NoteDetailsProps {
  onGoBack: () => void;
}

export const NoteDetails = ({ onGoBack }: NoteDetailsProps) => {
  const { note, isLoadingNote, updateNote, isUpdatingNote } = useNoteDetails();

  const renderContent = () => {
    if (isLoadingNote || !note) {
      return (
        <div className={styles.skeleton}>
          <SkeletonLayout rows={3} />
          <SkeletonLayout rows={3} showGap={false} />
        </div>
      );
    }

    return (
      <AnimatePresence>
        <motion.div key="content" {...APPEAR_ANIMATION}>
          <NoteDetailsForm
            onSubmit={updateNote}
            note={note}
            isLoading={isLoadingNote}
            isUpdating={isUpdatingNote}
          />
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.topbar}>
        <NoteDetailsTopbar onGoBack={onGoBack} disabled={isLoadingNote} />
      </div>
      {renderContent()}
    </div>
  );
};
