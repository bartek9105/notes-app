import { Logo, LogoDarkMode } from "@/assets";
import { useTheme } from "@/providers";

export const AppLogo = () => {
  const { theme } = useTheme();

  return theme === "dark" ? <LogoDarkMode /> : <Logo />;
};
