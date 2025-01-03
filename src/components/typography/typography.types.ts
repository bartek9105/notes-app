import { PropsWithChildren } from "react";

type TypographyVariants =
  | "text-1"
  | "text-2"
  | "text-3"
  | "text-4"
  | "text-5"
  | "text-6";

type TypographyComponent =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span";

export interface TypographyProps extends PropsWithChildren {
  variant: TypographyVariants;
  className?: string;
  as?: TypographyComponent;
}
