'use client';

import { motion } from 'framer-motion';
import { fadeInUpVariants } from '@/app/utils/animations';
import styles from '@/app/styles/careers/BenefitsSection.module.css';

const benefits = [
  {
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Flexible Work',
    description: 'Remote-first culture. Work from home, office, or anywhere that suits you. We trust you to do your best work.',
  },
  {
    image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Growth & Learning',
    description: 'Continuous learning budget, mentorship programs, and conference attendance. Level up your skills with us.',
  },
  {
    image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Health & Wellness',
    description: 'Comprehensive health coverage, wellness programs, and mental health support. We care about your wellbeing.',
  },
];

export default function BenefitsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUpVariants}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className={styles.imageBox}>
                <img src={benefit.image} alt={benefit.title} />
              </div>
              <h3 className={styles.title}>{benefit.title}</h3>
              <p className={styles.description}>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
