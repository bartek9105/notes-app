import { Note } from "@/types";

export const NOTE_DETAILS_FORM_DEFAULT_VALUES: Omit<
  Note,
  "created_at" | "id" | "isArchived"
> = {
  title: "",
  description: "",
  tags: [],
};
