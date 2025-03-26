import styles from "./spinner.module.scss";
import cn from "classnames";

interface SpinnerProps {
  className?: string;
}

export const Spinner = ({ className }: SpinnerProps) => (
  <div className={cn(styles.spinner, className)} />
);
