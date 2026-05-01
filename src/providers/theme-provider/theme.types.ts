export type Theme = "light" | "dark" | "system";

export type ThemeContextType = {
  theme: Theme;
  handleSetTheme: (theme: Theme) => void;
};
