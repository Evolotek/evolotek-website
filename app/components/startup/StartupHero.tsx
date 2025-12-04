'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeInUpVariants } from '@/app/utils/animations';
import PartnershipForm from '@/app/components/startup/PartnershipForm';
import styles from '@/app/styles/startup/StartupHero.module.css';

export default function StartupHero() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <motion.h1
            className={styles.heading}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariants}
            viewport={{ once: true, amount: 0.3 }}
          >
            Accelerate Your Startup Growth.
          </motion.h1>

          <motion.p
            className={styles.description}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariants}
            viewport={{ once: true, amount: 0.3 }}
          >
            We handle your technology so you can focus on what matters - building your business.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariants}
            viewport={{ once: true, amount: 0.3 }}
          >
            <button
              onClick={() => setIsFormOpen(true)}
              className={styles.ctaButton}
              type="button"
            >
              Partner With Us
              <ArrowRight className={styles.arrowIcon} />
            </button>
          </motion.div>
        </div>
      </section>

      <PartnershipForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </>
  );
}