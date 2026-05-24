import { useCallback } from "react";
import {
  DEFAULT_NOTES_SORT_ORDER,
  NOTES_SORT_SEARCH_PARAM,
  isNotesSortOrder,
  useCreateNoteMutation,
  useGetAllNotesInfiniteQuery,
} from "@/api";
import { ROUTES } from "@/consts";
import { Note, NotesSortOrder } from "@/types";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { toast } from "sonner";

interface UseNotesListParams {
  isArchived?: Note["isArchived"];
}

export const useNotesList = ({ isArchived }: UseNotesListParams) => {
  const navigate = useNavigate();
  const { id: activeNoteId } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  const sortParam = searchParams.get(NOTES_SORT_SEARCH_PARAM);
  const sortOrder: NotesSortOrder = isNotesSortOrder(sortParam)
    ? sortParam
    : DEFAULT_NOTES_SORT_ORDER;

  const setSortOrder = useCallback(
    (nextSortOrder: NotesSortOrder) => {
      setSearchParams(
        (prev) => {
          const next = new URLSearchParams(prev);
          if (nextSortOrder === DEFAULT_NOTES_SORT_ORDER) {
            next.delete(NOTES_SORT_SEARCH_PARAM);
          } else {
            next.set(NOTES_SORT_SEARCH_PARAM, nextSortOrder);
          }
          return next;
        },
        { replace: true },
      );
    },
    [setSearchParams],
  );

  const {
    data: notes,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGetAllNotesInfiniteQuery(isArchived, sortOrder);

  const { mutateAsync: createNoteMutation, isPending: isCreatingNewNote } =
    useCreateNoteMutation();

  const createNote = async () => {
    try {
      const response = await createNoteMutation({});
      if (response?.id) {
        navigate(ROUTES.notes.allNotes.details(response.id));
      }
    } catch {
      toast.error("Something went wrong when creating note");
    }
  };

  return {
    createNote,
    isCreatingNewNote,
    notes,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    activeNoteId,
    sortOrder,
    setSortOrder,
  };
};
