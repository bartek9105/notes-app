import { PropsWithChildren } from "react";
import styles from "./auth-form-layout.module.scss";
import Logo from "../../../../assets/logo.svg";
import { Typography } from "@/components";

interface AuthFormLayoutProps {
  title: string;
  hint: string;
}

export const AuthFormLayout = ({
  title,
  hint,
  children,
}: PropsWithChildren<AuthFormLayoutProps>) => {
  return (
    <div className={styles.container}>
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
  );
};
