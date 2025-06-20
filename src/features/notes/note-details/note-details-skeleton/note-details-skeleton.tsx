import { Skeleton } from "@/components";
import styles from "./note-details-skeleton.module.scss";

const NoteDetailsSkeletonRow = () => (
  <div className={styles.row}>
    <Skeleton />
    <Skeleton />
    <Skeleton />
  </div>
);

export const NoteDetailsSkeleton = () => {
  return (
    <div className={styles.container}>
      <NoteDetailsSkeletonRow />
      <NoteDetailsSkeletonRow />
    </div>
  );
};
