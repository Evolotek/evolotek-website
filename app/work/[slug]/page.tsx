import { getProject, getAllProjectSlugs } from '@/lib/projectsData';
import WorkDetailHero from '@/app/components/work/WorkDetailHero';
import ProjectMetadata from '@/app/components/work/ProjectMetadata';
import ContentSection from '@/app/components/work/ContentSection';
import ResultsSection from '@/app/components/work/ResultsSection';
import { notFound } from 'next/navigation';
import { use } from 'react';
import type { Metadata } from 'next';

interface WorkDetailPageProps {
  params: Promise<{ 
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: WorkDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = getProject(resolvedParams.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Evolotek Work`,
    description: project.tagline,
    openGraph: {
      title: project.title,
      description: project.tagline,
      images: [project.coverImage],
    },
  };
}

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  const resolvedParams = use(params);
  const project = getProject(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <WorkDetailHero
        client={project.client}
        title={project.title}
        tagline={project.tagline}
        coverImage={project.coverImage}
        style="clean"
      />

      <ProjectMetadata
        services={project.services}
        sectors={project.sectors}
        theme={project.theme}
      />


      {/* Custom section for LongHome project */}
      {project.slug === 'longhome' ? (
        <>
          <ContentSection
            heading="AI-Powered Accounts Payable Automation for LongHome"
            content={`Evolotek partnered with LongHome to modernize their Accounts Payable operations using AI-driven automation, intelligent document processing, and workflow orchestration.\nThe goal was simple: eliminate manual effort, reduce processing time, and improve financial accuracy at scale.`}
            layout="text-only"
            theme={project.theme}
          />
          <ContentSection
            heading="The Challenge"
            content={`LongHome’s AP process relied heavily on:\n- Manual invoice data entry\n- Email-based approvals and fragmented communication\n- Slow reconciliation cycles\n- High risk of human error and duplicate payments\n\nThis created operational delays, increased costs, and limited finance team productivity.`}
            layout="text-only"
            theme={project.theme}
          />
          <ContentSection
            heading="The Evolotek Solution"
            content={`We implemented an end-to-end AI automation framework that included:\n- AI Invoice Capture & Data Extraction: Automated reading of invoices from PDFs, emails, and scanned documents with high accuracy.\n- Smart Validation & Duplicate Detection: AI-based checks to prevent payment errors and ensure compliance.\n- Automated Approval Workflows: Role-based routing, reminders, and real-time visibility across stakeholders.\n- ERP-Ready Integration: Seamless synchronization with LongHome’s financial systems for faster reconciliation.`}
            layout="text-only"
            theme={project.theme}
          />
          <ContentSection
            heading="Measurable Business Impact"
            content={`Our automation delivered significant operational improvements:\n- 70–85% reduction in manual AP effort\n- 3× faster invoice processing time\n- Near-zero duplicate payment risk\n- Improved audit readiness and financial visibility\n- Finance team refocused on strategic work instead of data entry\n\nResult: Lower operational cost, faster close cycles, and scalable finance operations.`}
            layout="text-only"
            theme={project.theme}
          />
          <ContentSection
            heading="Why Evolotek"
            content={`Evolotek builds real-world AI automation that delivers measurable ROI, not just prototypes.\n- Deep expertise in finance workflow automation\n- Rapid deployment with enterprise-grade security\n- Proven impact across mid-market and growth companies\n- Focus on people-first productivity and scalable growth`}
            layout="text-only"
            theme={project.theme}
          />
          <ContentSection
            heading="Ready to Automate Your Finance Operations?"
            content={`Let’s transform your Accounts Payable into an intelligent, self-driving workflow.\nContact Evolotek →\nBuild faster. Operate smarter. Scale with confidence.`}
            layout="text-only"
            theme={project.theme}
          />
        </>
      ) : (
        <>
          <ContentSection
            heading="Project Overview"
            content={project.overview}
            layout="text-only"
            theme={project.theme}
          />
          <ContentSection
            heading="The Challenge"
            content={project.challenge}
            layout="text-image"
            image={project.gallery[0]?.src}
            imageAlt={project.gallery[0]?.alt}
            theme={project.theme}
          />
          <ContentSection
            heading="Our Solution"
            content={project.solution}
            layout="text-image"
            image={project.gallery[1]?.src}
            imageAlt={project.gallery[1]?.alt}
            theme={project.theme}
            reversed
          />
        </>
      )}

      <section style={{ padding: '100px 60px', background: '#ffffff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Rosario, serif',
            fontSize: '48px',
            fontWeight: 500,
            color: '#000000',
            marginBottom: '48px',
          }}>
            Key Features
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '32px',
          }}>
            {project.features.map((feature) => (
              <div key={feature.title} style={{
                padding: '24px',
                borderRadius: '8px',
                background: '#ffffff',
                border: '1px solid #e0e0e0',
              }}>
                <h3 style={{
                  fontFamily: 'Rosario, serif',
                  fontSize: '18px',
                  fontWeight: 500,
                  color: '#000000',
                  marginBottom: '8px',
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '14px',
                  color: '#525252',
                  lineHeight: '1.6',
                  margin: 0,
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ResultsSection results={project.results} theme={project.theme} />
    </>
  );
}
