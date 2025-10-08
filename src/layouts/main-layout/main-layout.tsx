import { Topbar, Sidebar } from "@/components";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import styles from "./main-layout.module.scss";
import cn from "classnames";

export const MainLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleCloseSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div
      className={cn({
        [styles.sidebarOpenLayout]: isSidebarOpen,
      })}
    >
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
      <div className={styles.content}>
        <Topbar
          onOpenMenu={() => setSidebarOpen(!isSidebarOpen)}
          isSidebarOpen={isSidebarOpen}
        />
        <div className={styles.outlet}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
