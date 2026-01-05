import styles from "./overlay-loader.module.scss";
import { motion } from "motion/react";
import { SCALE_ANIMATION } from "./overlay-loader.const";
import { AppLogo } from "@/components";

export const OverlayLoader = () => {
  return (
    <div className={styles.overlay}>
      <motion.div {...SCALE_ANIMATION}>
        <AppLogo />
      </motion.div>
    </div>
  );
};
