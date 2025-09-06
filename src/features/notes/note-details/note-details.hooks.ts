import { toast } from "sonner";
import { useGetNoteQuery, useUpdateNoteMutation } from "@/api";
import { UpdateNotePayload } from "@/types";
import { useParams } from "react-router-dom";

export const useNoteDetails = () => {
  const { id: activeNoteId } = useParams();

  const { data: note, isLoading: isLoadingNote } =
    useGetNoteQuery(activeNoteId);

  const { mutateAsync: updateNoteMutation, isPending: isUpdatingNote } =
    useUpdateNoteMutation();

  const updateNote = async (payload: UpdateNotePayload) => {
    try {
      await updateNoteMutation({
        id: activeNoteId,
        ...payload,
      });
      toast.success("Note saved successfuly");
    } catch {
      toast.error("Something went wrong when saving note");
    }
  };

  return {
    note,
    updateNote,
    isLoadingNote,
    isUpdatingNote,
  };
};
