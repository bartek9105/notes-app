import { MobileNavigation, Topbar } from "@/components";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <Topbar />
      <Outlet />
      <MobileNavigation />
    </>
  );
};
