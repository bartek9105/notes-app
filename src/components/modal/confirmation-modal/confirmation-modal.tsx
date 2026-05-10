import { ReactNode } from "react";
import styles from "./confirmation-modal.module.scss";
import { Button, ButtonVariant, Typography } from "@/components";
import { Modal } from "../modal";

interface ConfirmationModalProps {
  isOpen: boolean;
  title: string;
  hint?: string;
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
    disabled?: boolean;
  };
  children?: ReactNode;
}

export const ConfirmationModal = ({
  isOpen,
  title,
  hint,
  icon,
  confirmButton,
  cancelButton,
  buttonsDisabled,
  children,
}: ConfirmationModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={cancelButton.onClick}>
      <div className={styles.content}>
        <div className={styles.icon}>{icon}</div>
        <div>
          <Typography variant="text-3" className={styles.title}>
            {title}
          </Typography>
          {hint && (
            <Typography variant="text-5" className={styles.hint}>
              {hint}
            </Typography>
          )}
          {children && <div className={styles.children}>{children}</div>}
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
          disabled={buttonsDisabled || confirmButton.disabled}
        >
          {confirmButton.text}
        </Button>
      </div>
    </Modal>
  );
};
