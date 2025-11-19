'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUpVariants } from '@/app/utils/animations';
import ApplicationModal from './ApplicationModal';
import styles from '@/app/styles/careers/JobListings.module.css';

const jobs = [
  {
    id: 1,
    title: 'Senior Full Stack Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Build scalable systems and APIs. Work with React, Node.js, and cloud infrastructure.',
    responsibilities: [
      'Design and develop scalable web applications and APIs',
      'Collaborate with product and design teams on feature requirements',
      'Write clean, maintainable code with comprehensive test coverage',
      'Mentor junior engineers and conduct thorough code reviews',
      'Optimize application performance and user experience',
    ],
    requirements: [
      '5+ years of full-stack development experience',
      'Expert proficiency in React, Node.js, and TypeScript',
      'Strong experience with cloud platforms (AWS/GCP)',
      'Deep understanding of system design and architecture',
    ],
    niceToHave: [
      'Experience with AI/ML integration',
      'Open source contributions',
      'Startup or scale-up experience',
    ],
    benefits: [
      'Competitive salary + equity',
      'Flexible remote work arrangement',
      'Comprehensive health, dental, and vision coverage',
      'Annual learning & development budget',
    ],
  },
  {
    id: 2,
    title: 'Product Manager',
    department: 'Product',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'Drive product strategy and vision. Lead cross-functional teams to ship great products.',
    responsibilities: [
      'Define product vision, strategy, and roadmap',
      'Lead cross-functional teams through product development',
      'Conduct user research and gather market insights',
      'Make data-driven decisions on feature prioritization',
      'Launch and iterate on products based on user feedback',
    ],
    requirements: [
      '4+ years of product management experience',
      'Proven track record of shipping successful products',
      'Strong communication and leadership skills',
      'Proficiency with analytics and data interpretation',
    ],
    niceToHave: [
      'Experience in B2B SaaS products',
      'Knowledge of AI/ML applications',
      'Technical background or computer science degree',
    ],
    benefits: [
      'Competitive salary + equity',
      'Remote-first culture',
      'Health insurance + wellness programs',
      'Conference budget and professional development',
    ],
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    description: 'Create beautiful, intuitive user experiences. Design for web and mobile platforms.',
    responsibilities: [
      'Design user interfaces for web and mobile applications',
      'Conduct user research and usability testing',
      'Create wireframes, prototypes, and design systems',
      'Collaborate with engineers on implementation',
      'Iterate on designs based on user feedback and analytics',
    ],
    requirements: [
      '3+ years of UI/UX design experience',
      'Mastery of design tools (Figma, Adobe XD, etc.)',
      'Strong portfolio demonstrating design work',
      'Understanding of design systems and component libraries',
    ],
    niceToHave: [
      'Experience with design operations',
      'Knowledge of accessibility (WCAG) standards',
      'Front-end development knowledge',
    ],
    benefits: [
      'Competitive salary + equity',
      'Fully remote position',
      'Creative freedom and autonomy',
      'Design tools and software budget',
    ],
  },
  {
    id: 4,
    title: 'Data Engineer',
    department: 'Engineering',
    location: 'Austin, TX',
    type: 'Full-time',
    description: 'Build data pipelines and analytics infrastructure. Work with Python, Spark, and AWS.',
    responsibilities: [
      'Design and build scalable data pipelines',
      'Develop ETL processes and data warehouses',
      'Optimize data storage and retrieval systems',
      'Support analytics and data science teams',
      'Monitor and maintain data infrastructure',
    ],
    requirements: [
      '4+ years of data engineering experience',
      'Proficiency in Python and SQL',
      'Experience with Apache Spark and big data technologies',
      'Knowledge of cloud data platforms (Snowflake, BigQuery, etc.)',
    ],
    niceToHave: [
      'Experience with real-time data processing',
      'Knowledge of machine learning workflows',
      'Experience with Kubernetes and containerization',
    ],
    benefits: [
      'Competitive salary + equity',
      'Flexible work arrangements',
      'Comprehensive health benefits',
      'Technical learning budget',
    ],
  },
  {
    id: 5,
    title: 'Design System Lead',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build and maintain design systems. Collaborate with engineers and product teams.',
    responsibilities: [
      'Develop and maintain comprehensive design system',
      'Create component libraries and documentation',
      'Establish design standards and guidelines',
      'Partner with engineering on implementation',
      'Drive design consistency across products',
    ],
    requirements: [
      '5+ years of design system experience',
      'Expert in Figma or similar design tools',
      'Strong understanding of component-based design',
      'Experience managing design systems at scale',
    ],
    niceToHave: [
      'Front-end development experience',
      'Experience with design tokens',
      'Open source design system contributions',
    ],
    benefits: [
      'Competitive salary + equity',
      'Remote-first opportunity',
      'Professional development budget',
      'Design tool subscriptions covered',
    ],
  },
  {
    id: 6,
    title: 'Analytics Engineer',
    department: 'Analytics',
    location: 'Seattle, WA',
    type: 'Full-time',
    description: 'Create data models and dashboards. Provide insights to drive business decisions.',
    responsibilities: [
      'Build data models and transformation logic',
      'Create dashboards and reporting infrastructure',
      'Develop self-service analytics capabilities',
      'Collaborate with stakeholders on data needs',
      'Document data models and provide training',
    ],
    requirements: [
      '3+ years of analytics engineering experience',
      'Expertise in SQL and data modeling',
      'Experience with dbt or similar transformation tools',
      'Proficiency with BI tools (Looker, Tableau, etc.)',
    ],
    niceToHave: [
      'Python or R programming skills',
      'Experience with cloud data warehouses',
      'Knowledge of data governance',
    ],
    benefits: [
      'Competitive salary + equity',
      'Flexible work schedule',
      'Health, dental, and vision insurance',
      'Professional development opportunities',
    ],
  },
];

