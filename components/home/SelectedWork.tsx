import { Section } from '@/components/ui/Section'
import { CaseStudyCard } from '@/components/portfolio/CaseStudyCard'
import { FeaturedCaseStudyCard } from '@/components/portfolio/FeaturedCaseStudyCard'
import { projects } from '@/types/projects'

export function SelectedWork() {
  return (
    <Section id="work" title="Selected Work" type="home">
      <div className="grid grid-cols-1 gap-6 py-10">
        <ul className="grid grid-cols-1 gap-6">
          {projects
            .filter((project) => project.type === 'featured')
            .map((project) => (
              <li key={project.title}>
                <FeaturedCaseStudyCard item={project} />
              </li>
            ))}
        </ul>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects
            .filter((project) => project.type === 'card')
            .map((project) => (
              <li key={project.title} className="grid">
                <CaseStudyCard item={project} />
              </li>
            ))}
        </ul>
      </div>
    </Section>
  )
}
