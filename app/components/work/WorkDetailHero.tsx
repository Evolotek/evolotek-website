'use client';

import { motion } from 'framer-motion';
import { fadeInUpVariants } from '@/app/utils/animations';
import styles from '@/app/styles/work/WorkDetailHero.module.css';

interface WorkDetailHeroProps {
  client: string;
  title: string;
  tagline: string;
  coverImage: string;
  theme: 'dark' | 'light';
}

export default function WorkDetailHero({
  client,
  title,
  tagline,
  coverImage,
  theme,
}: WorkDetailHeroProps) {
  const themeClass = theme === 'dark' ? styles.dark : styles.light;

  return (
    <section className={`${styles.hero} ${themeClass}`}>
      <motion.img
        src={coverImage}
        alt={title}
        className={styles.backgroundImage}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />

      <div className={styles.overlay} />

      <div className={styles.container}>
        <motion.p
          className={styles.client}
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
        >
          {client}
        </motion.p>

        <motion.h1
          className={styles.title}
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
        >
          {title}
        </motion.h1>

        <motion.p
          className={styles.tagline}
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
        >
          {tagline}
        </motion.p>
      </div>
    </section>
  );
}
