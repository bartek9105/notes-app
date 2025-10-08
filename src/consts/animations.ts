export const APPEAR_ANIMATION = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2, ease: "easeOut" },
};

export const SLIDE_FROM_LEFT_ANIMATION = {
  initial: { left: "-100%" },
  animate: { left: 0 },
  exit: { left: "-100%" },
  transition: { duration: 0.225 },
};

export const LIST_ANIMATION = {
  hidden: {},
  visible: {
    transition: {
      duration: 0.1,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

export const LIST_ITEM_ANIMATION = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
