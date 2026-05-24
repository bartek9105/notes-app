import { supabase } from "@/config";
import {
  PaginatedResponse,
  Note,
  CreateNotePayload,
  UpdateNotePayload,
  CreateNoteResponse,
  UpdateNoteResponse,
  NotesSortOrder,
} from "@/types";
import { DEFAULT_NOTES_SORT_ORDER } from "./notes.const";

interface GetAllNotesParams {
  pageParam?: number;
  isArchived?: boolean;
  sortOrder?: NotesSortOrder;
}

export const getAllNotes = async ({
  pageParam = 0,
  isArchived = false,
  sortOrder = DEFAULT_NOTES_SORT_ORDER,
}: GetAllNotesParams): Promise<PaginatedResponse<Note[]>> => {
  const from = pageParam * 20;
  const to = from + 20 - 1;

  const { data, count } = await supabase
    .from("notes")
    .select("*", { count: "exact" })
    .eq("isArchived", isArchived)
    .range(from, to)
    .order("isPinned", { ascending: false, nullsFirst: false })
    .order("created_at", { ascending: sortOrder === "oldest" });

  return {
    data: data ?? [],
    nextPage: pageParam + 1,
    hasNextPage: to + 1 < (count as number),
  };
};

export const searchNotes = async (query: string) => {
  const { data } = await supabase
    .from("notes")
    .select("*")
    .or(`title.ilike.%${query}%,description.ilike.%${query}%`);

  return data;
};

export const getNote = async (id?: Note["id"]) => {
  if (!id) return null;

  const { data } = await supabase
    .from("notes")
    .select("*")
    .eq("id", id)
    .single();

  return data;
};

export const createNote = async (
  payload: CreateNotePayload,
): Promise<CreateNoteResponse | null> => {
  const { data } = await supabase
    .from("notes")
    .insert(payload)
    .select()
    .single();

  return data;
};

export const updateNote = async ({
  id,
  ...payload
}: UpdateNotePayload): Promise<UpdateNoteResponse | null> => {
  const { data } = await supabase
    .from("notes")
    .update({ ...payload })
    .eq("id", id!)
    .select()
    .single();

  return data;
};

export const deleteNote = async (id: Note["id"]) => {
  await supabase.from("notes").delete().eq("id", id);
};
