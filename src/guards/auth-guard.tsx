import { useSession } from "@/providers";
import { Navigate, Outlet } from "react-router-dom";

export const AuthGuard = () => {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return "Loading...";
  }

  if (!session) {
    return <Navigate to="/sign-up" replace />;
  }
  return <Outlet />;
};
