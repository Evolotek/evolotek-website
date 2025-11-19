'use client';

import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { cardLeftVariants, cardMiddleVariants, cardRightVariants } from '@/app/utils/animations';
import styles from '@/app/styles/services/ServicesGrid.module.css';

const services = [
  {
    id: 'engineering-consulting',
    image: '/images/service-grid-1.jpg',
    title: 'Engineering Consulting',
    description: 'System architecture, API design, DevOps, and modernization that just works.',
    position: 'left',
  },
  {
    id: 'product-management',
    image: '/images/service-grid-2.jpg',
    title: 'Product Management',
    description: 'Strategy, design, and go-to-market that bring ideas to life.',
    position: 'middle',
  },
  {
    id: 'ai-advanced-analytics',
    image: '/images/service-grid-3.jpg',
    title: 'AI & Advanced Analytics',
    description: 'AI agents, GenAI, and predictive intelligence made practical.',
    position: 'right',
  },
  {
    id: 'cloud-infrastructure',
    image: '/images/service-grid-4.jpg',
    title: 'Cloud & Infrastructure',
    description: 'FinOps, automation, and multi-cloud setups that scale with you.',
    position: 'left',
  },
  {
    id: 'cybersecurity-risk',
    image: '/images/service-grid-5.jpg',
    title: 'Cybersecurity & Risk',
    description: 'Stay safe. Stay compliant. Stay confident.',
    position: 'middle',
  },
  {
    id: 'talent-solutions',
    image: '/images/service-grid-6.jpg',
    title: 'Talent Solutions',
    description: 'Plug-and-play tech teams on demand. (Team As service)',
    position: 'right',
  },
];

const detailSectionMap: { [key: string]: string } = {
  'engineering-consulting': 'engineering-consulting',
  'product-management': 'product-management',
  'ai-advanced-analytics': 'ai-solutions',
  'cloud-infrastructure': 'business-process-optimization',
  'cybersecurity-risk': 'cybersecurity-risk',
  'talent-solutions': 'talent-solutions',
};

export default function ServicesGrid() {
  const getCardVariants = (position: string) => {
    switch (position) {
      case 'left':
        return cardLeftVariants;
      case 'middle':
        return cardMiddleVariants;
      case 'right':
        return cardRightVariants;
      default:
        return cardLeftVariants;
    }
  };

  const handleCardClick = (serviceId: string) => {
    const detailId = detailSectionMap[serviceId];
    const element = document.getElementById(detailId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              image={service.image}
              title={service.title}
              description={service.description}
              position={service.position as 'left' | 'middle' | 'right'}
              cardVariants={getCardVariants(service.position)}
              onReadMore={() => handleCardClick(service.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
