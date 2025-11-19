'use client';

import { motion, easeOut } from 'framer-motion';
import styles from '@/app/styles/services/ServiceCard.module.css';

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  position: 'left' | 'middle' | 'right';
  cardVariants: any;
  onReadMore?: () => void;
}

export default function ServiceCard({
  image,
  title,
  description,
  position,
  cardVariants,
  onReadMore,
}: ServiceCardProps) {
  const imageVariants = {
    left: {
      hidden: { opacity: 0, y: -200 },
      visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.8, ease: easeOut } 
      },
    },
    middle: {
      hidden: { opacity: 0, y: 200 },
      visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.8, ease: easeOut } 
      },
    },
    right: {
      hidden: { opacity: 0, y: -200 },
      visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.8, ease: easeOut } 
      },
    },
  };

  return (
    <motion.div
      className={styles.card}
      initial="hidden"
      whileInView="visible"
      variants={cardVariants}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className={styles.imageWrapper}
        initial="hidden"
        whileInView="visible"
        variants={imageVariants[position]}
        viewport={{ once: true, amount: 0.2 }}
      >
        <img src={image} alt={title} className={styles.image} />
      </motion.div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <button
          onClick={onReadMore}
          className={styles.readMore}
        >
          Read More <span>→</span>
        </button>
      </div>
    </motion.div>
  );
}
