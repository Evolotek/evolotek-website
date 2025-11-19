'use client';

import { motion } from 'framer-motion';
import { fadeInUpVariants } from '@/app/utils/animations';
import styles from '@/app/styles/work/ResultsSection.module.css';
import type { Metric } from '@/lib/projectsData';

interface ResultsSectionProps {
  results: Metric[];
  theme: 'dark' | 'light';
}

export default function ResultsSection({ results, theme }: ResultsSectionProps) {
  const themeClass = theme === 'dark' ? styles.dark : styles.light;

  return (
    <motion.section
      className={`${styles.section} ${themeClass}`}
      initial="hidden"
      whileInView="visible"
      variants={fadeInUpVariants}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.container}>
        <h2 className={styles.heading}>Results & Impact</h2>
        <div className={styles.metricsGrid}>
          {results.map((metric, index) => (
            <motion.div
              key={index}
              className={styles.metricCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className={styles.value}>{metric.value}</p>
              <p className={styles.label}>{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
