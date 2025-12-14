'use client';

import { motion } from 'framer-motion';
import { fadeInUpVariants } from '@/app/utils/animations';
import styles from '@/app/styles/work/ProjectMetadata.module.css';

interface ProjectMetadataProps {
  services: string[];
  sectors: string[];
  theme: 'dark' | 'light';
}

export default function ProjectMetadata({
  services,
  sectors,
  theme,
}: ProjectMetadataProps) {
  return (
    <motion.section
      className={styles.section}
      initial="hidden"
      whileInView="visible"
      variants={fadeInUpVariants}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.container}>
        <div className={styles.metadataGrid}>
          <div className={styles.metadataItem}>
            <h3 className={styles.label}>Services</h3>
            <div className={styles.pills}>
              {services.map((service) => (
                <span key={service} className={styles.pill}>
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.metadataItem}>
            <h3 className={styles.label}>Sectors</h3>
            <div className={styles.pills}>
              {sectors.map((sector) => (
                <span key={sector} className={styles.pill}>
                  {sector}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
