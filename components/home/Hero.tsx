import { ArrowDownward, Description } from '@mui/icons-material'

import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { SocialButtons } from '@/components/ui/SocialButtons'
import { socialLinks } from '@/lib/socialLinks'

function Capability({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1 py-5">
      <span className="eyebrow">{label}</span>
      <span className="text-sm text-slate-300">{children}</span>
    </div>
  )
}

function StatTeaser({
  href,
  stat,
  children,
}: {
  href: string
  stat: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      className="border-secondary-800 bg-surface-card hover:bg-surface-card-hover inline-flex flex-wrap items-baseline gap-x-3 gap-y-1 self-start rounded-r-lg border-l-2 px-4 py-3 text-sm no-underline transition duration-300 ease-in-out"
    >
      <span className="font-bold text-primary-300">{stat}</span>
      <span className="text-slate-400">{children}</span>
    </a>
  )
}

export function Hero() {
  return (
    <header className="relative flex flex-col gap-14 py-10 md:flex-row lg:items-center lg:py-20">
      <div
        aria-hidden="true"
        className="bg-secondary-800 -z-1 pointer-events-none absolute bottom-0 left-[650px] right-0 top-0 hidden rounded-full opacity-15 blur-3xl lg:block"
      />
      <div
        aria-hidden="true"
        className="-z-1 dot-grid pointer-events-none absolute bottom-0 right-0 top-0 hidden w-[700px] lg:block"
      />
      <section className="flex flex-col gap-5" aria-label="Introduction">
        <span className="eyebrow !leading-5">
          <span className="whitespace-nowrap">Design Engineer</span> ·{' '}
          <span className="whitespace-nowrap">Product Designer</span> ·{' '}
          <span className="whitespace-nowrap">Design Engineering Manager</span>
        </span>
        <h1 className="text-4xl font-black text-slate-100 md:text-5xl xl:text-[68px] xl:leading-[1.05]">
          Bridget Larcher
        </h1>
        <p className="text-xl font-medium leading-snug text-slate-200 md:text-[22px]">
          I design the product, write the front-end that ships it, and lead the team that does both.
        </p>
        <p>
          Nine years across product design and front-end engineering. Currently the Manager of User
          Experiences at CaryHealth.
        </p>
        <StatTeaser href="#work" stat="+34% signups · −10% drop-off">
          Clair, the clinical AI copilot I proposed, designed, and built{' '}
          <ArrowDownward fontSize="small" />
        </StatTeaser>
        <div className="flex items-center gap-4">
          <Button href={socialLinks.resume.href} external variant="solid" size="lg">
            <Description fontSize="small" aria-hidden="true" />
            Resume
          </Button>
          <SocialButtons links={['github', 'linkedin']} size="icon" />
        </div>
      </section>
      <Card className="divide-hairline !bg-secondary-950/90 shadow-glow z-10 divide-y border">
        <Capability label="Design">
          Product design end-to-end: research, prototyping, and high-fidelity UI.
        </Capability>
        <Capability label="Code">
          React · TypeScript · Next.js · Design Systems. Production front-end across a suite of
          client-branded products.
        </Capability>
        <Capability label="Team">
          Managing a five-person design-engineering team at CaryHealth.
        </Capability>
      </Card>
    </header>
  )
}
