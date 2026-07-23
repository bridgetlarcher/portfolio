import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Callout } from '../ui/Callout'

const employers = [
  { name: 'CaryHealth', role: 'Manager of User Experiences' },
  { name: 'Tinyhood', role: 'Senior Front-End Engineer' },
  { name: 'MITRE', role: 'UX Engineer' },
  { name: 'Capital One', role: 'Software Engineer' },
]

export function About() {
  return (
    <Section id="about" title="About" type="home">
      <div className="flex flex-col gap-6 py-10 md:flex-row lg:gap-16">
        <div className="flex flex-col gap-4 text-slate-300 md:w-2/3 md:text-lg">
          <p>
            I'm Bridget, a design engineer and design-engineering manager. For nine years I've
            worked the full span of product: the research and design, the production front-end that
            ships it, and now the team that does both.
          </p>
          <p>
            Today I'm Manager of User Experiences at CaryHealth, where I founded the design
            function, stood up a five-person team of designers and front-end developers, and
            architected and led the company's design system, all while staying hands-on in design
            and code. Before that: sole front-end engineer at Tinyhood, UX engineer at MITRE, and
            software engineer at Capital One, on an enrollment platform reaching millions of
            customers a day.
          </p>
          <Callout header="I'm most useful in the messy middle, where design becomes code." />
        </div>
        <div className="relative">
          <div
            aria-hidden="true"
            className="bg-secondary-800 pointer-events-none absolute -left-40 bottom-10 -z-10 hidden h-[300px] w-[300px] rounded-full opacity-30 blur-3xl lg:block"
          />
          <Card className="!bg-primary-950/90 shadow-glow z-10 w-full divide-y-2 divide-slate-700 md:w-[350px]">
            {employers.map((employer) => (
              <div key={employer.name} className="flex flex-col gap-1 py-4">
                <span className="subtitle">{employer.name}</span>
                <span className="text-sm">{employer.role}</span>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </Section>
  )
}
