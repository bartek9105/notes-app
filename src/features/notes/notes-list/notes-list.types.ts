import { Note } from "@/types";

export interface NotesListProps {
  title: string;
  buttonText: string;
  onNoteSelect?: (id: Note["id"]) => void;
  isArchived?: Note["isArchived"];
}
