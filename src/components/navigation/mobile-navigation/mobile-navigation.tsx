import styles from "./mobile-navigation.module.scss";
import HomeIcon from "../../../assets/home.svg";
import SearchIcon from "../../../assets/search.svg";
import ArchiveIcon from "../../../assets/archive.svg";
import TagIcon from "../../../assets/tag.svg";
import SettingsIcon from "../../../assets/settings.svg";
import { ROUTES } from "@/consts";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import { Typography } from "@/components";

const NAVIGATION_ITEMS = [
  {
    id: "all-notes",
    route: ROUTES.notes.root(),
    icon: <HomeIcon />,
    label: "Home",
  },
  {
    id: "search",
    route: ROUTES.notes.search(),
    icon: <SearchIcon />,
    label: "Search",
  },
  {
    id: "archived-notes",
    route: ROUTES.notes.archived(),
    icon: <ArchiveIcon />,
    label: "Archived",
  },
  {
    id: "tags",
    route: ROUTES.notes.tags(),
    icon: <TagIcon />,
    label: "Tags",
  },
  {
    id: "settings",
    route: ROUTES.settings(),
    icon: <SettingsIcon />,
    label: "Settings",
  },
];

export const MobileNavigation = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        {NAVIGATION_ITEMS.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.route}
              className={({ isActive }) =>
                cn(styles.link, {
                  [styles.linkActive]: isActive,
                })
              }
            >
              {item.icon}
              <Typography variant="text-6" className={styles.label}>
                {item.label}
              </Typography>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
