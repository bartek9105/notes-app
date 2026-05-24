import { useQuery } from "@tanstack/react-query";
import { getMyProfile } from "./profile.api";
import { PROFILE_QUERY_KEYS } from "./profile.const";
import { useSession } from "@/providers";

export const useGetMyProfileQuery = () => {
  const { session } = useSession();

  return useQuery({
    queryKey: [PROFILE_QUERY_KEYS.getMyProfile],
    queryFn: getMyProfile,
    enabled: !!session,
  });
};
