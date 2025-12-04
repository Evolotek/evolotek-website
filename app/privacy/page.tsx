'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { fadeInUpVariants } from '@/app/utils/animations';

export default function PrivacyPolicyPage() {
  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'information-collection', title: 'Information We Collect' },
    { id: 'usage', title: 'How We Use Information' },
    { id: 'cookies', title: 'Cookies & Tracking' },
    { id: 'third-party', title: 'Third-Party Services' },
    { id: 'data-security', title: 'Data Security' },
    { id: 'user-rights', title: 'Your Rights' },
    { id: 'contact', title: 'Contact Us' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-blue-950 text-white py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            className="mb-4"
          >
            <Link href="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-6">
              <span>Home</span>
              <ChevronRight className="w-4 h-4" />
              <span>Privacy Policy</span>
            </Link>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            className="text-5xl md:text-6xl font-serif font-bold mb-6"
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            className="text-xl text-gray-300 max-w-2xl"
          >
            We respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information.
          </motion.p>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            className="text-gray-400 mt-6"
          >
            Last Updated: November 2025
          </motion.p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* TABLE OF CONTENTS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUpVariants}
            className="lg:col-span-1 sticky top-20 h-fit"
          >
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Contents</h3>
              <ul className="space-y-3">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className="text-sm text-gray-600 hover:text-purple-600 transition-colors text-left"
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* CONTENT */}
          <div className="lg:col-span-3 space-y-12">
            {/* INTRODUCTION */}
            <motion.section
              id="introduction"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUpVariants}
              className="bg-white border border-gray-200 rounded-lg p-8"
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Evolotek ("Company," "we," "us," or "our") operates as a reinvention and experience partner, delivering strategy, creativity, data, and AI-powered solutions. This Privacy Policy explains how we collect, use, disclose, and otherwise handle your information when you visit our website, use our services, or interact with our brand.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Your privacy is important to us. We are committed to transparency about our data practices and protecting your personal information in accordance with applicable privacy laws including GDPR, CCPA, and other regulations.
              </p>
            </motion.section>

            {/* INFORMATION COLLECTION */}
            <motion.section
              id="information-collection"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUpVariants}
              className="bg-white border border-gray-200 rounded-lg p-8"
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Information We Collect</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Information You Provide Directly</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Name, email address, phone number, and company information</li>
                    <li>Project details, business requirements, and engagement preferences</li>
                    <li>Contact form submissions and inquiry messages</li>
                    <li>Resume and professional information for career inquiries</li>
                    <li>Payment information processed through secure third-party providers</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Information Collected Automatically</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Device information (browser type, IP address, operating system)</li>
                    <li>Website usage data (pages visited, time spent, clickstream data)</li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>Geographic location information (approximate)</li>
                    <li>Performance metrics and analytics</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Information from Third Parties</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Social media platforms (with your authorization)</li>
                    <li>Business intelligence and marketing partners</li>
                    <li>Public sources for company research</li>
                    <li>Client referrals and recommendations</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* USAGE */}
            <motion.section
              id="usage"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUpVariants}
              className="bg-white border border-gray-200 rounded-lg p-8"
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">How We Use Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Delivering and improving our services and solutions</li>
                <li>Responding to inquiries and providing customer support</li>
                <li>Processing transactions and managing billing relationships</li>
                <li>Sending marketing communications (with consent where required)</li>
                <li>Analyzing website performance and user behavior</li>
                <li>Preventing fraud and ensuring security</li>
                <li>Complying with legal obligations and protecting our rights</li>
                <li>Personalizing your experience and tailoring content recommendations</li>
                <li>Conducting business research and product development</li>
              </ul>
            </motion.section>

            {/* COOKIES */}
            <motion.section
              id="cookies"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUpVariants}
              className="bg-white border border-gray-200 rounded-lg p-8"
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Cookies & Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar technologies to enhance your browsing experience and collect usage data.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                  <p className="text-gray-700">Required for site functionality, authentication, and security.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Analytical Cookies</h3>
                  <p className="text-gray-700">Help us understand how you use our website through tools like Google Analytics.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Marketing Cookies</h3>
                  <p className="text-gray-700">Used for retargeting, personalized advertising, and campaign performance measurement.</p>
                </div>
              </div>
            </motion.section>

            {/* THIRD-PARTY SERVICES */}
            <motion.section
              id="third-party"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUpVariants}
              className="bg-white border border-gray-200 rounded-lg p-8"
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Third-Party Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use trusted third-party service providers to support our operations.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Cloud hosting providers for website and data storage</li>
                <li>Analytics platforms for usage measurement and optimization</li>
                <li>Payment processors for secure transaction handling</li>
                <li>Email service providers for communications</li>
                <li>Marketing automation and CRM platforms</li>
                <li>Social media networks and advertising platforms</li>
              </ul>
            </motion.section>

            {/* DATA SECURITY */}
            <motion.section
              id="data-security"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUpVariants}
              className="bg-white border border-gray-200 rounded-lg p-8"
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement comprehensive technical, administrative, and physical safeguards to protect your personal information.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our security measures include SSL encryption for data transmission, secure password protocols, regular security audits, and employee training on data protection.
              </p>
            </motion.section>

            {/* USER RIGHTS */}
            <motion.section
              id="user-rights"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUpVariants}
              className="bg-white border border-gray-200 rounded-lg p-8"
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Right to Access:</strong> Request a copy of your personal information</li>
                <li><strong>Right to Rectification:</strong> Correct inaccurate information</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your data</li>
                <li><strong>Right to Restrict Processing:</strong> Limit how we use your information</li>
                <li><strong>Right to Data Portability:</strong> Receive your data in a machine-readable format</li>
                <li><strong>Right to Opt-Out:</strong> Unsubscribe from marketing communications</li>
              </ul>
            </motion.section>

            {/* CONTACT */}
            <motion.section
              id="contact"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUpVariants}
              className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-8"
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you have questions about this Privacy Policy, please contact:
              </p>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="text-gray-900 font-semibold">Evolotek Legal Team</p>
                <p className="text-gray-700">Email: <a href="mailto:legal@evolotek.com" className="text-purple-600 hover:text-purple-700">legal@evolotek.com</a></p>
                <p className="text-gray-700 mt-4">Locations: USA • ISRAEL • INDIA</p>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
