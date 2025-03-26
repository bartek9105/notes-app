import { Link } from "react-router-dom";
import styles from "./auth-hint.module.scss";
import { Typography } from "@/components";

interface AuthHintProps {
  hint: string;
  linkTo: string;
  linkText: string;
}

export const AuthHint = ({ hint, linkTo, linkText }: AuthHintProps) => {
  return (
    <div className={styles.container}>
      <Typography variant="text-5" className={styles.hint}>
        {hint}
      </Typography>
      <Typography variant="text-5">
        <Link to={linkTo} className={styles.link}>
          {linkText}
        </Link>
      </Typography>
    </div>
  );
};
