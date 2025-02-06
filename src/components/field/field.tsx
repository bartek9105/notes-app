import { InputHTMLAttributes } from "react";
import { useController } from "react-hook-form";
import styles from "./field.module.scss";
import { Typography } from "../typography";
import { Input } from "../input";
import { InfoIcon } from "@/icons";

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  hint?: string;
};

export const Field = ({ label, name, hint, ...restProps }: FieldProps) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name });

  return (
    <div className={styles.container}>
      <label htmlFor={name}>
        <Typography variant="text-4">{label}</Typography>
      </label>
      <Input {...field} {...restProps} isError={!!error?.message} />
      {hint && (
        <div className={styles.hint}>
          <InfoIcon />
          <span className={styles.hintText}>{hint}</span>
        </div>
      )}
      {error?.message && (
        <Typography variant="text-6" className={styles.errorMessage}>
          {error?.message}
        </Typography>
      )}
    </div>
  );
};
