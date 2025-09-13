import { ReactNode } from "react";
import { Typography } from "../typography";
import styles from "./modal.module.scss";
import { Button, ButtonVariant } from "../button";
import { AnimatePresence, motion } from "motion/react";
import { APPEAR_ANIMATION } from "@/consts";

interface ModalProps {
  isOpen: boolean;
  title: string;
  hint: string;
  icon: ReactNode;
  buttonsDisabled?: boolean;
  cancelButton: {
    onClick: () => void;
    text: string;
  };
  confirmButton: {
    onClick: () => void;
    text: string;
    variant: ButtonVariant;
  };
}

export const Modal = ({
  isOpen,
  title,
  hint,
  icon,
  confirmButton,
  cancelButton,
  buttonsDisabled,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className={styles.overlay} {...APPEAR_ANIMATION}>
          <motion.div className={styles.container} {...APPEAR_ANIMATION}>
            <div className={styles.content}>
              <div className={styles.icon}>{icon}</div>
              <div>
                <Typography variant="text-3" className={styles.title}>
                  {title}
                </Typography>
                <Typography variant="text-5" className={styles.hint}>
                  {hint}
                </Typography>
              </div>
            </div>
            <div className={styles.footer}>
              <Button
                variant="secondary"
                onClick={cancelButton.onClick}
                className={styles.button}
                disabled={buttonsDisabled}
              >
                {cancelButton.text}
              </Button>
              <Button
                variant={confirmButton.variant}
                onClick={confirmButton.onClick}
                className={styles.button}
                disabled={buttonsDisabled}
              >
                {confirmButton.text}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
