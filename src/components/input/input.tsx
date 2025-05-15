import { InputHTMLAttributes } from "react";
import styles from "./input.module.scss";
import cn from "classnames";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  isError?: boolean;
};

export const Input = ({
  type = "text",
  isError,
  className,
  ...props
}: InputProps) => {
  return (
    <input
      className={cn(className, styles.container, {
        [styles.error]: isError,
      })}
      type={type}
      {...props}
    />
  );
};
