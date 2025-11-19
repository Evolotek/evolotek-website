'use client';

import { motion } from 'framer-motion';
import { fadeInUpVariants } from '@/app/utils/animations';
import styles from '@/app/styles/careers/CareersHero.module.css';

export default function CareersHero() {
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
          Careers
        </motion.p>

        <motion.h1
          className={styles.heading}
          initial="hidden"
          whileInView="visible"
          variants={fadeInUpVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          Build Your Future With Us.
        </motion.h1>

        <motion.p
          className={styles.description}
          initial="hidden"
          whileInView="visible"
          variants={fadeInUpVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          Join a team of innovators, builders, and problem-solvers. We're creating products and experiences that matter — and we'd love to have you on board.
        </motion.p>
      </div>
    </section>
  );
}
