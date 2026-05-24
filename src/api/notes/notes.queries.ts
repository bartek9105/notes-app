import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNote,
  searchNotes,
  updateNote,
} from "./notes.api";
import { DEFAULT_NOTES_SORT_ORDER, NOTES_QUERY_KEYS } from "./notes.const";
import { Note, NotesSortOrder } from "@/types";
import { mapGetAllNotesResponse } from "./notes.utils";

export const useGetAllNotesInfiniteQuery = (
  isArchived: Note["isArchived"] = false,
  sortOrder: NotesSortOrder = DEFAULT_NOTES_SORT_ORDER,
) => {
  const { data, ...rest } = useInfiniteQuery({
    initialPageParam: 0,
    queryKey: [NOTES_QUERY_KEYS.getAllNotes, isArchived, sortOrder],
    queryFn: ({ pageParam }) =>
      getAllNotes({ pageParam, isArchived, sortOrder }),
    getNextPageParam: (lastPage) => {
      return lastPage.hasNextPage ? lastPage.nextPage : undefined;
    },
  });

  return {
    data: mapGetAllNotesResponse(data),
    ...rest,
  };
};

export const useSearchNotesQuery = (query: string) => {
  return useQuery({
    queryKey: [NOTES_QUERY_KEYS.searchNotes, query],
    queryFn: () => searchNotes(query),
    enabled: !!query,
  });
};

export const useGetNoteQuery = (id?: Note["id"]) => {
  return useQuery({
    queryKey: [NOTES_QUERY_KEYS.getNote, id],
    queryFn: () => getNote(id),
    enabled: !!id,
  });
};

export const useCreateNoteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createNote,
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({
        queryKey: [NOTES_QUERY_KEYS.getAllNotes],
      });
      return data?.id;
    },
  });
};

export const useUpdateNoteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateNote,
    onSuccess: async (data) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: [NOTES_QUERY_KEYS.getAllNotes],
        }),
        queryClient.invalidateQueries({
          queryKey: [NOTES_QUERY_KEYS.getNote, data?.id],
        }),
      ]);
    },
  });
};

export const useDeleteNoteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteNote,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [NOTES_QUERY_KEYS.getAllNotes],
      });
    },
  });
};
