import styles from "./separator.module.scss";
import cn from "classnames";

interface SeparatorProps {
  className?: string;
}

export const Separator = ({ className }: SeparatorProps) => (
  <div className={cn(styles.container, className)} />
);
