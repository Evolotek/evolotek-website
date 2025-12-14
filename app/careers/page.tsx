'use client';

import CareersHero from '@/app/components/careers/CareersHero';
import BenefitsSection from '@/app/components/careers/BenefitsSection';
import JobListings from '@/app/components/careers/JobListings';
import CareersCTA from '@/app/components/careers/CareersCTA';

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <BenefitsSection />
      <JobListings />
      <CareersCTA />
    </>
  );
}
