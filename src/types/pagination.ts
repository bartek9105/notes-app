export interface PaginatedResponse<T> {
  data: T;
  nextPage: number;
  hasNextPage: boolean;
}
