'use client';

import StartupHero from '@/app/components/startup/StartupHero';
import StartupServices from '@/app/components/startup/StartupServices';
import HowWeWork from '@/app/components/startup/HowWeWork';
import Portfolio from '@/app/components/startup/Portfolio';
import CTASection from '@/app/components/startup/CTASection';

export default function StartupPage() {
  return (
    <>
      <StartupHero />
      <StartupServices />
      <HowWeWork />
      <Portfolio />
      <CTASection />
    </>
  );
}
