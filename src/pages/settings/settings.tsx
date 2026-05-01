import { SidebarMenu, Typography } from "@/components";
import { SunIcon, LockIcon } from "@/assets";
import { ROUTES } from "@/consts";
import { Outlet, useMatch } from "react-router-dom";
import cn from "classnames";
import styles from "./settings.module.scss";
import { useTranslation } from "react-i18next";

const SETTINGS_ITEMS = [
  {
    id: "color-theme",
    route: ROUTES.settings.colorTheme(),
    icon: SunIcon,
    label: "Color Theme",
  },
  {
    id: "change-password",
    route: ROUTES.settings.changePassword(),
    icon: LockIcon,
    label: "Change Password",
  },
];

export const Settings = () => {
  const { t } = useTranslation();

  const isIndex = Boolean(
    useMatch({ path: ROUTES.settings.root(), end: true }),
  );

  return (
    <div className={styles.container}>
      <aside
        className={cn(styles.sidebar, {
          [styles.hiddenOnMobile]: !isIndex,
        })}
      >
        <Typography variant="text-1" className={styles.sidebarHeader}>
          {t("settings.title")}
        </Typography>
        <SidebarMenu items={SETTINGS_ITEMS} />
      </aside>
      <section
        className={cn(styles.content, {
          [styles.hiddenOnMobile]: isIndex,
        })}
      >
        <Outlet />
      </section>
    </div>
  );
};
