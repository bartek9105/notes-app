import { useState } from "react";
import cn from "classnames";
import { EyeHideIcon, EyeIcon } from "@/assets";
import styles from "./input-password.module.scss";
import { Input, InputProps } from "./input";

export type InputPasswordProps = Omit<InputProps, "type"> & {
  isError?: boolean;
};

export const InputPassword = ({
  isError,
  className,
  disabled,
  ...props
}: InputPasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.root}>
      <Input
        {...props}
        type={showPassword ? "text" : "password"}
        isError={isError}
        className={className}
        disabled={disabled}
      />
      <button
        type="button"
        className={cn(styles.toggle, { [styles.toggleDisabled]: disabled })}
        disabled={disabled}
        aria-label={showPassword ? "Hide password" : "Show password"}
        aria-pressed={showPassword}
        onClick={() => setShowPassword((showPassword) => !showPassword)}
      >
        {showPassword ? (
          <EyeIcon />
        ) : (
          <EyeHideIcon className={styles.revealIcon} />
        )}
      </button>
    </div>
  );
};
