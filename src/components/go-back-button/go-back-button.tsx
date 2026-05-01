import { Button } from "../button";
import { ChevronLeftIcon } from "@/assets";
import styles from "./go-back-button.module.scss";
import { PropsWithChildren } from "react";
import cn from "classnames";

interface GoBackButtonProps {
  onGoBack: () => void;
  className?: string;
}

export const GoBackButton = ({
  onGoBack,
  children,
  className,
}: PropsWithChildren<GoBackButtonProps>) => {
  return (
    <Button
      onClick={onGoBack}
      leftIcon={<ChevronLeftIcon className={styles.icon} />}
      variant="secondary"
      className={cn(styles.goBackButton, className)}
      isFlat
    >
      {children}
    </Button>
  );
};
