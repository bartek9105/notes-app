import { useSession } from "@/providers";
import { ROUTES } from "@/consts";
import { Navigate, Outlet } from "react-router-dom";

export const AuthPagesGuard = () => {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return "Loading...";
  }

  if (session) {
    return <Navigate to={ROUTES.notes.root()} replace />;
  }
  return <Outlet />;
};
