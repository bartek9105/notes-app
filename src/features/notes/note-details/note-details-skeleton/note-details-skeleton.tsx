import { Skeleton } from "@/components";
import styles from "./note-details-skeleton.module.scss";

export const NoteDetailsSkeleton = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
      <div className={styles.row}>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  );
};
