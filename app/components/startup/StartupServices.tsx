'use client';

import { motion } from 'framer-motion';
import { fadeInUpVariants } from '@/app/utils/animations';
import styles from '@/app/styles/startup/StartupServices.module.css';

const services = [
  {
    id: 1,
    text: 'Evolotek helps companies build strong, modern, and scalable engineering teams by providing expert talent, advanced product engineering capabilities, and global support to deliver secure, flexible technology solutions.',
  },
  {
    id: 2,
    text: 'Evolotek helps startups build strong teams by identifying skill gaps, finding the right talent, offering flexible team as a service pricing, and aligning fully with the founder\'s long-term vision.',
  },
  {
    id: 3,
    text: 'Evolotek helps startups accelerate growth by expanding into new markets, reaching new customer segments, securing investor connections, accessing industry expertise, and scaling through strategic partnerships.',
  },
  {
    id: 4,
    text: 'Evolotek ensures customer success by building strong engagement and retention strategies, maintaining high service standards, gathering continuous feedback, and keeping customers at the core of its mission.',
  },
];

const dropFromTopVariants = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    } as const,
  },
};

const slideFromLeftVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.15,
      delay: custom * 0.0375,
    } as const,
  }),
};

export default function StartupServices() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.headerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={dropFromTopVariants}
        >
          <h2 className={styles.heading}>We Give Everything It Takes</h2>
          <p className={styles.subheading}>End-to-end technology solutions for startups</p>
        </motion.div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={styles.serviceCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              variants={slideFromLeftVariants}
            >
              <p className={styles.serviceText}>{service.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
