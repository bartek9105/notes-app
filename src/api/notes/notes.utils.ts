import { Note, PaginatedResponse } from "@/types";
import { mapInfiniteQueryResponse } from "@/utils";
import { InfiniteData } from "@tanstack/react-query";

export const mapGetAllNotesResponse = (
  data?: InfiniteData<PaginatedResponse<Note[]>>
) => {
  if (!data) return [];

  return mapInfiniteQueryResponse(data);
};
