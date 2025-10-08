import { NavLink, useLocation } from "react-router-dom";
import styles from "./topbar.module.scss";
import { ROUTES } from "@/consts";
import { Input, Typography } from "@/components";
import { Logo, HamburgerIcon, SettingsIcon } from "@/assets";
import { useTranslation } from "react-i18next";

const getTopbarTitle = (pathname: string) => {
  if (pathname.includes(ROUTES.notes.archived.root())) {
    return "topbar.archived-notes-title";
  }
  if (pathname.includes(ROUTES.notes.allNotes.root())) {
    return "topbar.title";
  }
  return "topbar.title";
};

interface TopbarProps {
  isSidebarOpen: boolean;
  onOpenMenu: () => void;
}

export const Topbar = ({ onOpenMenu, isSidebarOpen }: TopbarProps) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        {!isSidebarOpen && (
          <>
            <HamburgerIcon
              onClick={onOpenMenu}
              className={styles.hamburgerIcon}
            />
            <NavLink to={ROUTES.notes.allNotes.root()}>
              <Logo />
            </NavLink>
          </>
        )}
        <Typography variant="text-1" className={styles.title}>
          {t(getTopbarTitle(pathname))}
        </Typography>
      </div>
      <div className={styles.rightSide}>
        <Input
          className={styles.search}
          name="search"
          placeholder={t("topbar.search.placeholder")}
        />
        <NavLink to={ROUTES.settings()}>
          <SettingsIcon />
        </NavLink>
      </div>
    </div>
  );
};
