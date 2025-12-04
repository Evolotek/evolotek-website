'use client';

import ServicesHero from '@/app/components/services/ServicesHero';
import ServicesGrid from '@/app/components/services/ServicesGrid';
import ServiceDetailsSection from '@/app/components/services/ServiceDetailsSection';

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServiceDetailsSection
        id="ai-solutions"
        category="AI Solutions"
        heading="AI That Works — For You."
        description="Not just buzzwords. We build AI that boosts performance, simplifies decisions, and automates what slows you down."
        offerings={[
          'AI Agents for Support, Sales & Ops',
          'Generative AI for Code & Content',
          'Machine Learning & Predictive Intelligence',
          'Decision Intelligence Systems',
        ]}
        imageTopLeft="/images/service-detail-13.jpg"
        imageTopRight="/images/service-detail-14.jpg"
        imageBottom="/images/service-detail-15.jpg"
        layout="left-content"
      />
      <ServiceDetailsSection
        id="engineering-consulting"
        category="Engineering"
        heading="Build What's Next."
        description="We design and ship world-class systems — the kind that scale effortlessly and perform brilliantly."
        offerings={[
          'Cloud-native engineering',
          'API ecosystems',
          'DevOps and CI/CD',
          'Data engineering and analytics',
        ]}
        imageTopLeft="/images/service-detail-1.jpg"
        imageTopRight="/images/service-detail-2.jpg"
        imageBottom="/images/service-detail-3.jpg"
        layout="right-content"
        isDark={true}
      />
      <ServiceDetailsSection
        id="product-management"
        category="Product Management"
        heading="From Idea to Impact."
        description="We help you go from napkin sketch to market-ready product — fast. Strategy, design, validation, and growth, all under one roof."
        offerings={[
          'Product Strategy & Roadmapping',
          'Design Thinking & UX Research',
          'MVP Launch & Product-Led Growth',
        ]}
        imageTopLeft="/images/service-detail-4.jpg"
        imageTopRight="/images/service-detail-5.jpg"
        imageBottom="/images/service-detail-6.jpg"
        layout="left-content"
      />
      <ServiceDetailsSection
        id="cybersecurity-risk"
        category="Cybersecurity & Risk"
        heading="Security, Baked In."
        description="Cyber threats evolve daily. So do we. From risk assessments to compliance automation — we make security proactive, not reactive."
        offerings={[
          'Threat & Risk Assessments',
          'Identity & Access Management',
          'Fraud Detection & Compliance',
        ]}
        imageTopLeft="/images/service-detail-7.jpg"
        imageTopRight="/images/service-detail-8.jpg"
        imageBottom="/images/service-detail-9.jpg"
        layout="right-content"
        isDark={true}
      />
      <ServiceDetailsSection
        id="business-process-optimization"
        category="Business Process Optimization"
        heading="Simplicity Wins."
        description="Eliminate the noise. Automate the boring. Free your teams to focus on what actually matters."
        offerings={[
          'Intelligent Process Automation',
          'ROI & Performance Analytics',
          'Workflow Optimization',
        ]}
        imageTopLeft="/images/service-detail-10.jpg"
        imageTopRight="/images/service-detail-11.jpg"
        imageBottom="/images/service-detail-12.jpg"
        layout="left-content"
      />
      <ServiceDetailsSection
        id="talent-solutions"
        category="Talent Solutions"
        heading="World-Class Teams. On Demand."
        description="Whether you need a full engineering squad or one exceptional developer — we've got your back. Scale fast, without compromise."
        offerings={[
          'Tech Staff Augmentation',
          'Managed Engineering Teams',
          'RPO & Global Recruitment',
        ]}
        imageTopLeft="/images/service-detail-16.jpg"
        imageTopRight="/images/service-detail-17.jpg"
        imageBottom="/images/service-detail-18.jpg"
        layout="right-content"
        isDark={true}
      />
    </>
  );
}
