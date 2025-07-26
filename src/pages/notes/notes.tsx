import { NoteDetails, NotesLayout, NotesList } from "@/features";
import {
  useCreateNoteMutation,
  useGetAllNotesInfiniteQuery,
  useGetNoteQuery,
  useUpdateNoteMutation,
} from "@/api";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "@/consts";
import { useTranslation } from "react-i18next";
import { UpdateNotePayload } from "types/notes";

export const Notes = () => {
  const { t } = useTranslation();

  const { id: activeNoteId } = useParams();
  const navigate = useNavigate();

  const {
    data: notes,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGetAllNotesInfiniteQuery();

  const { data: note, isLoading: isLoadingNote } =
    useGetNoteQuery(activeNoteId);

  const { mutateAsync: createNoteMutation, isPending: isCreatingNewNote } =
    useCreateNoteMutation();
  const { mutateAsync: updateNoteMutation, isPending: isUpdatingNote } =
    useUpdateNoteMutation();

  const createNote = async () => {
    try {
      const response = await createNoteMutation({});
      if (response?.id) {
        navigate(ROUTES.notes.details(response.id));
      }
    } catch (e) {
      console.log("error", e);
    }
  };

  const updateNote = async (payload: UpdateNotePayload) => {
    try {
      await updateNoteMutation({
        id: activeNoteId,
        ...payload,
      });
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <NotesLayout
      NotesList={
        <NotesList
          title={t("notes.title")}
          buttonText={t("notes.create-new-button")}
          onFetchNextPage={fetchNextPage}
          onNoteSelect={(id) => navigate(ROUTES.notes.details(id))}
          activeNoteId={activeNoteId || notes[0]?.id}
          onCreateNote={createNote}
          isCreatingNewNote={isCreatingNewNote}
          {...{ notes, isLoading, isFetchingNextPage, hasNextPage }}
        />
      }
      NoteDetails={
        <NoteDetails
          note={note || notes[0]}
          isLoading={isLoadingNote}
          isUpdating={isUpdatingNote}
          onGoBack={() => navigate(ROUTES.notes.root())}
          onSaveNote={updateNote}
        />
      }
      isNoteSelected={!!activeNoteId}
    />
  );
};
