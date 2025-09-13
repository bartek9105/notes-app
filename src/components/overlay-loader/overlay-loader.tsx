import { Logo } from "@/assets";
import styles from "./overlay-loader.module.scss";
import { motion } from "motion/react";
import { SCALE_ANIMATION } from "./overlay-loader.const";

export const OverlayLoader = () => {
  return (
    <div className={styles.overlay}>
      <motion.div {...SCALE_ANIMATION}>
        <Logo />
      </motion.div>
    </div>
  );
};
