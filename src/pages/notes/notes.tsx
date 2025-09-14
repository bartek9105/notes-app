import {
  ArchiveNote,
  DeleteNote,
  NoteDetails,
  NotesLayout,
  NotesList,
} from "@/features";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "@/consts";
import { useTranslation } from "react-i18next";

export const Notes = () => {
  const { t } = useTranslation();
  const { id: activeNoteId } = useParams();

  const navigate = useNavigate();

  return (
    <NotesLayout
      NotesList={
        <NotesList
          title={t("notes.title")}
          buttonText={t("notes.create-new-button")}
          onNoteSelect={(id) => navigate(ROUTES.notes.details(id))}
        />
      }
      NoteDetails={
        <NoteDetails onGoBack={() => navigate(ROUTES.notes.root())} />
      }
      isNoteSelected={!!activeNoteId}
      NoteActions={
        <>
          <DeleteNote />
          <ArchiveNote />
        </>
      }
    />
  );
};
