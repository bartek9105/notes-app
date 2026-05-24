import { Topbar, Sidebar } from "@/components";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import styles from "./main-layout.module.scss";
import { Welcome } from "@/features";

export const MainLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen((open) => !open);
  };

  return (
    <div className={styles.layout}>
      <Sidebar isOpen={isSidebarOpen} onToggle={handleToggleSidebar} />
      <div className={styles.content}>
        <Topbar
          onOpenMenu={handleToggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
        <div className={styles.outlet}>
          <Outlet />
        </div>
      </div>
      <Welcome />
    </div>
  );
};
