import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "border";

export interface ButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  leftIcon?: ReactNode;
}
