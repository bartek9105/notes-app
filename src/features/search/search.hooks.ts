import { Note } from "@/types";
import { useEffect, useId, useState, type KeyboardEvent } from "react";

type UseSelectNoteParams = {
  notes: Note[];
  onNoteSelect: (id: Note["id"]) => void;
};

export const useSelectNoteKeydown = ({
  notes,
  onNoteSelect,
}: UseSelectNoteParams) => {
  const searchResultsListId = useId();
  const [activeNoteIndex, setActiveNoteIndex] = useState(-1);

  const activeNote = notes[activeNoteIndex];

  const handleActiveNoteChange = (id: string) => {
    setActiveNoteIndex(notes.findIndex((note) => note.id === id));
  };

  const handleSearchInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (notes.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveNoteIndex((currentIndex) =>
        currentIndex === -1 ? 0 : (currentIndex + 1) % notes.length,
      );
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveNoteIndex((currentIndex) =>
        currentIndex === -1
          ? notes.length - 1
          : (currentIndex - 1 + notes.length) % notes.length,
      );
    }

    if (e.key === "Enter" && activeNoteIndex !== -1) {
      e.preventDefault();
      onNoteSelect(activeNote.id);
    }
  };

  useEffect(() => {
    setActiveNoteIndex(-1);
  }, [notes]);

  return {
    activeNote,
    searchResultsListId,
    handleActiveNoteChange,
    handleSearchInputKeyDown,
  };
};
