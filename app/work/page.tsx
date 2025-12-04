'use client';

import { useRouter } from 'next/navigation';
import WorkHero from '@/app/components/work/WorkHero';
import ProjectSection from '@/app/components/work/ProjectSection';
import { projectsData } from '@/lib/projectsData';

export default function WorkPage() {
  const router = useRouter();

  const handleProjectClick = (slug: string) => {
    router.push(`/work/${slug}`);
  };

  return (
    <>
      <WorkHero />
      
      {projectsData.map((project, index) => (
        <div
          key={project.slug}
          onClick={() => handleProjectClick(project.slug)}
          style={{ cursor: 'pointer' }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleProjectClick(project.slug);
            }
          }}
        >
          <ProjectSection
            title={`${project.title}\n${project.tagline}`}
            description={project.overview}
            imageSrc={project.coverImage}
            layout={index % 2 === 0 ? 'left' : 'right'}
            theme={project.theme}
          />
        </div>
      ))}
    </>
  );
}
