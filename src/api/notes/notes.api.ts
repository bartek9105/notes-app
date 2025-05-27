import { PaginatedResponse, Note } from "@/types";
import { supabase } from "../../supabase";

export const getAllNotes = async ({
  pageParam = 0,
}): Promise<PaginatedResponse<Note[]>> => {
  const from = pageParam * 20;
  const to = from + 20 - 1;

  const { data, count } = await supabase
    .from("notes")
    .select("*", { count: "exact" })
    .range(from, to);

  return {
    data: data ?? [],
    nextPage: pageParam + 1,
    hasNextPage: to + 1 < (count as number),
  };
};
