import { supabase } from "@/config";
import {
  PaginatedResponse,
  Note,
  CreateNotePayload,
  UpdateNotePayload,
  CreateNoteResponse,
  UpdateNoteResponse,
} from "@/types";

export const getAllNotes = async ({
  pageParam = 0,
}): Promise<PaginatedResponse<Note[]>> => {
  const from = pageParam * 20;
  const to = from + 20 - 1;

  const { data, count } = await supabase
    .from("notes")
    .select("*", { count: "exact" })
    .range(from, to)
    .order("created_at", { ascending: false });

  return {
    data: data ?? [],
    nextPage: pageParam + 1,
    hasNextPage: to + 1 < (count as number),
  };
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
  payload: CreateNotePayload
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
