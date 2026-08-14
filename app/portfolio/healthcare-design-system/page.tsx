import type { Metadata } from 'next'
import { Callout } from '@/components/ui/Callout'
import { Section } from '@/components/ui/Section'
import Image from 'next/image'

const title = 'Healthcare Design System'
const description =
  "Architected and led the build of a healthcare technology company's design system from zero: a Figma global design system, componentized into a React and TypeScript library and shipped as a private npm package. Now the single source of truth across six products."

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    type: 'article',
    url: 'https://www.bridgetlarcher.com/portfolio/healthcare-design-system',
    title: title,
    description: description,
    siteName: 'Bridget Larcher',
    images: [
      {
        url: '/healthcare-design-system/og.png',
        width: 2400,
        height: 1260,
        alt: 'Healthcare Design System — a case study on building a design system from zero',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: ['/healthcare-design-system/og.png'],
  },
}

export default function Page() {
  return (
    <>
      <Section title="Objectives" type="portfolio">
        <p>
          My mind is always on optimization of design and front-end code. At a healthcare technology
          company where I lead design and development, I found myself frustrated over the different
          instances of the same components scattered across code and Figma files. Each one was
          copy-pasted with small tweaks or bugfixes sprinkled across each instance. Every bug fix
          and every per-project enhancement had to be hand-applied in each project.
        </p>
        <p>
          It worked, but it was a patch on a growing problem: each codebase and Figma file felt
          heavy to load and maintain, weighed down by the multiple instances of components that
          could be unified with a bit of lift. As we scaled, the problem became all the more obvious
          - and as the lead of the design and front-end development teams, I felt the weight from
          both sides.
        </p>
        <Callout
          header="It was never just about pruning duplicate components. It was about consolidating brand across
          design and development at once."
        />
        <p>
          We needed a real standard for our brand: one global system everything else could draw
          from, without giving up the per-client and per-product customization that our business
          runs on.
        </p>
      </Section>
      <Section title="Approach" type="portfolio">
        <p>
          I led and owned this end to end, from the Figma system to the production architecture. A
          designer and an engineer helped build it out; I set the direction and held the bar through
          regular design and dev reviews and facilitating adoption of these new systems.
        </p>
        <hr className="h-px border-0 bg-slate-700" />
        <div className="portfolio-image">
          <Image
            src="/healthcare-design-system/designsystem.png"
            className="w-full rounded-xl"
            alt="The design system. A single source of truth for color, typography, and components. This page shows a list of button styles."
            width={1859}
            height={919}
            sizes="100vw"
          />
        </div>
        <Callout
          header="A Figma global design system as the single source of design truth."
          type="list"
          listNumber="01"
        >
          We created product color schemes, typography, and components as Figma variables and design
          tokens. Then, we subsequently published them as a library that design files adopted. The
          Global Design System file became the one-stop shop for every brand asset and component,
          stopping copy-paste rebuilds and unlocking a trusted, tested source of truth.
        </Callout>
        <hr className="h-px border-0 bg-slate-700" />
        <div className="portfolio-image">
          <Image
            src="/healthcare-design-system/componentlibrary-inputform.png"
            className="w-full rounded-xl"
            alt="The component library, using Storybook for easy development, testing, and documentation."
            width={1410}
            height={920}
            sizes="100vw"
          />
        </div>
        <Callout
          header="Componentized into a code library, shipped as a private npm package."
          type="list"
          listNumber="02"
        >
          Rather than hosting a set of copy-pasted components between projects, our component
          library ships as a set of pre-tested React/TypeScript components styled with Tailwind CSS
          and SCSS and measured for excellence. We packaged it as a private npm library and injected
          into each project's package.json. All components are easily reviewable via Storybook.
        </Callout>
        <hr className="h-px border-0 bg-slate-700" />
        <Callout
          header="Per-client branding on a shared base, without forking."
          type="list"
          listNumber="03"
        >
          Our components stay brand-agnostic. Each product carries a small SCSS color file that
          themes the shared components in its own palette — a little brand-specific color layered on
          top of one common foundation. It’s the best of both worlds: clients get a custom look, and
          we keep one clean codebase.
        </Callout>
        <hr className="h-px border-0 bg-slate-700" />
        <Callout header="Consolidated into a Turborepo monorepo." type="list" listNumber="04">
          I moved a handful of codebases into a Turborepo monorepo, collapsing duplicated code into
          reusable, pre-tested, shared slices (which include components, config files, API calls, or
          even entire pages). Because they're already built and tested, projects consume them as-is.
          With the addition of the component library, we can be sure that new work starts from a
          solid base.
        </Callout>
        <hr className="h-px border-0 bg-slate-700" />
        <Callout
          header="AI woven through the workflow, managed by robust visual guidelines."
          type="list"
          listNumber="05"
        >
          <p>
            On the dev side, a well-built component library is the perfect thing to keep code
            honest. Theme files are generated by an AI skill in moments, and once a single app is
            standing in the monorepo, a skill document scaffolds similar client projects from it.
            Since the components come from the npm library, we have more confidence in the output.
          </p>
          <p>
            On the design side, we have a multi-spoked wheel. Figma AI and Figma's Claude MCP ingest
            the design system readily, accelerating design output. On top of that, we've plugged the
            design system into Claude Design to stand up branded prototypes in minutes. This is not
            only great for dev handoff, but also for internal demos, proofs of concept, and
            ideation.
          </p>
          <p>On both sides: our robust brand is what makes speed safe.</p>
        </Callout>
        <hr className="h-px border-0 bg-slate-700" />
        <Callout header="Drove adoption deliberately." type="list" listNumber="06">
          A system only matters if the team actually uses it. We demoed the library from a live,
          internal Storybook link over a lunch-and-learn to put it on everyone's radar. We then
          simply started standing up new client work on it, because it was as easy as the old
          copy-paste and without the debt. Adoption happened because we built the component library
          in a way that made using it the simpler path.
        </Callout>
        <div className="portfolio-image flex flex-col items-center justify-center gap-4 md:flex-row">
          <figure className="flex flex-col gap-3 md:w-[55%]">
            <Image
              src="/healthcare-design-system/adoption-developed1.png"
              className="h-auto w-full min-w-0 rounded-lg"
              alt="Modal with title: New insurance. A live version of the component library, developed and deployed by a developer."
              width={537}
              height={422}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <figcaption className="caption">
              Designs translated to live, deployed code. All using the company's design system and
              component library.
            </figcaption>
          </figure>
          <Image
            src="/healthcare-design-system/adoption-developed2.png"
            className="h-auto w-full min-w-0 rounded-lg md:w-[45%]"
            alt="Modal with title: Global Patient Search. A live version of the component library, developed and deployed by a developer."
            width={597}
            height={669}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </Section>
      <Section title="Outcomes" type="portfolio">
        <p>
          The duplicated components that once lived across multiple repos and Figma files now live
          in one themed, shared library. Bug fixes and enhancements on the dev side propagate from
          the npm package rather than being hand-applied repo by repo. New internal and client
          products start from the shared base with an AI supercharge to accelerate output. And most
          importantly, design and engineering finally pull from the same source of truth.
        </p>
        <Callout
          header="Today the system backs five client-branded products and a high-visibility internal
          platform in one monorepo. It's now being rolled out to a second, larger monorepo of
          roughly ten client projects plus another internal product."
        />
        <Image
          src="/healthcare-design-system/adoption-design.png"
          className="w-full rounded-xl"
          alt="A Figma flow of patient eligibility intake screens built from the design system, annotated with the branching logic between steps."
          width={1274}
          height={779}
          sizes="100vw"
        />
        <p>
          From the first Figma file to live adoption took about four months — design in January to
          February, development through April, rollout across April and May.
        </p>
        <p>
          Owning both ends of design and development cut down on the cost of maintenance and
          increased speed. The Figma library and npm package speak the same language because I
          maintained both.
        </p>
      </Section>
    </>
  )
}
