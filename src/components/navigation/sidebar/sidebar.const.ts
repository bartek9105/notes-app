import { ROUTES } from "@/consts";
import HomeIcon from "../../../assets/home.svg";
import ArchiveIcon from "../../../assets/archive.svg";
import TagIcon from "../../../assets/tag.svg";

export const NAVIGATION_ITEMS = [
  {
    id: "all-notes",
    route: ROUTES.notes.root(),
    icon: HomeIcon,
    label: "Home",
  },
  {
    id: "archived-notes",
    route: ROUTES.notes.archived(),
    icon: ArchiveIcon,
    label: "Archived",
  },
  {
    id: "tags",
    route: ROUTES.notes.tags(),
    icon: TagIcon,
    label: "Tags",
  },
];
