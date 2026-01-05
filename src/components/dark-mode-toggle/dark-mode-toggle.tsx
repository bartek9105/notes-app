import { useTheme } from "@/providers";

export const DarkModeToggle = () => {
  const { handleSetTheme } = useTheme();

  return <div onClick={handleSetTheme}>toggler</div>;
};
