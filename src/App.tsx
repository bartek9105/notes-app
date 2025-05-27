import { NotesLayout, NotesList } from "@/features";
import { useGetAllNotesInfiniteQuery } from "@/api";

const App = () => {
  const {
    data: notes,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGetAllNotesInfiniteQuery();

  return (
    <NotesLayout
      renderNotesList={() => (
        <NotesList
          title="All notes"
          buttonText="Create New Note"
          onFetchNextPage={fetchNextPage}
          {...{ notes, isLoading, isFetchingNextPage, hasNextPage }}
        />
      )}
    />
  );
};

export default App;
