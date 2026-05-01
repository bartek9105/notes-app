import styles from "./sidebar.module.scss";
import { NAVIGATION_ITEMS } from "./sidebar.const";
import { AppLogo, Separator } from "@/components";
import { AnimatePresence, motion } from "motion/react";
import { CloseIcon } from "@/assets";
import { SLIDE_FROM_LEFT_ANIMATION } from "@/consts";
import { SidebarMenu } from "../sidebar-menu/sidebar-menu";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="sidebar"
          className={styles.container}
          {...SLIDE_FROM_LEFT_ANIMATION}
        >
          <div className={styles.topbar}>
            <AppLogo />
            <CloseIcon onClick={onClose} className={styles.closeIcon} />
          </div>
          <SidebarMenu items={NAVIGATION_ITEMS} onClose={onClose} />
          <Separator />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
