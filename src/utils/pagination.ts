import { PaginatedResponse } from "@/types";
import { InfiniteData } from "@tanstack/react-query";
import { DEFAULT_PAGE_SIZE } from "@/consts";

export const mapInfiniteQueryResponse = <T>(
  data: InfiniteData<PaginatedResponse<T>>
) => data.pages.map((page) => page.data).flat();

export const getPaginationRange = ({
  pageParam,
  pageSize = DEFAULT_PAGE_SIZE,
}: {
  pageParam: number;
  pageSize?: number;
}) => {
  const from = pageParam * pageSize;
  const to = from + pageSize - 1;

  return { from, to };
};

export const mapPaginationResponse = <T>({
  data,
  pageParam,
  count,
  pageSize = DEFAULT_PAGE_SIZE,
}: {
  data: T[];
  pageParam: number;
  count: number;
  pageSize?: number;
}): PaginatedResponse<T[]> => {
  const { to } = getPaginationRange({ pageParam, pageSize });

  return {
    data,
    nextPage: pageParam + 1,
    hasNextPage: to + 1 < count,
  };
};
