import { Section } from '@/components/ui/Section'
import { CaseStudyCard } from '@/components/portfolio/CaseStudyCard'
import { FeaturedCaseStudyCard } from '@/components/portfolio/FeaturedCaseStudyCard'
import { projects } from '@/types/projects'

export function SelectedWork() {
  return (
    <Section id="work" title="Selected Work" type="home">
      <div className="mt-8 grid grid-cols-1 gap-6">
        {projects
          .filter((project) => project.type === 'featured')
          .map((project) => (
            <FeaturedCaseStudyCard key={project.title} item={project} />
          ))}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects
            .filter((project) => project.type === 'card')
            .map((project) => (
              <CaseStudyCard key={project.title} item={project} />
            ))}
        </div>
      </div>
    </Section>
  )
}
