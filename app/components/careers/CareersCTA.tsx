'use client';

import { motion } from 'framer-motion';
import { fadeInUpVariants } from '@/app/utils/animations';
import styles from '@/app/styles/careers/CareersCTA.module.css';

export default function CareersCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          className={styles.heading}
          initial="hidden"
          whileInView="visible"
          variants={fadeInUpVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          Don't See the Right Role?
        </motion.h2>

        <motion.p
          className={styles.description}
          initial="hidden"
          whileInView="visible"
          variants={fadeInUpVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          We're always looking for talented people. Send us your resume and tell us what you're interested in.
        </motion.p>

        <motion.a
          href="mailto:careers@evolotek.com?subject=General%20Application&body=Hi%2C%0A%0AI'm%20interested%20in%20joining%20Evolotek.%0A%0AName%3A%0AEmail%3A%0APhone%3A%0ALinkedIn%3A%0A%0APlease%20find%20my%20resume%20attached."
          className={styles.button}
          initial="hidden"
          whileInView="visible"
          variants={fadeInUpVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          Send Your Resume <span>→</span>
        </motion.a>
      </div>
    </section>
  );
}
