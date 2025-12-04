'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { fadeInUpVariants } from '@/app/utils/animations';
import styles from '@/app/styles/startup/CTASection.module.css';

const ctaVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
    } as const,
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom * 0.1,
    } as const,
  }),
};

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          className={styles.heading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ctaVariants}
        >
          Ready to start your innovation journey?
        </motion.h2>

        <motion.div
          className={styles.buttonContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            custom={0}
            variants={buttonVariants}
          >
            <Link href="/contact" className={styles.ctaButton}>
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div
            custom={1}
            variants={buttonVariants}
          >
            <Link href="/services" className={styles.ctaButton}>
              Explore Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
