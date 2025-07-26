import { Note } from "@/types";

export interface NotesListProps {
  title: string;
  notes: Note[];
  buttonText: string;
  onNoteSelect?: (id: Note["id"]) => void;
  isLoading: boolean;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
  onFetchNextPage: () => void;
  activeNoteId?: string;
  onCreateNote: () => void;
  isCreatingNewNote: boolean;
}
