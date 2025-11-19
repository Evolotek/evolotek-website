'use client';

import { motion } from 'framer-motion';
import { fadeInUpVariants } from '@/app/utils/animations';
import styles from '@/app/styles/work/ProjectSection.module.css';

interface ProjectSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  layout: 'left' | 'right';
  theme: 'light' | 'dark';
}

export default function ProjectSection({
  title,
  description,
  imageSrc,
  layout,
  theme,
}: ProjectSectionProps) {
  const contentClass = layout === 'left' ? styles.contentLeft : styles.contentRight;
  const imageClass = layout === 'left' ? styles.imageRight : styles.imageLeft;
  const themeClass = theme === 'dark' ? styles.dark : styles.light;

  const renderContent = () => (
    <div className={`${styles.content} ${contentClass}`}>
      <motion.h2
        className={styles.title}
        initial="hidden"
        whileInView="visible"
        variants={fadeInUpVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        {title}
      </motion.h2>

      <motion.p
        className={styles.description}
        initial="hidden"
        whileInView="visible"
        variants={fadeInUpVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        {description}
      </motion.p>

      <motion.a
        href="#"
        className={styles.readMore}
        initial="hidden"
        whileInView="visible"
        variants={fadeInUpVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        Read More <span>→</span>
      </motion.a>
    </div>
  );

  const renderImage = () => (
    <motion.div
      className={`${styles.imageWrapper} ${imageClass}`}
      initial="hidden"
      whileInView="visible"
      variants={fadeInUpVariants}
      viewport={{ once: true, amount: 0.2 }}
    >
      <img src={imageSrc} alt={title} className={styles.image} />
    </motion.div>
  );

  return (
    <section className={`${styles.section} ${themeClass}`}>
      <div className={styles.container}>
        {layout === 'left' ? (
          <>
            {renderContent()}
            {renderImage()}
          </>
        ) : (
          <>
            {renderImage()}
            {renderContent()}
          </>
        )}
      </div>
    </section>
  );
}
