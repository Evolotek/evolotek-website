import { getProject, getAllProjectSlugs } from '@/lib/projectsData';
import WorkDetailHero from '@/app/components/work/WorkDetailHero';
import ProjectMetadata from '@/app/components/work/ProjectMetadata';
import ContentSection from '@/app/components/work/ContentSection';
import ResultsSection from '@/app/components/work/ResultsSection';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface WorkDetailPageProps {
  params: { 
    slug: string;
  };
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: WorkDetailPageProps): Promise<Metadata> {
  const project = getProject(params.slug);

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
  const project = getProject(params.slug);

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
