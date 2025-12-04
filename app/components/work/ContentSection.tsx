'use client';

import { motion } from 'framer-motion';
import { fadeInUpVariants } from '@/app/utils/animations';
import styles from '@/app/styles/work/ContentSection.module.css';

interface ContentSectionProps {
  heading: string;
  content: string;
  layout?: 'text-only' | 'text-image' | 'image-full';
  image?: string;
  imageAlt?: string;
  theme: 'dark' | 'light';
  reversed?: boolean;
}

export default function ContentSection({
  heading,
  content,
  layout = 'text-only',
  image,
  imageAlt,
  theme,
  reversed = false,
}: ContentSectionProps) {
  return (
    <motion.section
      className={styles.section}
      initial="hidden"
      whileInView="visible"
      variants={fadeInUpVariants}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.text}>{content}</p>
        </div>
      </div>
    </motion.section>
  );
}
