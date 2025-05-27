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
      NotesListComponent={
        <NotesList
          title="All notes"
          buttonText="Create New Note"
          onFetchNextPage={fetchNextPage}
          {...{ notes, isLoading, isFetchingNextPage, hasNextPage }}
        />
      }
    />
  );
};

export default App;
