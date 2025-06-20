import { NoteDetails, NotesLayout, NotesList } from "@/features";
import { useGetAllNotesInfiniteQuery, useGetNoteQuery } from "@/api";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "@/consts";
import { useTranslation } from "react-i18next";

export const Notes = () => {
  const { t } = useTranslation();

  const { id } = useParams();
  const navigate = useNavigate();

  const isNoteSelected = !!id;

  const {
    data: notes,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGetAllNotesInfiniteQuery();

  const { data: note, isLoading: isLoadingNote } = useGetNoteQuery(
    id || notes[0]?.id
  );

  return (
    <NotesLayout
      NotesList={
        <NotesList
          title={t("notes.title")}
          buttonText={t("notes.create-new-button")}
          onFetchNextPage={fetchNextPage}
          onNoteSelect={(id) => navigate(ROUTES.notes.details(id))}
          activeNoteId={id}
          {...{ notes, isLoading, isFetchingNextPage, hasNextPage }}
        />
      }
      NoteDetails={
        <NoteDetails
          note={note}
          isLoading={isLoadingNote}
          onGoBack={() => navigate(ROUTES.notes.root())}
        />
      }
      isNoteSelected={isNoteSelected}
    />
  );
};
