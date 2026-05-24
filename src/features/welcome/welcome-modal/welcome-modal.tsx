import Lottie from "lottie-react";
import { Button, Modal, Typography } from "@/components";
import { heyAnimation } from "@/animations";
import styles from "./welcome-modal.module.scss";
import { useTranslation } from "react-i18next";

interface WelcomeModalProps {
  isOpen: boolean;
  isPending: boolean;
  onDismiss: () => void;
}

export const WelcomeModal = ({
  isOpen,
  isPending,
  onDismiss,
}: WelcomeModalProps) => {
  const { t } = useTranslation();

  return (
    <Modal isOpen={isOpen} onClose={onDismiss}>
      <div className={styles.container}>
        <Lottie
          animationData={heyAnimation}
          loop
          autoplay
          className={styles.animation}
          aria-hidden
        />
        <Typography variant="text-1">{t("welcome.title")}</Typography>
        <Typography variant="text-4">{t("welcome.hint")}</Typography>
        <Button onClick={onDismiss} isLoading={isPending}>
          {t("welcome.button")}
        </Button>
      </div>
    </Modal>
  );
};
