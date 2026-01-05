import { createContext } from "react";
import { ThemeContextType } from "./theme.types";

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  handleSetTheme: () => {},
});
