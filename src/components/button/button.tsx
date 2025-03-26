import { ButtonProps } from "./button.types";
import styles from "./button.module.scss";
import cn from "classnames";
import { Spinner } from "../spinner";

export const Button = ({
  children,
  variant = "primary",
  leftIcon,
  isLoading,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, styles[variant], {
        [styles.isLoading]: isLoading,
      })}
      {...rest}
    >
      {leftIcon ? leftIcon : null}
      {isLoading ? <Spinner /> : children}
    </button>
  );
};
