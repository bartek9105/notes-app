import { TextareaHTMLAttributes } from "react";
import styles from "./textarea-field.module.scss";
import cn from "classnames";
import { useController } from "react-hook-form";

export type TextareaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  name: string;
};

export const TextareaField = ({
  name,
  className,
  ...restProps
}: TextareaFieldProps) => {
  const { field } = useController({ name });

  return (
    <textarea
      {...field}
      {...restProps}
      className={cn(styles.container, className)}
    />
  );
};
