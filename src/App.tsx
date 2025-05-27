import { NotesLayout, NotesList } from "@/features";
import { useGetAllNotesInfiniteQuery } from "@/api";
import { InfiniteScrollContainer } from "@/components";

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
        <InfiniteScrollContainer
          isFetching={isLoading}
          isFetchingNextPage={isFetchingNextPage}
          hasNextPage={hasNextPage}
          onScrollEndCallback={fetchNextPage}
        >
          <NotesList title="All notes" notes={notes} />
        </InfiniteScrollContainer>
      )}
    />
  );
};

export default App;
