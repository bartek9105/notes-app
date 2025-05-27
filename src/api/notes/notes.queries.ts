import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllNotes } from "./notes.api";
import { NOTES_QUERY_KEYS } from "./notes.const";
import { mapInfiniteQueryResponse } from "@/utils";

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
    data: data ? mapInfiniteQueryResponse(data) : [],
    ...rest,
  };
};
