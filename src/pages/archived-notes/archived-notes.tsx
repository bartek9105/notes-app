import {
  DeleteNote,
  NoteDetails,
  NotesLayout,
  NotesList,
  RestoreNote,
} from "@/features";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "@/consts";
import { useTranslation } from "react-i18next";

export const ArchivedNotes = () => {
  const { t } = useTranslation();
  const { id: activeNoteId } = useParams();

  const navigate = useNavigate();

  const rootNavigate = () => navigate(ROUTES.notes.archived.root());

  return (
    <NotesLayout
      NotesList={
        <NotesList
          title={t("notes.archived-notes-title")}
          buttonText={t("notes.create-new-button")}
          onNoteSelect={(id) => navigate(ROUTES.notes.archived.details(id))}
          isArchived
        />
      }
      NoteDetails={
        <NoteDetails
          onGoBack={rootNavigate}
          isArchived
          onDeleteNote={rootNavigate}
        />
      }
      isNoteSelected={!!activeNoteId}
      NoteActions={
        <>
          <RestoreNote />
          <DeleteNote onDeleteNote={rootNavigate} />
        </>
      }
    />
  );
};
