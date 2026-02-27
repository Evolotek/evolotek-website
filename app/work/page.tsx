'use client';


import WorkHero from '@/app/components/work/WorkHero';
import ProjectSection from '@/app/components/work/ProjectSection';
import { projectsData } from '@/lib/projectsData';

export default function WorkPage() {
  // Desired order of slugs
  const orderedSlugs = [
    'longhome',
    'veefin',
    'briskpe',
    'equalum',
    'zoomaya',
    'sipstr',
    'veraeaty',
  ];

  // Filter and order projectsData by the above slugs
  const orderedProjects = orderedSlugs
    .map(slug => projectsData.find(project => project.slug === slug))
    .filter(Boolean);

  return (
    <>
      <WorkHero />
      {orderedProjects.map((project, index) => {
        if (!project) return null;
        return (
          <ProjectSection
            key={project.slug}
            slug={project.slug}
            title={`${project.title}\n${project.tagline}`}
            description={project.overview}
            imageSrc={project.coverImage}
            layout={index % 2 === 0 ? 'left' : 'right'}
            theme={index % 2 === 0 ? 'dark' : 'light'}
          />
        );
      })}
    </>
  );
}
