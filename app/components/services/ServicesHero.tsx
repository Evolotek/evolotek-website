'use client';

import { motion } from 'framer-motion';
import { fadeInUpVariants } from '@/app/utils/animations';
import styles from '@/app/styles/services/ServicesHero.module.css';

export default function ServicesHero() {
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
          Services
        </motion.p>

        <motion.h1
          className={styles.heading}
          initial="hidden"
          whileInView="visible"
          variants={fadeInUpVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          Everything You Need to Build, Transform, and Scale.
        </motion.h1>

        <motion.p
          className={styles.description}
          initial="hidden"
          whileInView="visible"
          variants={fadeInUpVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          We're your one-stop partner for building smart, scalable, and secure digital systems — from code to culture.
        </motion.p>
      </div>
    </section>
  );
}
