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
  const themeClass = theme === 'dark' ? styles.dark : styles.light;
  const layoutClass = styles[layout];
  const reverseClass = reversed ? styles.reversed : '';

  return (
    <motion.section
      className={`${styles.section} ${themeClass}`}
      initial="hidden"
      whileInView="visible"
      variants={fadeInUpVariants}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={`${styles.container} ${layoutClass} ${reverseClass}`}>
        <div className={styles.content}>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.text}>{content}</p>
        </div>

        {image && layout !== 'text-only' && (
          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img src={image} alt={imageAlt} className={styles.image} />
          </motion.div>
        )}

        {image && layout === 'image-full' && (
          <motion.div
            className={styles.fullBleedImage}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img src={image} alt={imageAlt} />
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
