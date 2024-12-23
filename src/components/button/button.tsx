import { ButtonProps } from "./button.types";
import styles from "./button.module.scss";
import cn from "classnames";

export const Button = ({
  children,
  variant = "primary",
  leftIcon,
  ...rest
}: ButtonProps) => {
  return (
    <button className={cn(styles.button, styles[variant])} {...rest}>
      {leftIcon ? leftIcon : null}
      {children}
    </button>
  );
};
