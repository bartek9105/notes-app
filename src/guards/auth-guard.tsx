import { useSession } from "@/providers";
import { ROUTES } from "@/consts";
import { Navigate, Outlet } from "react-router-dom";

export const AuthGuard = () => {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return "Loading...";
  }

  if (!session) {
    return <Navigate to={ROUTES.signUp()} replace />;
  }
  return <Outlet />;
};
