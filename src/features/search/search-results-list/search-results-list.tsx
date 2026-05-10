import { Spinner, Typography } from "@/components";
import styles from "./search-results-list.module.scss";
import { Note } from "@/types";
import { formatDate } from "@/utils";
import { NoteTagsList } from "../../notes/notes-list";
import cn from "classnames";
import { useTranslation } from "react-i18next";

export type SearchResultsListProps = {
  listId: string;
  searchResults: Note[];
  showNoResultsMessage: boolean;
  activeNoteId?: Note["id"];
  onActiveNoteChange: (id: Note["id"]) => void;
  onNoteSelect: (id: Note["id"]) => void;
  isLoading: boolean;
};

export const SearchResultsList = ({
  listId,
  searchResults,
  showNoResultsMessage,
  activeNoteId,
  onActiveNoteChange,
  onNoteSelect,
  isLoading,
}: SearchResultsListProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return <Spinner asBlock />;
  }

  if (showNoResultsMessage) {
    return (
      <div className={styles.emptyState}>
        <Typography variant="text-3">{t("search.no-results")}</Typography>
      </div>
    );
  }

  if (searchResults.length === 0) {
    return null;
  }

  return (
    <ul id={listId} role="listbox" className={styles.container}>
      {searchResults?.map((result) => (
        <li
          id={`${listId}-${result.id}`}
          key={result.id}
          role="option"
          aria-selected={activeNoteId === result.id}
          className={cn(styles.item, {
            [styles.active]: activeNoteId === result.id,
          })}
          onMouseEnter={() => onActiveNoteChange(result.id)}
          onClick={() => onNoteSelect(result.id)}
        >
          <Typography variant="text-3">{result.title}</Typography>
          <NoteTagsList tags={result.tags} />
          <Typography variant="text-6">
            {formatDate(result.created_at)}
          </Typography>
        </li>
      ))}
    </ul>
  );
};
