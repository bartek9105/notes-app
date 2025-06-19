import { Note } from "@/types";
import {
  BaseForm,
  Button,
  Separator,
  TextareaField,
  useBaseForm,
} from "@/components";
import styles from "./note-details.module.scss";

import { useEffect } from "react";
import { NoteDetailsTopbar } from "./note-details-topbar";
import { NoteDetailsMeta } from "./note-details-meta";
import { NoteDetailsSkeleton } from "./note-details-skeleton";

export interface NoteDetailsProps {
  note?: Note | null;
  isLoading: boolean;
  onGoBack: () => void;
}

export const NoteDetails = ({
  note,
  isLoading,
  onGoBack,
}: NoteDetailsProps) => {
  const formParams = useBaseForm({
    defaultValues: {
      note: note?.description || "",
    },
  });

  useEffect(() => {
    if (note?.description) {
      formParams.reset({ note: note.description });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [note?.description]);

  if (isLoading || !note) return <NoteDetailsSkeleton />;

  return (
    <div className={styles.container}>
      <div className={styles.topbar}>
        <NoteDetailsTopbar
          onGoBack={onGoBack}
          onArchive={() => {}}
          onDelete={() => {}}
        />
      </div>
      <NoteDetailsMeta note={note} />
      <BaseForm params={formParams} onSubmit={() => {}}>
        <TextareaField name="note" />
      </BaseForm>
      <div className={styles.footer}>
        <Separator />
        <div className={styles.buttons}>
          <Button>Save Note</Button>
          <Button variant="secondary">Cancel</Button>
        </div>
      </div>
    </div>
  );
};
