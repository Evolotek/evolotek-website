'use client';

import { motion } from 'framer-motion';
import { fadeInUpVariants } from '@/app/utils/animations';
import styles from '@/app/styles/services/ServiceDetails.module.css';

export default function ServiceDetails() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.p
            className={styles.category}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariants}
            viewport={{ once: true, amount: 0.2 }}
          >
            Engineering
          </motion.p>

          <motion.h2
            className={styles.heading}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariants}
            viewport={{ once: true, amount: 0.2 }}
          >
            Build What's Next.
          </motion.h2>

          <motion.p
            className={styles.description}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariants}
            viewport={{ once: true, amount: 0.2 }}
          >
            We design and ship world-class systems — the kind that scale effortlessly and perform brilliantly.
          </motion.p>

          <motion.div
            className={styles.whatWeDo}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariants}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3>What We Do:</h3>
            <ul>
              <li>Cloud-native engineering</li>
              <li>API ecosystems</li>
              <li>DevOps and CI/CD</li>
              <li>Data engineering and analytics</li>
            </ul>
          </motion.div>

          <motion.a
            href="#"
            className={styles.cta}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariants}
            viewport={{ once: true, amount: 0.2 }}
          >
            Let's Build Together <span>→</span>
          </motion.a>
        </div>

        <div className={styles.imagesGrid}>
          <motion.div
            className={styles.imageTopLeft}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariants}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img src="/images/service-detail-1.jpg" alt="Wireframe Design" />
          </motion.div>

          <motion.div
            className={styles.imageTopRight}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariants}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img src="/images/service-detail-2.jpg" alt="Cloud Architecture" />
          </motion.div>

          <motion.div
            className={styles.imageBottom}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariants}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img src="/images/service-detail-3.jpg" alt="Analytics Dashboard" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
