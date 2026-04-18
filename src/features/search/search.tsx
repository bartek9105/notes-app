import { ChevronLeftIcon } from "@/assets";
import { Input } from "@/components";
import { useTranslation } from "react-i18next";
import styles from "./search.module.scss";
import { useSearchQuery } from "@/hooks";

interface SearchProps {
  onGoBack?: () => void;
  className?: string;
}

export const Search = ({ onGoBack, className }: SearchProps) => {
  const { t } = useTranslation();

  const { inputValue, setInputValue, submitSearchQuery, clearSearchQuery } =
    useSearchQuery();

  return (
    <>
      {onGoBack && (
        <ChevronLeftIcon
          className={styles.goBackButton}
          onClick={() => {
            clearSearchQuery();
            onGoBack?.();
          }}
        />
      )}
      <Input
        name="search"
        placeholder={t("topbar.search.placeholder")}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={className}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            submitSearchQuery();
          }
        }}
        autoFocus
      />
    </>
  );
};
