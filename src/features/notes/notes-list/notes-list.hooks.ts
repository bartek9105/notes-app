import { useCreateNoteMutation, useGetAllNotesInfiniteQuery } from "@/api";
import { ROUTES } from "@/consts";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

export const useNotesList = () => {
  const navigate = useNavigate();
  const { id: activeNoteId } = useParams();

  const {
    data: notes,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGetAllNotesInfiniteQuery();

  const { mutateAsync: createNoteMutation, isPending: isCreatingNewNote } =
    useCreateNoteMutation();

  const createNote = async () => {
    try {
      const response = await createNoteMutation({});
      if (response?.id) {
        navigate(ROUTES.notes.details(response.id));
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
