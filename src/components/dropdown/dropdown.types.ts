import { ReactNode } from "react";

export interface DropdownOption<T extends string = string> {
  value: T;
  label: ReactNode;
}

export interface DropdownProps<T extends string = string> {
  options: DropdownOption<T>[];
  value: T;
  onChange: (value: T) => void;
  label?: ReactNode;
  placeholder?: ReactNode;
  className?: string;
  menuClassName?: string;
  align?: "left" | "right";
  disabled?: boolean;
}