const departments = ['All', 'Engineering', 'Product', 'Design', 'Analytics'];

export default function JobListings() {
  const [selectedDept, setSelectedDept] = useState('All');
  const [expandedJobId, setExpandedJobId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<{ id: number; title: string } | null>(null);

  const filteredJobs = selectedDept === 'All' 
    ? jobs 
    : jobs.filter(job => job.department === selectedDept);

  const handleCardClick = (jobId: number) => {
    setExpandedJobId(expandedJobId === jobId ? null : jobId);
  };

  const handleApplyClick = (e: React.MouseEvent, jobId: number, jobTitle: string) => {
    e.stopPropagation();
    setSelectedJob({ id: jobId, title: jobTitle });
    setIsModalOpen(true);
  };

  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div
            className={styles.filterButtons}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariants}
            viewport={{ once: true, amount: 0.2 }}
          >
            {departments.map((dept) => (
              <button
                key={dept}
                className={`${styles.filterBtn} ${selectedDept === dept ? styles.active : ''}`}
                onClick={() => setSelectedDept(dept)}
              >
                {dept}
              </button>
            ))}
          </motion.div>

          {filteredJobs.length > 0 ? (
            <div className={styles.grid}>
              {filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  className={`${styles.jobCard} ${expandedJobId === job.id ? styles.expanded : ''}`}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInUpVariants}
                  viewport={{ once: true, amount: 0.2 }}
                  onClick={() => handleCardClick(job.id)}
                >
                  <div className={styles.header}>
                    <div className={styles.titleWrapper}>
                      <h3 className={styles.jobTitle}>{job.title}</h3>
                      <span className={styles.chevron} aria-hidden="true">▼</span>
                    </div>
                    <span className={styles.departmentTag}>{job.department}</span>
                  </div>

                  <div className={styles.meta}>
                    <span className={styles.location}>📍 {job.location}</span>
                    <span className={styles.type}>{job.type}</span>
                  </div>

                  <p className={styles.jobDescription}>{job.description}</p>

                  {expandedJobId === job.id && (
                    <div className={styles.expandedContent}>
                      <div className={styles.section}>
                        <h4 className={styles.sectionHeading}>What You'll Do</h4>
                        <ul className={styles.list}>
                          {job.responsibilities.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.section}>
                        <h4 className={styles.sectionHeading}>What We're Looking For</h4>
                        <ul className={styles.list}>
                          {job.requirements.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      {job.niceToHave && job.niceToHave.length > 0 && (
                        <div className={styles.section}>
                          <h4 className={styles.sectionHeading}>Nice to Have</h4>
                          <ul className={styles.list}>
                            {job.niceToHave.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className={styles.section}>
                        <h4 className={styles.sectionHeading}>What We Offer</h4>
                        <ul className={styles.list}>
                          {job.benefits.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  <a 
                    href="#" 
                    className={styles.applyLink}
                    onClick={(e) => handleApplyClick(e, job.id, job.title)}
                  >
                    Apply Now <span>→</span>
                  </a>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              className={styles.emptyState}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUpVariants}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className={styles.emptyStateText}>
                No positions found in {selectedDept}. Try another department!
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <ApplicationModal
        isOpen={isModalOpen}
        jobId={selectedJob?.id}
        jobTitle={selectedJob?.title || ''}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
