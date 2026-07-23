import { EmphasizeText } from '@/components/EmphasizeText'
import { SectionHeader } from '@/components/SectionHeader'
import Image from 'next/image'

export default function Page() {
  return (
    <>
      <SectionHeader text="Objectives" />
      <section className="portfolio-section">
        <p>
          For a long time, the idea of a unified brand wasn’t at the forefront of conversations.
          Different instances of the same components were scattered across code repositories and
          Figma files, copy-pasted, with small tweaks or bugfixes sprinkled across each instance.
          Every bug fix and every per-project enhancement had to be hand-applied in each project.
        </p>
        <p>
          It worked, but it was a patch on a growing problem: each codebase and Figma file felt
          heavy to load and maintain, weighed down by the multiple instances of components that
          could be unified with a bit of lift. As we scaled, the problem became all the more
          obvious; and as both an engineer and the person responsible for design, I felt the weight
          from both sides.
        </p>
        <EmphasizeText
          header="This was never just about trimming duplicate code. It was about consolidating across
          design and development at once."
        />
        <p>
          We needed real hierarchy in the brand: one global system everything else could draw from,
          without giving up the per-client customization our business runs on.
        </p>
      </section>
      <SectionHeader text="Approach" />
      <section className="portfolio-section">
        <p>
          I led and owned this end to end, from the Figma system to the production architecture. A
          designer and an engineer helped build it out; I set the direction and held the bar through
          regular design and dev reviews and facilitating adoption of these new systems.
        </p>
        <hr className="h-px border-0 bg-slate-700" />
        <EmphasizeText
          header="A Figma global design system as the single source of design truth."
          description="Design anchored product color schemes, typography, and components as Figma variables and design tokens,
              then published them as a library other design files consume directly. The Global
              Design System file became the one-stop shop for every brand asset and component, so
              designers stopped rebuilding and started pulling from one place."
          type="list"
          listNumber="01"
        />
        <hr className="h-px border-0 bg-slate-700" />
        <EmphasizeText
          header="Componentized into a code library, shipped as a private npm package."
          description="Rather than a style guide engineers re-implemented each time, the system ships as real
          React/TypeScript components, styled with Tailwind and SCSS, packaged as a private npm
          library and injected into each project's package.json. One source, consumed everywhere."
          type="list"
          listNumber="02"
        />
        <hr className="h-px border-0 bg-slate-700" />

        <div className="flex flex-col gap-6 md:flex-row">
          <div className="relative w-full md:w-1/2">
            <EmphasizeText
              header="Per-client branding on a shared base, without forking."
              description="The components stay brand-agnostic. Each product carries a small SCSS color file that
          themes the shared components in its own palette — a little brand-specific color layered on
          top of one common foundation. It’s the best of both worlds: clients get a bespoke look,
          and we keep one clean codebase."
              type="list"
              listNumber="03"
            />
          </div>
          <div className="relative h-auto w-full md:w-1/2">
            <Image
              src="/clair-search-results/ideation-board.png"
              className="rounded-xl"
              alt="Ideation board showing multiple design concepts for incentivizing user signup on Clair."
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              objectFit="contain"
            />
          </div>
        </div>
        <hr className="h-px border-0 bg-slate-700" />
        <EmphasizeText
          header="Consolidated into a Turborepo monorepo."
          description="I moved a handful of codebases into a Turborepo monorepo, collapsing the duplicated code
          into reusable, pre-tested shared slices of code (this might include components, config
          files, API calls, or even entire pages). Because they're already built and tested,
          projects consume them as-is, no re-testing — which cut engineering lift and let new work
          start from a solid base instead of a copy-paste."
          type="list"
          listNumber="04"
        />
        <hr className="h-px border-0 bg-slate-700" />
        <EmphasizeText
          header="AI woven through the workflow, on a foundation it can't break."
          description="A standardized component library turns out to be the perfect thing to hand an AI: it's
          constrained, so the output stays consistent. We generate each product's theme file with an
          AI skill in moments, and once one app is standing in the monorepo, we scaffold similar
          client projects from a template against the library almost instantly! On the design side,
          I use Claude Design with the Global Design System to stand up branded prototypes in
          minutes for internal demos and client, sales, and marketing proofs of concept. The robust
          brand is what makes speed safe."
          type="list"
          listNumber="05"
        />
        <hr className="h-px border-0 bg-slate-700" />
        <div className="flex flex-col gap-6 md:flex-row">
          <EmphasizeText
            header="Drove adoption deliberately."
            description="A system only matters if the team actually uses it. My developer demoed the library from a
          live, internal Storybook link over a lunch-and-learn to put it on everyone's radar, then
          we simply started standing up new client work on it, because it was as easy as the old
          copy-paste and without the debt. Adoption happened because we built the component library
          in a way that made using it the simpler path."
            type="list"
            listNumber="06"
          />
          <div className="relative w-[4500px]">
            <Image
              src="/clair-search-results/ideation-board.png"
              className="rounded-xl"
              alt="Ideation board showing multiple design concepts for incentivizing user signup on Clair."
              sizes="100vw"
              fill
              objectFit="contain"
            />
          </div>
        </div>
      </section>
      <SectionHeader text="Outcomes" />
      <section className="portfolio-section">
        <p>
          The duplicated components that once lived across more than three repos and multiple Figma
          files now live in one themed, shared library. Bug fixes and enhancements propagate from a
          single place instead of being hand-applied repo by repo. New client products start from
          the shared base, and design and engineering finally pull from the same source of truth.
        </p>
        <EmphasizeText
          header="Today the system backs five client-branded products and a high-visibility internal
          platform in one monorepo. It's now being rolled out to a second, larger monorepo of
          roughly ten client projects plus another internal product."
        />
        <p>
          From the first Figma file to live adoption took about four months — design in January to
          February, development through April, rollout across April and May.
        </p>
        <p>
          I architected and led the design system across both the Figma system and the code-based
          component library. Owning both ends is exactly why the design and the code never drift
          apart.
        </p>
      </section>
    </>
  )
}
