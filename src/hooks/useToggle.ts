import { useState } from "react";

export const useToggle = (initOpen: boolean = false) => {
  const [isOpen, setIsOpen] = useState(initOpen);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    toggle,
  };
};
