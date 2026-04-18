import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useSearchQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") || "";

  const [inputValue, setInputValue] = useState(searchQuery);

  const setSearchQuery = (query: string) => {
    setSearchParams(
      (prevParams) => {
        const newParams = new URLSearchParams(prevParams);

        if (!query) {
          newParams.delete("q");
        } else {
          newParams.set("q", query);
        }

        return newParams;
      },
      { replace: true }
    );
  };

  const submitSearchQuery = () => {
    setSearchQuery(inputValue);
  };

  const clearSearchQuery = () => {
    setInputValue("");
    setSearchQuery("");
  };

  return {
    searchQuery,
    submitSearchQuery,
    clearSearchQuery,
    inputValue,
    setInputValue,
  };
};
