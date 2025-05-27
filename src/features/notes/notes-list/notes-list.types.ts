import { Note } from "@/types";

export interface NotesListProps {
  title: string;
  notes: Note[];
  buttonText: string;
  onNoteSelect?: (note: Note) => void;
  isLoading: boolean;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
  onFetchNextPage: () => void;
}
