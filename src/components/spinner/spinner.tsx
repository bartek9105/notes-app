import styles from "./spinner.module.scss";
import cn from "classnames";

interface SpinnerProps {
  className?: string;
  asBlock?: boolean;
}

export const Spinner = ({ className, asBlock }: SpinnerProps) => {
  if (asBlock) {
    return (
      <div className={styles.container}>
        <div className={cn(styles.spinner, className)} />
      </div>
    );
  }
  return <div className={cn(styles.spinner, className)} />;
};
