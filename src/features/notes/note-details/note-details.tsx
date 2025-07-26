import { Note, UpdateNotePayload } from "@/types";
import { SkeletonLayout } from "@/components";
import styles from "./note-details.module.scss";

import { NoteDetailsTopbar } from "./note-details-topbar";
import { NoteDetailsForm } from "./note-details-form/note-details-form";
import { AnimatePresence, motion } from "motion/react";
import { APPEAR_ANIMATION } from "@/consts";

export interface NoteDetailsProps {
  note?: Note | null;
  isLoading: boolean;
  isUpdating: boolean;
  onGoBack: () => void;
  onSaveNote: (payload: UpdateNotePayload) => void;
}

export const NoteDetails = ({
  note,
  isLoading,
  isUpdating,
  onGoBack,
  onSaveNote,
}: NoteDetailsProps) => {
  const renderContent = () => {
    if (isLoading || !note) {
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
            onSubmit={onSaveNote}
            {...{ note, isLoading, isUpdating }}
          />
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.topbar}>
        <NoteDetailsTopbar
          onGoBack={onGoBack}
          onArchive={() => {}}
          onDelete={() => {}}
          disabled={isLoading}
        />
      </div>
      {renderContent()}
    </div>
  );
};
