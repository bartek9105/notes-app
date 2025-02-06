import { PropsWithChildren } from "react";
import styles from "./auth-layout.module.scss";
import Logo from "../../assets/logo.svg";
import { Typography } from "@/components";

interface AuthLayoutProps {
  title: string;
  hint: string;
}

export const AuthLayout = ({
  title,
  hint,
  children,
}: PropsWithChildren<AuthLayoutProps>) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Logo />
        <div className={styles.heading}>
          <Typography variant="text-1" className={styles.title}>
            {title}
          </Typography>
          <Typography variant="text-5" className={styles.hint}>
            {hint}
          </Typography>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
