import styles from "./sidebar.module.scss";
import Logo from "../../../assets/logo.svg";
import ChevronRight from "../../../assets/chevron-right.svg";
import Close from "../../../assets/close.svg";
import { NAVIGATION_ITEMS } from "./sidebar.const";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import { Separator, Typography } from "@/components";
import { motion } from "motion/react";

const sidebarVariants = {
  open: { left: 0, transition: { type: "slide" } },
  closed: { left: "-100%", transition: { type: "slide" } },
};

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ onClose }: SidebarProps) => {
  return (
    <motion.aside
      key="sidebar"
      className={styles.container}
      variants={sidebarVariants}
      initial="closed"
      animate="open"
      exit="closed"
    >
      <div className={styles.topbar}>
        <Logo />
        <Close onClick={onClose} />
      </div>
      <ul className={styles.list}>
        {NAVIGATION_ITEMS.map((item) => (
          <li key={item.id}>
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
                  {isActive && <ChevronRight />}
                </div>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
      <Separator />
    </motion.aside>
  );
};
