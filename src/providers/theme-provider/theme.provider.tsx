import { PropsWithChildren, useEffect, useState } from "react";
import { ThemeContext } from "./theme.context";
import { Theme } from "./theme.types";

const LOCAL_STORAGE_THEME_KEY = "theme";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme]);

  const handleSetTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
