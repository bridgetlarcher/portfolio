export interface ProjectItem {
  title: string
  description: string
  img: string
  link: string
  pills: string[]
  tldr: {
    role: string
    secondaryLabel: string
    secondaryValue: string
    outcomes: string[]
  }
}

export const projects: ProjectItem[] = [
  {
    title: 'CaryHealth Design System',
    description:
      "Designed, architected, and led the build of CaryHealth's design system from zero: a Figma global design system, componentized into a React and TypeScript library and shipped as a private npm package.",
    img: '/caryhealth-brand/site-homepage-slice.png',
    link: '/portfolio/caryhealth-design-system',
    pills: [
      '0-to-1',
      'Design Systems',
      'Figma',
      'React / Typescript',
      'Design Tokens',
      'Claude Design',
    ],
    tldr: {
      role: 'Architected the system; led a designer and engineer through the build.',
      secondaryLabel: 'Scope',
      secondaryValue: 'Five client products and an internal platform, one Turborepo monorepo',
      outcomes: [
        'Figma to live adoption in ~4 months; now scaling to a second, larger monorepo',
        'Fixes propagate from one shared library instead of being hand-applied per repo',
      ],
    },
  },
  {
    title: 'Clair Search Results Revamp',
    description:
      "Proposed, designed, and built an end-to-end revamp of Clair's clinical search interface, focused on signup incentive and loading states. Free-plan signups rose 34% and drop-off fell 10%.",
    img: '/clair.png',
    link: '/portfolio/clair-search-results',
    pills: ['UX Research', 'Interaction Design', 'React / Typescript', 'Figma', 'Clinical AI'],
    tldr: {
      role: 'Proposed the feature, designed the signup-incentive and loading experiences, built and shipped the front end solo.',
      secondaryLabel: 'Timeline',
      secondaryValue: '~3 weeks, concept to production',
      outcomes: ['+34% free plan signups', '−10% drop-off'],
    },
  },
  {
    title: 'CaryHealth Brand Identity',
    description:
      "Led design and development of CaryHealth's brand from the ground up: the brand site, product logos, and company-wide marketing collateral.",
    img: '/caryhealth-brand/site-homepage-slice.png',
    link: '/portfolio/caryhealth-brand',
    pills: [
      'Brand Strategy',
      'Creative Direction',
      'Brand Identity',
      '0-to-1',
      'Design Leadership',
    ],
    tldr: {
      role: 'Initiated the brand, hired the team, and directed every deliverable from strategy through the shipped brand site.',
      secondaryLabel: 'Scope',
      secondaryValue: 'Logos, guidelines, brand site, and all sales and marketing collateral',
      outcomes: [
        'One market presence across products, sales, and marketing',
        'Company-wide guidelines every team designs and develops against',
      ],
    },
  },
  {
    title: 'Capital One Auto Enroll',
    description:
      'Built a feature to automatically enroll existing Capital One customers signing up for a new card. Used by roughly 10% of enrolling customers, it cut average application time from 13 minutes to 6.',
    img: '/auto-enroll/key.png',
    link: '/portfolio/auto-enroll',
    pills: ['React', 'Axios', 'Jest', 'AWS', 'Docker'],
    tldr: {
      role: 'Designed and built the flow, stripping redundant steps from enrollment.',
      secondaryLabel: 'Reach',
      secondaryValue: '~10% of enrolling customers on a platform reaching millions daily',
      outcomes: [
        'Application time cut from 13 to 6 minutes',
        'Used by roughly 1 in 10 enrolling customers',
      ],
    },
  },
]
