import { TypographyProps } from "./typography.types";
import styles from "./typography.module.scss";
import cn from "classnames";

export const Typography = ({
  children,
  variant,
  className,
  as = "p",
}: TypographyProps) => {
  const TypographyComponent = as;

  return (
    <TypographyComponent
      className={cn(styles.typography, styles[variant], className)}
    >
      {children}
    </TypographyComponent>
  );
};
