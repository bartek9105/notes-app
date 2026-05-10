import { CloseIcon, SearchIcon } from "@/assets";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import { Button, Input, Modal } from "@/components";
import { useSearchNotesQuery } from "@/api";
import styles from "./search.module.scss";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/consts";
import { SearchResultsList } from "./search-results-list/search-results-list";
import { useSelectNoteKeydown } from "./search.hooks";

export const Search = () => {
  const { t } = useTranslation();

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery] = useDebounce(searchQuery, 300);

  const {
    data: searchResults,
    isSuccess,
    isLoading,
  } = useSearchNotesQuery(debouncedSearchQuery);
  const notes = searchResults ?? [];

  const showNoResultsMessage =
    isSuccess && debouncedSearchQuery.trim().length > 0 && notes.length === 0;

  const navigate = useNavigate();

  const handleNoteSelect = (id: string) => {
    navigate(ROUTES.notes.allNotes.details(id));
    setSearchQuery("");
    handleCloseSearch();
  };

  const {
    activeNote,
    searchResultsListId,
    handleActiveNoteChange,
    handleSearchInputKeyDown,
  } = useSelectNoteKeydown({ notes, onNoteSelect: handleNoteSelect });

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <>
      <SearchIcon
        onClick={() => setIsSearchOpen(true)}
        className={styles.icon}
      />
      <Modal
        isOpen={isSearchOpen}
        onClose={handleCloseSearch}
        className={styles.modal}
      >
        <div className={styles.searchInputContainer}>
          <SearchIcon />
          <Input
            autoFocus
            autoComplete="off"
            className={styles.searchInput}
            name="search"
            placeholder={t("search.placeholder")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearchInputKeyDown}
            aria-controls={searchResultsListId}
            aria-activedescendant={
              activeNote ? `${searchResultsListId}-${activeNote.id}` : undefined
            }
          />
          <Button
            iconOnly
            icon={<CloseIcon />}
            onClick={handleCloseSearch}
            isFlat
            variant="border"
          />
        </div>

        <SearchResultsList
          listId={searchResultsListId}
          searchResults={notes}
          showNoResultsMessage={showNoResultsMessage}
          activeNoteId={activeNote?.id}
          onActiveNoteChange={handleActiveNoteChange}
          onNoteSelect={handleNoteSelect}
          isLoading={isLoading}
        />
      </Modal>
    </>
  );
};
