import styles from "./skeleton.module.scss";
import cn from "classnames";

interface SkeletonLayout {
  rows?: number;
  className?: string;
  showGap?: boolean;
}

export const SkeletonLayout = ({
  rows = 1,
  className,
  showGap = true,
}: SkeletonLayout) => {
  return (
    <div className={cn(showGap && styles.container, className)}>
      {Array.from({ length: rows }).map((_, index) => (
        <div className={styles.skeleton} key={index} />
      ))}
    </div>
  );
};
