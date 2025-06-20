import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getAllNotes, getNote } from "./notes.api";
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

export const useGetNoteQuery = (id: Note["id"]) => {
  return useQuery({
    queryKey: [NOTES_QUERY_KEYS.getNote, id],
    queryFn: () => getNote(id),
    enabled: !!id,
  });
};
