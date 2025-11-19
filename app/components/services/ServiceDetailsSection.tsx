'use client';

import { motion } from 'framer-motion';
import { fadeInUpVariants } from '@/app/utils/animations';
import styles from '@/app/styles/services/ServiceDetailsSection.module.css';

interface ServiceDetailsSectionProps {
  id: string;
  category: string;
  heading: string;
  description: string;
  offerings: string[];
  imageTopLeft: string;
  imageTopRight: string;
  imageBottom: string;
  layout?: 'left-content' | 'right-content';
  isDark?: boolean;
}

export default function ServiceDetailsSection({
  id,
  category,
  heading,
  description,
  offerings,
  imageTopLeft,
  imageTopRight,
  imageBottom,
  layout = 'left-content',
  isDark = false,
}: ServiceDetailsSectionProps) {
  const contentClass = layout === 'left-content' ? styles.contentLeft : styles.contentRight;
  const imagesClass = isDark 
    ? `${styles.imagesLeft} ${styles.imagesDark}` 
    : (layout === 'right-content' ? styles.imagesLeft : styles.imagesRight);
  const containerClass = isDark ? styles.containerDark : (layout === 'right-content' ? styles.containerReverse : '');
  const contentDarkClass = isDark ? styles.contentDark : '';

  const renderContent = () => (
    <div className={`${contentClass} ${contentDarkClass}`}>
      <motion.p
        className={styles.category}
        initial="hidden"
        whileInView="visible"
        variants={fadeInUpVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        {category}
      </motion.p>

      <motion.h2
        className={styles.heading}
        initial="hidden"
        whileInView="visible"
        variants={fadeInUpVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        {heading}
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

      <motion.div
        className={styles.offerings}
        initial="hidden"
        whileInView="visible"
        variants={fadeInUpVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3>Offerings:</h3>
        <ul>
          {offerings.map((offering, index) => (
            <li key={index}>{offering}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );

  const renderImages = () => (
    <div className={imagesClass}>
      <motion.div
        className={styles.imageTopLeft}
        initial="hidden"
        whileInView="visible"
        variants={fadeInUpVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <img src={imageTopLeft} alt="Service Detail" />
      </motion.div>

      <motion.div
        className={styles.imageTopRight}
        initial="hidden"
        whileInView="visible"
        variants={fadeInUpVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <img src={imageTopRight} alt="Service Detail" />
      </motion.div>

      <motion.div
        className={styles.imageBottom}
        initial="hidden"
        whileInView="visible"
        variants={fadeInUpVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <img src={imageBottom} alt="Service Detail" />
      </motion.div>
    </div>
  );

  return (
    <section 
      id={id}
      className={`${styles.section} ${isDark ? styles.dark : ''}`}
    >
      <div className={`${styles.container} ${containerClass}`}>
        {layout === 'right-content' ? (
          <>
            {renderImages()}
            {renderContent()}
          </>
        ) : (
          <>
            {renderContent()}
            {renderImages()}
          </>
        )}
      </div>
    </section>
  );
}
