'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { fadeInUpVariants } from '@/app/utils/animations';

export default function TermsOfUsePage() {
  const sections = [
    { id: 'acceptance', title: 'Acceptance of Terms' },
    { id: 'use-license', title: 'Use License' },
    { id: 'restrictions', title: 'Restrictions' },
    { id: 'intellectual-property', title: 'Intellectual Property' },
    { id: 'disclaimers', title: 'Disclaimers' },
    { id: 'limitations', title: 'Limitations of Liability' },
    { id: 'governing-law', title: 'Governing Law' },
    { id: 'contact', title: 'Contact Information' },
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
              <span>Terms of Use</span>
            </Link>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            className="text-5xl md:text-6xl font-serif font-bold mb-6"
          >
            Terms of Use
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            className="text-xl text-gray-300 max-w-2xl"
          >
            These Terms of Use govern your access to and use of Evolotek's website, services, and any other offerings. By accessing our site, you agree to comply with these terms.
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
            {/* ACCEPTANCE */}
            <motion.section
              id="acceptance"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUpVariants}
              className="bg-white border border-gray-200 rounded-lg p-8"
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using the Evolotek website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Evolotek reserves the right to modify these terms at any time without notice. Your continued use of the website following the posting of revised terms means you accept and agree to the changes. We encourage you to review these terms periodically.
              </p>
            </motion.section>

            {/* USE LICENSE */}
            <motion.section
              id="use-license"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUpVariants}
              className="bg-white border border-gray-200 rounded-lg p-8"
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Use License</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Evolotek grants you a limited, non-exclusive, revocable license to access and use our website and services for personal and business purposes in accordance with these terms. This license does not include the right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Reproduce, distribute, or transmit content without permission</li>
                <li>Modify, adapt, translate, or create derivative works</li>
                <li>Reverse engineer, decompile, or disassemble any software</li>
                <li>Rent, lease, or lend any materials</li>
                <li>Remove or alter any proprietary notices or labels</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                This license is personal to you and is not transferable. Any unauthorized use terminates the permission or license granted by Evolotek.
              </p>
            </motion.section>

            {/* RESTRICTIONS */}
            <motion.section
              id="restrictions"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUpVariants}
              className="bg-white border border-gray-200 rounded-lg p-8"
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Restrictions on Use</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree not to access or use the website for any purpose other than that for which Evolotek makes the website available. The website may not be used in connection with any commercial endeavors except those specifically endorsed or approved by Evolotek.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Prohibited behavior includes:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Harassing, intimidating, threatening, or abusing any person</li>
                <li>Making false or misleading statements or representations</li>
                <li>Uploading viruses, malware, or other malicious code</li>
                <li>Spamming, phishing, or attempting unauthorized access</li>
                <li>Collecting or tracking personal information without consent</li>
                <li>Interfering with the operation of the website or servers</li>
                <li>Violating any applicable laws or regulations</li>
              </ul>
            </motion.section>

            {/* INTELLECTUAL PROPERTY */}
            <motion.section
              id="intellectual-property"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUpVariants}
              className="bg-white border border-gray-200 rounded-lg p-8"
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Intellectual Property Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content on the Evolotek website, including text, graphics, logos, images, audio clips, digital downloads, and data compilations, is the property of Evolotek or its content suppliers and protected by international copyright laws.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Trademarks, logos, and service marks displayed on the website are the property of Evolotek and other parties. You are not permitted to use any of these trademarks, logos, or service marks without the express written consent of Evolotek or the respective owner.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Any content you submit to Evolotek through contact forms, inquiries, or other channels grants Evolotek a non-exclusive, royalty-free, perpetual license to use, reproduce, modify, and distribute such content.
              </p>
            </motion.section>

            {/* DISCLAIMERS */}
            <motion.section
              id="disclaimers"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUpVariants}
              className="bg-white border border-gray-200 rounded-lg p-8"
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Disclaimers</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                THE WEBSITE AND SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. EVOLOTEK DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                EVOLOTEK DOES NOT WARRANT THAT:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>The website will be uninterrupted, secure, or error-free</li>
                <li>Defects will be corrected</li>
                <li>The website is free from viruses or harmful components</li>
                <li>Results obtained through the website will be accurate or reliable</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Some jurisdictions do not allow disclaimers of implied warranties, so the above disclaimer may not apply to you.
              </p>
            </motion.section>

            {/* LIMITATIONS */}
            <motion.section
              id="limitations"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUpVariants}
              className="bg-white border border-gray-200 rounded-lg p-8"
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Limitations of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                IN NO EVENT SHALL EVOLOTEK, ITS DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                IN NO CASE SHALL EVOLOTEK'S TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES, AND CAUSES OF ACTION EXCEED THE AMOUNT YOU HAVE PAID TO EVOLOTEK, IF ANY.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Some jurisdictions do not allow the limitation or exclusion of liability for incidental or consequential damages, so the above limitation may not apply to you. Your sole remedy for dissatisfaction with the website or services is to stop using them.
              </p>
            </motion.section>

            {/* GOVERNING LAW */}
            <motion.section
              id="governing-law"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUpVariants}
              className="bg-white border border-gray-200 rounded-lg p-8"
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Governing Law & Jurisdiction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms of Use are governed by and construed in accordance with the laws of the United States and the State of New York, without regard to its conflict of law provisions. You agree that any legal action or proceeding relating to your access to or use of the website shall be brought exclusively in the courts located in New York.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You consent to the jurisdiction of such courts and waive any objection based on improper venue or inconvenient forum. If any provision of these terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
              </p>
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
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you have any questions about these Terms of Use, please contact us:
              </p>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="text-gray-900 font-semibold">Evolotek Department</p>
                <p className="text-gray-700">Email: <a href="mailto:info@evolotek.ai" className="text-purple-600 hover:text-purple-700">info@evolotek.ai</a></p>
                <p className="text-gray-700 mt-4">Global Headquarters</p>
                <p className="text-gray-700">USA • INDIA</p>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
