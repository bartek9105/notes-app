import { ROUTES } from "@/consts";
import { useScreenSize } from "@/hooks";
import { Navigate } from "react-router-dom";

/** On desktop, default child is color theme; on mobile, `/settings` stays the menu index. */
export const SettingsIndexRedirect = () => {
  const { isDesktop } = useScreenSize();

  if (isDesktop) {
    return <Navigate to={ROUTES.settings.colorTheme()} replace />;
  }

  return null;
};
