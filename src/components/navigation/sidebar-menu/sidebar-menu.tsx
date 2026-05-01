import { LIST_ANIMATION, LIST_ITEM_ANIMATION } from "@/consts";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";
import styles from "./sidebar-menu.module.scss";
import { ChevronRightIcon } from "@/assets";
import cn from "classnames";
import { Typography } from "@/components";

interface SidebarMenuProps {
  items: {
    id: string;
    route: string;
    icon: React.ElementType;
    label: string;
  }[];
  onClose?: () => void;
}

export const SidebarMenu = ({ items, onClose }: SidebarMenuProps) => {
  return (
    <motion.ul
      className={styles.list}
      variants={LIST_ANIMATION}
      initial="hidden"
      animate="visible"
    >
      {items.map((item) => (
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
  );
};
