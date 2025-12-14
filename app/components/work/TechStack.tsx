'use client';

import { motion } from 'framer-motion';
import { fadeInUpVariants } from '@/app/utils/animations';
import styles from '@/app/styles/work/TechStack.module.css';

interface TechStackProps {
  technologies: string[];
  theme: 'dark' | 'light';
}

export default function TechStack({ technologies, theme }: TechStackProps) {
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
        <h2 className={styles.heading}>Technology Stack</h2>
        <div className={styles.badges}>
          {technologies.map((tech) => (
            <motion.span
              key={tech}
              className={styles.badge}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
