import { useTheme } from "@/providers";

export const DarkModeToggle = () => {
  const { handleSetTheme } = useTheme();

  // TODO: Add a toggle button to switch between light and dark mode
  return <div onClick={handleSetTheme}>toggler</div>;
};
