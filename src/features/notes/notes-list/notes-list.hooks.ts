import { useCreateNoteMutation, useGetAllNotesInfiniteQuery } from "@/api";
import { ROUTES } from "@/consts";
import { Note } from "@/types";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

interface UseNotesListParams {
  isArchived?: Note["isArchived"];
  query?: string;
}

export const useNotesList = ({ isArchived, query }: UseNotesListParams) => {
  const navigate = useNavigate();
  const { id: activeNoteId } = useParams();

  const {
    data: notes,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGetAllNotesInfiniteQuery(isArchived, query);

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
  };
};
