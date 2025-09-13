import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "border" | "danger";

type BaseButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> & {
  variant?: ButtonVariant;
  isLoading?: boolean;
  isFlat?: boolean;
};

type IconOnlyButtonProps = BaseButtonProps & {
  iconOnly: true;
  children?: never;
  leftIcon?: never;
  icon: ReactNode;
};

type RegularButtonProps = BaseButtonProps & {
  iconOnly?: false;
  children: ReactNode;
  leftIcon?: ReactNode;
  icon?: never;
};

export type ButtonProps = IconOnlyButtonProps | RegularButtonProps;
