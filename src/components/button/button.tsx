import { ButtonProps } from "./button.types";
import styles from "./button.module.scss";
import cn from "classnames";
import { Spinner } from "../spinner";

export const Button = ({
  children,
  variant = "primary",
  leftIcon,
  isLoading,
  className,
  iconOnly,
  icon,
  isFlat,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={cn(
        styles.button,
        styles[variant],
        {
          [styles.isLoading]: isLoading,
          [styles.iconOnly]: iconOnly,
          [styles.isFlat]: isFlat,
        },
        className
      )}
      {...rest}
    >
      {leftIcon ? leftIcon : null}
      {isLoading ? <Spinner /> : children || icon}
    </button>
  );
};
