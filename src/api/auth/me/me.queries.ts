import { useQuery } from "@tanstack/react-query";
import { getMe } from "./me.api";
import { ME_QUERY_KEYS } from "./me.const";

export const useGetMeQuery = () => {
  return useQuery({
    queryKey: [ME_QUERY_KEYS.getMe],
    queryFn: getMe,
  });
};
