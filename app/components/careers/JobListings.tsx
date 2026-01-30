'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUpVariants } from '@/app/utils/animations';
import ApplicationModal from './ApplicationModal';
import styles from '@/app/styles/careers/JobListings.module.css';

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  fullDescription?: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  benefits: string[];
}

const jobs: Job[] = [
  {
    id: 1,
    title: 'TIBCO Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Contract',
    description: 'Design and deliver large-scale integration solutions using TIBCO Product Suite including BW5, BW6, BWCE, BPM/iProcess, and EMS.',
    responsibilities: [
      'Design and deliver large-scale integration solutions on multiple platforms including data analysis, design, workflow modeling, and integration',
      'Develop and maintain TIBCO Business Works applications in both BW5 and BW6 versions',
      'Implement SOA concepts by designing and developing Web Services using WSDL, SOAP, and Service palettes',
      'Create and invoke REST services using TIBCO BW5 and BW6',
      'Build complex integrations using Business Works and EMS with publish-subscribe patterns',
      'Deploy TIBCO applications in UNIX and Linux environments',
      'Implement security features using TIBCO BW including web service security',
      'Work with databases, creating SQL queries and PL/SQL for integration requirements',
    ],
    requirements: [
      '6-8 years of experience with TIBCO Product Suite (TIBCO BPM/iProcess, Business Works 5.X and 6.X, EMS)',
      'Strong technical developer background capable of handling BW5, BW6, and BWCE applications',
      'Expertise in XML, XSD, XSLT, and XPath',
      'Strong experience with SOAP/HTTP, SOAP/JMS, and REST services',
      'Experience with messaging standards (Active MQ, EMS, JMS)',
      'Proficiency in implementing integration patterns (Request/Reply, Pub/Sub, Web Services)',
      'Strong working experience with complex XML schema transformations',
      'Experience with TIBCO Adapters (ADB/FILE/FTP 6.0+) and EMS (5.1+)',
      'Experience with deployment in UNIX/Linux environments',
    ],
    niceToHave: [
      'Knowledge of Java and J2EE technologies (Servlets, JSP, STRUTS, JDBC)',
      'Experience with iProcess integration using RMI and IAP JMS',
      'Understanding of Object-Oriented Design Principles and Test-Driven Development',
      'Experience with Agile/Scrum delivery methodology',
      'Experience setting up new environments using TIBCO suite of products',
    ],
    benefits: [
      '6-month contract with potential for extension',
      'Fully remote position',
      'Work timings: 12:00 PM - 9:00 PM IST',
      'Opportunity to work with Guardian (client)',
    ],
  },
  {
    id: 2,
    title: 'Senior Salesforce Administrator',
    department: 'Engineering',
    location: 'Remote',
    type: 'Night Shift (US Time Zone)',
    description: 'As a Senior Salesforce Administrator you will be responsible for the design, implementation, and maintenance of our Salesforce platform to support our business processes and objectives. You will work closely with cross-functional teams to gather requirements, develop solutions, and ensure the successful deployment and adoption of Salesforce functionalities. You will work with Sales, Service, and Marketing Cloud products in addition to Field Service Lightning.',
    fullDescription: `Job Type: Remote | Night Shift (US Time Zone)

Key Responsibilities:
• Design, configure, and customize Salesforce to support business requirements.
• Collaborate with stakeholders to gather and analyze requirements, translating them into technical solutions within Salesforce.
• Implement and maintain custom objects, fields, flows, validation rules, and other Salesforce components as needed.
• Configure and optimize Field Service Lightning to streamline service operations, including scheduling, dispatching, and mobile functionality.
• Develop and maintain integrations between Salesforce and other systems to enable seamless data flow and process automation.
• Provide ongoing support and troubleshooting for Salesforce users, addressing issues, and implementing enhancements as needed.
• Drive user adoption through training sessions, documentation, and ongoing support to maximize the value of Salesforce investments.
• Stay updated on Salesforce best practices, new features, and industry trends, recommending improvements and optimizations as appropriate.
• Collaborate with Salesforce developers, architects, and other team members to deliver scalable and efficient solutions.
• Management of integrated applications and third-party applications including Conga, Own, Think, and Convoso.

Required Qualifications:
• Certified Salesforce Administrator
• A minimum of 3 to 5 years of Salesforce experience with Sales and Service Cloud.
• You will be encouraged to attend trade shows and conferences, therefore you should be able to travel 10% of the time

Desirable Qualifications:
• A Bachelor's or post graduate degree, or qualification.
• Additional Salesforce certifications e.g. Advanced Administrator, Platform App Builder, Platform Developer, etc.

Required Skills:
• Strong understanding of Salesforce platform capabilities, data model, and security model.
• Proficiency in Salesforce configuration, customization, and administration.
• Experience with Field Service Lightning setup, configuration, and optimization for service operations.
• Excellent analytical, problem-solving, and communication skills, with the ability to collaborate effectively with cross-functional teams.
• Ability to prioritize and manage multiple tasks in a fast-paced environment, with a strong attention to detail.
• Proficiency in PowerPoint and Excel
• Strong analytical and conceptual skills, including technical writing for a non-technical audience

Desirable Skills:
• Knowledge of CPQ concepts, including product configuration, pricing rules, and quote generation.
• Knowledge of APEX, Force.com, SOQL, Triggers and Visual Force Page development.
• Experience with Agile development methodologies
• Active in the Salesforce community
• Demonstrate interest in professional development`,
    responsibilities: [
      'Design, configure, and customize Salesforce to support business requirements',
      'Collaborate with stakeholders to gather and analyze requirements, translating them into technical solutions within Salesforce',
      'Implement and maintain custom objects, fields, flows, validation rules, and other Salesforce components as needed',
      'Configure and optimize Field Service Lightning to streamline service operations, including scheduling, dispatching, and mobile functionality',
      'Develop and maintain integrations between Salesforce and other systems to enable seamless data flow and process automation',
      'Provide ongoing support and troubleshooting for Salesforce users, addressing issues, and implementing enhancements as needed',
      'Drive user adoption through training sessions, documentation, and ongoing support to maximize the value of Salesforce investments',
      'Stay updated on Salesforce best practices, new features, and industry trends, recommending improvements and optimizations as appropriate',
      'Collaborate with Salesforce developers, architects, and other team members to deliver scalable and efficient solutions',
      'Management of integrated applications and third-party applications including Conga, Own, Think, and Convoso',
    ],
    requirements: [
      'Certified Salesforce Administrator',
      'A minimum of 3 to 5 years of Salesforce experience with Sales and Service Cloud',
      'Able to travel 10% of the time to attend trade shows and conferences',
      'Strong understanding of Salesforce platform capabilities, data model, and security model',
      'Proficiency in Salesforce configuration, customization, and administration',
      'Experience with Field Service Lightning setup, configuration, and optimization for service operations',
      'Excellent analytical, problem-solving, and communication skills, with the ability to collaborate effectively with cross-functional teams',
      'Ability to prioritize and manage multiple tasks in a fast-paced environment, with a strong attention to detail',
      'Proficiency in PowerPoint and Excel',
      'Strong analytical and conceptual skills, including technical writing for a non-technical audience',
    ],
    niceToHave: [
      'A Bachelor\'s or post graduate degree, or qualification',
      'Additional Salesforce certifications e.g. Advanced Administrator, Platform App Builder, Platform Developer, etc.',
      'Knowledge of CPQ concepts, including product configuration, pricing rules, and quote generation',
      'Knowledge of APEX, Force.com, SOQL, Triggers and Visual Force Page development',
      'Experience with Agile development methodologies',
      'Active in the Salesforce community',
      'Demonstrate interest in professional development',
    ],
    benefits: [
      'Fully remote position',
      'Night shift working with US time zone',
      'Opportunity to work with cross-functional teams',
      'Professional development opportunities including trade shows and conferences',
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
    e.preventDefault();
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

                  <p className={styles.jobDescription}>
                    <span className={styles.jobDescriptionFont}>{job.description}</span>
                  </p>

                  {expandedJobId === job.id && (
                    <div className={styles.expandedContent}>
                      {job.fullDescription ? (
                        <div className={styles.fullDescription} style={{ whiteSpace: 'pre-wrap' }}>
                          <span className={styles.fullDescription}>{job.fullDescription}</span>
                        </div>
                      ) : (
                        <>
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
                        </>
                      )}
                    </div>
                  )}

                  <button 
                    className={styles.applyLink}
                    onClick={(e) => handleApplyClick(e, job.id, job.title)}
                    type="button"
                  >
                    Apply Now <span>→</span>
                  </button>
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