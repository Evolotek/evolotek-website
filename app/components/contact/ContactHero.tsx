'use client';

import { motion } from 'framer-motion';
import { fadeInUpVariants } from '@/app/utils/animations';
import styles from '@/app/styles/contact/ContactHero.module.css';

export default function ContactHero() {
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
          Let's Make Something Awesome.
        </motion.h1>

        <motion.p
          className={styles.description}
          initial="hidden"
          whileInView="visible"
          variants={fadeInUpVariants}
          viewport={{ once: true, amount: 0.3 }}
        >
          Have a bold idea? Let's make it real. Connect with our teams in the USA or India, your next big leap starts here.
        </motion.p>
      </div>
    </section>
  );
}
