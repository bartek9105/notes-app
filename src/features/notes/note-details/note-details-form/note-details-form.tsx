import {
  BaseForm,
  Button,
  Separator,
  TextareaField,
  useBaseForm,
} from "@/components";
import { CreateNotePayload, Note } from "@/types";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NoteDetailsMeta } from "../note-details-meta";
import styles from "./note-details-form.module.scss";
import { NOTE_DETAILS_FORM_DEFAULT_VALUES } from "./note-details-form.const";
import { sanitizeFormReset } from "@/components";

interface NoteDetailsFormProps {
  note: Note;
  isLoading: boolean;
  isUpdating: boolean;
  onSubmit: (data: CreateNotePayload) => void;
}

export const NoteDetailsForm = ({
  note,
  onSubmit,
  isLoading,
  isUpdating,
}: NoteDetailsFormProps) => {
  const { t } = useTranslation();

  const formParams = useBaseForm({
    defaultValues: note ?? NOTE_DETAILS_FORM_DEFAULT_VALUES,
  });

  const resetForm = () => {
    formParams.reset(
      sanitizeFormReset({
        defaultValues: NOTE_DETAILS_FORM_DEFAULT_VALUES,
        resetValues: note,
      })
    );
  };

  const onCancel = () => {
    resetForm();
  };

  useEffect(() => {
    if (note) {
      resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [note]);

  return (
    <div className={styles.container}>
      <BaseForm
        params={formParams}
        onSubmit={onSubmit}
        className={styles.form}
        id="note-details-form"
      >
        <NoteDetailsMeta note={note} />
        <TextareaField
          name="description"
          placeholder={t("notes.note-description-empty-state")}
        />
      </BaseForm>
      <div className={styles.footer}>
        <Separator />
        <div className={styles.buttons}>
          <Button
            disabled={isLoading || isUpdating}
            isLoading={isUpdating}
            type="submit"
            form="note-details-form"
          >
            {t("notes.save-note")}
          </Button>
          <Button
            disabled={isLoading || isUpdating}
            variant="secondary"
            onClick={onCancel}
          >
            {t("notes.cancel")}
          </Button>
        </div>
      </div>
    </div>
  );
};
