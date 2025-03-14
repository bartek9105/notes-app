import { useSession } from "@/providers";
import { Navigate, Outlet } from "react-router-dom";

export const AuthPagesGuard = () => {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return "Loading...";
  }

  if (session) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};
