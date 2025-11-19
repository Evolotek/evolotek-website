import { easeOut } from 'framer-motion';

export const fadeInUpVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: easeOut } 
  },
};

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

export const slideInTopVariants = {
  hidden: { opacity: 0, y: -60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: easeOut } 
  },
};

export const slideInBottomVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: easeOut } 
  },
};

// Left card animates from top
export const cardLeftVariants = {
  hidden: { opacity: 0, y: -120 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.9, ease: easeOut } 
  },
};

// Middle card animates from bottom
export const cardMiddleVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.9, ease: easeOut } 
  },
};

// Right card animates from top
export const cardRightVariants = {
  hidden: { opacity: 0, y: -120 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.9, ease: easeOut } 
  },
};