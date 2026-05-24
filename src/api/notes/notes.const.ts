import { NotesSortOrder } from "@/types";

export const NOTES_QUERY_KEYS = {
  getAllNotes: "notes",
  getNote: "note",
  searchNotes: "searchNotes",
};

export const DEFAULT_NOTES_SORT_ORDER: NotesSortOrder = "newest";

export const NOTES_SORT_ORDER_VALUES: NotesSortOrder[] = ["newest", "oldest"];

export const NOTES_SORT_SEARCH_PARAM = "sort";

export const isNotesSortOrder = (value: unknown): value is NotesSortOrder =>
  typeof value === "string" &&
  (NOTES_SORT_ORDER_VALUES as string[]).includes(value);
