import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from "./topbar.module.scss";
import { ROUTES } from "@/consts";
import { Button, Typography } from "@/components";
import { HamburgerIcon, SettingsIcon, LogoutIcon } from "@/assets";
import { useTranslation } from "react-i18next";
import { AppLogo } from "@/components";
import { Search } from "@/features";
import { useSignOutMutation } from "@/api";

const getTopbarTitle = (pathname: string) => {
  if (pathname.includes(ROUTES.notes.archived.root())) {
    return "topbar.archived-notes-title";
  }
  if (pathname.includes(ROUTES.notes.allNotes.root())) {
    return "topbar.title";
  }
  if (pathname.includes(ROUTES.settings.root())) {
    return "topbar.settings-title";
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
  const navigate = useNavigate();

  const { mutateAsync: signOutMutation } = useSignOutMutation();

  const handleSignOut = async () => {
    await signOutMutation();
    navigate(ROUTES.signIn());
  };

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
              <AppLogo />
            </NavLink>
          </>
        )}
        <Typography variant="text-1" className={styles.title}>
          {t(getTopbarTitle(pathname))}
        </Typography>
      </div>
      <div className={styles.rightSide}>
        <Search className={styles.search} />
        <NavLink to={ROUTES.settings.root()}>
          <Button iconOnly icon={<SettingsIcon />} isFlat variant="secondary" />
        </NavLink>
        <Button
          iconOnly
          icon={<LogoutIcon />}
          onClick={handleSignOut}
          isFlat
          variant="secondary"
        />
      </div>
    </div>
  );
};
