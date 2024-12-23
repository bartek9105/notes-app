import { TypographyProps } from "./typography.types";
import styles from "./typography.module.scss";
import cn from "classnames";

export const Typography = ({
  children,
  variant,
  as = "p",
}: TypographyProps) => {
  const TypographyComponent = as;
  return (
    <TypographyComponent className={cn(styles.typography, styles[variant])}>
      {children}
    </TypographyComponent>
  );
};
