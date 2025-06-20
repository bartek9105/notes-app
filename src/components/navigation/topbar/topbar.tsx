import { NavLink } from "react-router-dom";
import styles from "./topbar.module.scss";
import { ROUTES } from "@/consts";
import { Input, Typography } from "@/components";
import { Logo, HamburgerIcon, SettingsIcon } from "@/assets";

interface TopbarProps {
  isSidebarOpen: boolean;
  onOpenMenu: () => void;
}

export const Topbar = ({ onOpenMenu, isSidebarOpen }: TopbarProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        {!isSidebarOpen && (
          <>
            <HamburgerIcon onClick={onOpenMenu} />
            <NavLink to={ROUTES.notes.root()}>
              <Logo />
            </NavLink>
          </>
        )}
        <Typography variant="text-1" className={styles.title}>
          All notes
        </Typography>
      </div>
      <div className={styles.rightSide}>
        <Input
          className={styles.search}
          name="search"
          placeholder="Search by title, content, or tags"
        />
        <NavLink to={ROUTES.settings()}>
          <SettingsIcon />
        </NavLink>
      </div>
    </div>
  );
};
