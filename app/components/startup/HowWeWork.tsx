'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import styles from '@/app/styles/startup/HowWeWork.module.css';

const dropFromTopVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.175,
    } as const,
  },
};

const descriptionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.15,
      delay: 0.05,
    } as const,
  },
};

const topPhases = [
  'Understand Startup Quos',
  'Build the Right Team',
  'Customer Experience',
  'Identifying Growth Opportunities',
  'Scaling Your Business',
];

const bottomPhases = [
  'Strategy & Consulting',
  'Engineering & Product Development',
  'Business & Operations',
  'Enabling Growth',
];

export default function HowWeWork() {
  const [inView, setInView] = useState(false);
  const [animatedDots, setAnimatedDots] = useState<number[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView) {
          setInView(true);

          // Trigger dot animations sequentially (all 9 dots)
          for (let i = 0; i < 9; i++) {
            setTimeout(() => {
              setAnimatedDots((prev) => [...prev, i]);
            }, 200 + i * 30);
          }

          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => observer.disconnect();
  }, [inView]);

  const dotSpacing = 140;
  const svgWidth = 9 * dotSpacing + 100;
  const centerY = 200;
  const dots = Array.from({ length: 9 }, (_, i) => ({
    x: 50 + i * dotSpacing,
    index: i,
  }));

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
          <h2 className={styles.heading}>How we Work</h2>
        </motion.div>

        <motion.p
          className={styles.description}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={descriptionVariants}
        >
          This roadmap shows Evolotek's end-to-end process—from understanding a startup's needs and building the right product and team, to driving growth, operations, and long-term scaling.
        </motion.p>

        <div ref={wrapperRef} className={styles.timelineWrapper}>
          {/* Top Labels */}
          <div className={styles.topLabelsContainer}>
            {topPhases.map((phase, index) => (
              <div key={`top-${index}`} className={styles.topLabelWrapper}>
                <motion.div
                  className={styles.topLabel}
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    animatedDots.includes(index)
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 10 }
                  }
                  transition={{ duration: 0.5 }}
                >
                  {phase}
                </motion.div>
                <motion.div
                  className={styles.topBar}
                  initial={{ scaleY: 0 }}
                  animate={
                    animatedDots.includes(index)
                      ? { scaleY: 1 }
                      : { scaleY: 0 }
                  }
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              </div>
            ))}
          </div>

          {/* SVG Timeline */}
          <svg
            className={styles.timelineSvg}
            viewBox={`0 0 ${svgWidth} 80`}
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Horizontal dotted line */}
            <line
              x1={dots[0].x}
              y1="40"
              x2={dots[8].x}
              y2="40"
              stroke="#FF1493"
              strokeWidth="2"
              strokeDasharray="5,5"
              opacity={inView ? 1 : 0}
              style={{
                transition: 'opacity 0.5s ease-out',
              }}
            />

            {/* Dots */}
            {dots.map((dot) => (
              <motion.circle
                key={dot.index}
                cx={dot.x}
                cy="40"
                r="8"
                fill="#000000"
                stroke="#FF1493"
                strokeWidth="3"
                initial={{ scale: 0, opacity: 0 }}
                animate={
                  animatedDots.includes(dot.index)
                    ? { scale: [0, 1.2, 1], opacity: 1 }
                    : { scale: 0, opacity: 0 }
                }
                transition={{
                  duration: 0.1,
                  ease: 'easeOut',
                }}
              />
            ))}

            {/* Vertical divider after dot 6 */}
            <line
              x1={dots[5].x + dotSpacing / 2}
              y1="-100"
              x2={dots[5].x + dotSpacing / 2}
              y2="180"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeDasharray="5,5"
              opacity={inView ? 0.5 : 0}
              style={{
                transition: 'opacity 0.6s ease-out',
                transitionDelay: '1.5s',
              }}
            />
          </svg>

          {/* Bottom Labels */}
          <div className={styles.bottomLabelsContainer}>
            <div style={{ flex: 1 }} />
            {bottomPhases.map((phase, index) => (
              <div key={`bottom-${index}`} className={styles.bottomLabelWrapper}>
                <motion.div
                  className={styles.bottomBar}
                  initial={{ scaleY: 0 }}
                  animate={
                    animatedDots.includes(index + 1)
                      ? { scaleY: 1 }
                      : { scaleY: 0 }
                  }
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
                <motion.div
                  className={styles.bottomLabel}
                  initial={{ opacity: 0, y: -10 }}
                  animate={
                    animatedDots.includes(index + 1)
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: -10 }
                  }
                  transition={{ duration: 0.5 }}
                >
                  {phase}
                </motion.div>
              </div>
            ))}
          </div>

          {/* Phase Labels */}
          <motion.div
            className={styles.phaseLabelsContainer}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            <div className={`${styles.phaseLabel} ${styles.phaseLeft}`}>
              Phase I - Product Development
            </div>
            <div className={`${styles.phaseLabel} ${styles.phaseRight}`}>
              Phase II - Post Product
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}