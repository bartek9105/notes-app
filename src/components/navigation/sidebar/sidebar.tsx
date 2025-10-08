import styles from "./sidebar.module.scss";
import { NAVIGATION_ITEMS } from "./sidebar.const";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import { Separator, Typography } from "@/components";
import { AnimatePresence, motion } from "motion/react";
import { Logo, CloseIcon, ChevronRightIcon } from "@/assets";
import {
  LIST_ANIMATION,
  LIST_ITEM_ANIMATION,
  SLIDE_FROM_LEFT_ANIMATION,
} from "@/consts";

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
            <Logo />
            <CloseIcon onClick={onClose} className={styles.closeIcon} />
          </div>
          <motion.ul
            className={styles.list}
            variants={LIST_ANIMATION}
            initial="hidden"
            animate="visible"
          >
            {NAVIGATION_ITEMS.map((item) => (
              <motion.li
                key={item.id}
                variants={LIST_ITEM_ANIMATION}
                initial="hidden"
                animate="visible"
              >
                <NavLink to={item.route} onClick={onClose}>
                  {({ isActive }) => (
                    <div
                      className={cn(styles.link, {
                        [styles.linkActive]: isActive,
                      })}
                    >
                      <div className={styles.linkLeftContent}>
                        <item.icon className={styles.icon} />
                        <Typography variant="text-4" className={styles.label}>
                          {item.label}
                        </Typography>
                      </div>
                      {isActive && <ChevronRightIcon />}
                    </div>
                  )}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>
          <Separator />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
