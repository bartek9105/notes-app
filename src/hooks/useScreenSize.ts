import { useEffect, useState } from "react";

const TABLET_MIN_WIDTH = 768;
const DESKTOP_MIN_WIDTH = 1440;

export const useScreenSize = () => {
  const [width, setWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width < TABLET_MIN_WIDTH;
  const isTablet = width >= TABLET_MIN_WIDTH && width < DESKTOP_MIN_WIDTH;
  const isDesktop = width >= DESKTOP_MIN_WIDTH;

  return { isMobile, isTablet, isDesktop };
};
