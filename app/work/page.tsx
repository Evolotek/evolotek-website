'use client';

import WorkHero from '@/app/components/work/WorkHero';
import ProjectSection from '@/app/components/work/ProjectSection';
import { projectsData } from '@/lib/projectsData';

export default function WorkPage() {
  return (
    <>
      <WorkHero />
      
      {projectsData.map((project, index) => (
        <ProjectSection
          key={project.slug}
          slug={project.slug}
          title={`${project.title}\n${project.tagline}`}
          description={project.overview}
          imageSrc={project.coverImage}
          layout={index % 2 === 0 ? 'left' : 'right'}
          theme={project.theme}
        />
      ))}
    </>
  );
}
