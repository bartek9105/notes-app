import { useSession } from "@/providers";
import { ROUTES } from "@/consts";
import { Navigate, Outlet } from "react-router-dom";
import { OverlayLoader } from "@/components";

export const AuthPagesGuard = () => {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <OverlayLoader />;
  }

  if (session && !isLoading) {
    return <Navigate to={ROUTES.notes.root()} replace />;
  }
  return <Outlet />;
};
