import styles from "./sidebar.module.scss";
import { NAVIGATION_ITEMS } from "./sidebar.const";
import { AppLogo, Separator } from "@/components";
import { CloseIcon, HamburgerIcon } from "@/assets";
import { SidebarMenu } from "../sidebar-menu/sidebar-menu";
import cn from "classnames";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  return (
    <aside
      className={cn(styles.container, { [styles.collapsed]: !isOpen })}
      aria-expanded={isOpen}
    >
      <div className={cn(styles.topbar, { [styles.topbarCollapsed]: !isOpen })}>
        {isOpen ? (
          <>
            <AppLogo />
            <CloseIcon onClick={onToggle} className={styles.toggleIcon} />
          </>
        ) : (
          <HamburgerIcon onClick={onToggle} className={styles.toggleIcon} />
        )}
      </div>
      <SidebarMenu items={NAVIGATION_ITEMS} isCollapsed={!isOpen} />
      <Separator />
    </aside>
  );
};
