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
  updateNote,
} from "./notes.api";
import { NOTES_QUERY_KEYS } from "./notes.const";
import { Note } from "@/types";
import { mapGetAllNotesResponse } from "./notes.utils";

export const useGetAllNotesInfiniteQuery = () => {
  const { data, ...rest } = useInfiniteQuery({
    initialPageParam: 0,
    queryKey: [NOTES_QUERY_KEYS.getAllNotes],
    queryFn: getAllNotes,
    getNextPageParam: (lastPage) => {
      return lastPage.hasNextPage ? lastPage.nextPage : undefined;
    },
  });

  return {
    data: mapGetAllNotesResponse(data),
    ...rest,
  };
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
