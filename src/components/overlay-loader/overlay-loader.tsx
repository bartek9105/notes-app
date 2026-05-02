import styles from "./overlay-loader.module.scss";
import { motion } from "motion/react";
import { SCALE_ANIMATION } from "./overlay-loader.const";
import { LogoFeatherAnimatedIcon } from "@/assets";

export const OverlayLoader = () => {
  return (
    <div className={styles.overlay}>
      <motion.div {...SCALE_ANIMATION}>
        <LogoFeatherAnimatedIcon />
      </motion.div>
    </div>
  );
};
