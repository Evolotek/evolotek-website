'use client';

import { motion } from 'framer-motion';
import { fadeInUpVariants } from '@/app/utils/animations';
import styles from '@/app/styles/careers/CareersHero.module.css';

export default function CareersHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.h1
          className={styles.heading}
          initial="hidden"
          whileInView="visible"
          variants={fadeInUpVariants}
          viewport={{ once: true, amount: 0.3 }}
        >
          Let’s Build Cool Stuff.
        </motion.h1>

        <motion.p
          className={styles.description}
          initial="hidden"
          whileInView="visible"
          variants={fadeInUpVariants}
          viewport={{ once: true, amount: 0.3 }}
        >
          We’re not just hiring — we’re building. Work with passionate engineers, creators, and thinkers solving global challenges through tech.
        </motion.p>
      </div>
    </section>
  );
}
