'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInUpVariants } from '@/app/utils/animations';
import styles from '@/app/styles/startup/Portfolio.module.css';

const logos = [
  { id: 1, name: 'Zoomaya', src: '/images/zoomaya-logo.png', size: 'large' },
  { id: 3, name: 'BRISKPE', src: '/images/briskpe-logo.png', size: 'small' },
  { id: 4, name: 'Sipstr', src: '/images/sipstr-logo.png', size: 'large' },
  { id: 5, name: 'Veraeaty', src: '/images/veraeaty-logo.png', size: 'large' },
];

export default function Portfolio() {
  // Duplicate logos for seamless infinite loop
  const duplicatedLogos = [...logos, ...logos];

  const getLogoWidth = (size: string) => {
    return size === 'small' ? 120 : 200;
  };

  const getLogoHeight = (size: string) => {
    return size === 'small' ? 50 : 80;
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          className={styles.heading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpVariants}
        >
          Our Portfolio
        </motion.h2>

        <motion.div
          className={styles.carouselWrapper}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpVariants}
        >
          <div className={styles.carouselContainer}>
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className={styles.logoCard}
                style={{ minWidth: logo.size === 'small' ? '200px' : '280px' }}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={getLogoWidth(logo.size)}
                  height={getLogoHeight(logo.size)}
                  className={styles.logoImage}
                  priority={index < 4}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
