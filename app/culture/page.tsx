'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Zap, Users, BookOpen, CheckCircle, MessageSquare, Wind,
  Search, Palette, Code, Send, Headphones, Award, Share2, Lightbulb,
  ArrowRight
} from 'lucide-react';
import { fadeInUpVariants } from '@/app/utils/animations';
import {
  values,
  principles,
  processPhases,
  growthCategories,
  metrics,
  workCultureQuotes,
} from '@/lib/cultureData';
import styles from '@/app/styles/culture/CulturePage.module.css';

const iconMap: { [key: string]: React.ReactNode } = {
  Zap: <Zap className="w-8 h-8" />,
  Users: <Users className="w-8 h-8" />,
  BookOpen: <BookOpen className="w-8 h-8" />,
  CheckCircle: <CheckCircle className="w-8 h-8" />,
  MessageSquare: <MessageSquare className="w-8 h-8" />,
  Wind: <Wind className="w-8 h-8" />,
  Search: <Search className="w-8 h-8" />,
  Palette: <Palette className="w-8 h-8" />,
  Code: <Code className="w-8 h-8" />,
  Send: <Send className="w-8 h-8" />,
  Headphones: <Headphones className="w-8 h-8" />,
  Award: <Award className="w-8 h-8" />,
  Share2: <Share2 className="w-8 h-8" />,
  Lightbulb: <Lightbulb className="w-8 h-8" />,
};

export default function CulturePage() {
  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <motion.h1
            className={styles.heroHeading}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariants}
            viewport={{ once: true, amount: 0.3 }}
          >
            Building Tomorrow's Products Today
          </motion.h1>

          <motion.p
            className={styles.heroDescription}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariants}
            viewport={{ once: true, amount: 0.3 }}
          >
            We craft digital experiences that push boundaries. From concept to launch, we partner with forward-thinking teams to build products that matter.
          </motion.p>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.container}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            variants={fadeInUpVariants}
          >
            <h2 className={styles.sectionTitle}>What We Believe</h2>
            <div className={styles.titleUnderline} />
          </motion.div>

          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
                variants={fadeInUpVariants}
              >
                <div className={styles.valueCard}>
                  <div className={styles.valueIcon}>
                    {iconMap[value.icon]}
                  </div>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDescription}>{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH SECTION */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            variants={fadeInUpVariants}
          >
            <h2 className={styles.sectionTitle}>Our Approach</h2>
            <div className={styles.titleUnderline} />
          </motion.div>

          <div style={{ marginTop: '60px' }}>
            {principles.map((principle, index) => {
              // Completely new Pexels photo IDs - not used elsewhere on the website
              const photoIds = ['3808517', '3962285', '3945683', '3808604'];
              const photoId = photoIds[index] || photoIds[0];
              
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={index}
                  variants={fadeInUpVariants}
                  className={`${styles.principleItem} ${index % 2 === 1 ? styles.reverse : ''}`}
                >
                  <div>
                    <div className={styles.principleNumber}>{principle.number}</div>
                    <h3 className={styles.principleTitle}>{principle.title}</h3>
                    <p className={styles.principleDescription}>{principle.description}</p>
                  </div>
                  <div className={styles.principleImage}>
                    <Image
                      src={principle.image || 'https://images.pexels.com/photos/3552520/pexels-photo-3552520.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'}
                      alt={`${principle.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                      className={styles.principleImageImg}
                      priority={index === 0}
                      quality={85}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DESIGN PHILOSOPHY SECTION */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.container}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            variants={fadeInUpVariants}
          >
            <h2 className={styles.sectionTitle}>Product Development Philosophy</h2>
            <div className={styles.titleUnderline} />
          </motion.div>

          <motion.p
            className={styles.sectionDescription}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
            variants={fadeInUpVariants}
          >
            From initial concept to post-launch support, we're committed to end-to-end excellence. Every phase builds on the last, ensuring your product isn't just built—it's crafted.
          </motion.p>

          <div className={styles.processGrid}>
            {processPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
                variants={fadeInUpVariants}
              >
                <div className={styles.processCard}>
                  <div className={styles.processIcon}>
                    {iconMap[phase.icon]}
                  </div>
                  <div className={styles.processPhase}>{phase.phase}</div>
                  <p className={styles.processDescription}>{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GROWTH & LEARNING SECTION */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            variants={fadeInUpVariants}
          >
            <h2 className={styles.sectionTitle}>Continuous Evolution</h2>
            <div className={styles.titleUnderline} />
          </motion.div>

          <motion.p
            className={styles.sectionDescription}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
            variants={fadeInUpVariants}
          >
            Growth is woven into everything we do. We invest in our people, nurture curiosity, and create space for innovation at every level.
          </motion.p>

          <div className={styles.growthGrid}>
            {growthCategories.map((category, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
                variants={fadeInUpVariants}
              >
                <div className={styles.growthCard}>
                  <div className={styles.growthIcon}>
                    {iconMap[category.icon]}
                  </div>
                  <h3 className={styles.growthCategory}>{category.category}</h3>
                  <ul className={styles.growthItems}>
                    {category.items.map((item, i) => (
                      <li key={i} className={styles.growthItem}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK CULTURE SECTION */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.container}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            variants={fadeInUpVariants}
          >
            <h2 className={styles.sectionTitle}>How We Collaborate</h2>
            <div className={styles.titleUnderline} />
          </motion.div>

          <div className={styles.quotesContainer}>
            {workCultureQuotes.map((quote, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
                variants={fadeInUpVariants}
              >
                <div className={styles.quoteCard}>
                  <p className={styles.quote}>"{quote}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            variants={fadeInUpVariants}
          >
            <h2 className={styles.sectionTitle}>Building Products That Matter</h2>
            <div className={styles.titleUnderline} />
          </motion.div>

          <motion.p
            className={styles.sectionDescription}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
            variants={fadeInUpVariants}
          >
            Impact isn't measured in buzz. It's measured in reliability, user trust, and long-term value. Here's what our commitment looks like.
          </motion.p>

          <div className={styles.metricsGrid}>
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
                variants={fadeInUpVariants}
              >
                <div className={styles.metricCard}>
                  <div className={styles.metricValue}>{metric.value}</div>
                  <p className={styles.metricLabel}>{metric.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.container}>
          <motion.div
            className={styles.ctaContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            variants={fadeInUpVariants}
          >
            <h2 className={styles.ctaHeading}>Join Our Journey</h2>

            <motion.p
              className={styles.ctaDescription}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={1}
              variants={fadeInUpVariants}
            >
              We're always looking for talented, curious people who want to make an impact. If our values resonate with you, let's talk.
            </motion.p>

            <motion.div
              className={styles.ctaButtons}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={2}
              variants={fadeInUpVariants}
            >
              <Link href="/careers" className={`${styles.ctaButton} ${styles.ctaButtonPrimary}`}>
                Explore Careers
                <ArrowRight className="w-5 h-5" />
              </Link>

            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
