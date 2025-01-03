import { InputHTMLAttributes } from "react";
import styles from "./input.module.scss";
import cn from "classnames";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  isError?: boolean;
};

export const Input = ({ type = "text", isError, ...props }: InputProps) => {
  return (
    <input
      className={cn(styles.container, {
        [styles.error]: isError,
      })}
      type={type}
      {...props}
    />
  );
};