export const listVariantsAnimation = {
  hidden: {},
  visible: {
    transition: {
      duration: 0.1,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

export const itemVariantsAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
