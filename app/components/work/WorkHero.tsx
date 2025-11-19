'use client';

import { motion } from 'framer-motion';
import { fadeInUpVariants } from '@/app/utils/animations';
import styles from '@/app/styles/work/WorkHero.module.css';

export default function WorkHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.p
          className={styles.label}
          initial="hidden"
          whileInView="visible"
          variants={fadeInUpVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          Work
        </motion.p>

        <motion.h1
          className={styles.heading}
          initial="hidden"
          whileInView="visible"
          variants={fadeInUpVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          Bring Bold Ideas to Life.
        </motion.h1>

        <motion.p
          className={styles.description}
          initial="hidden"
          whileInView="visible"
          variants={fadeInUpVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          Imagine and build experiences, products and businesses that disrupt the status quo, win hearts and realize the future.
        </motion.p>
      </div>
    </section>
  );
}
