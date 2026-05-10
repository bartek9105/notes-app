import { ReactNode, useEffect, useRef } from "react";
import styles from "./modal.module.scss";
import { AnimatePresence, motion } from "motion/react";
import { APPEAR_ANIMATION } from "@/consts";
import { useClickOutside } from "@/hooks";
import cn from "classnames";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children?: ReactNode;
  className?: string;
}

export const Modal = ({ isOpen, onClose, children, className }: ModalProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useClickOutside(contentRef, onClose, isOpen && !!onClose);

  useEffect(() => {
    if (!isOpen || !onClose) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className={styles.overlay} {...APPEAR_ANIMATION}>
          <motion.div
            ref={contentRef}
            className={cn(styles.children, className)}
            {...APPEAR_ANIMATION}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
