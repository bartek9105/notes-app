import { PropsWithChildren } from "react";
import styles from "./auth-layout.module.scss";

export const AuthLayout = ({ children }: PropsWithChildren) => {
  return <div className={styles.container}>{children}</div>;
};
