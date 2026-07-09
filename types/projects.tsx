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
    title: 'CaryHealth Brand Identity',
    description:
      "Led design and development of CaryHealth's brand from the ground up: the brand site, product logos, and company-wide marketing collateral.",
    img: '/caryhealth-brand/site-homepage-slice.png',
    link: '/portfolio/caryhealth-brand',
    pills: ['Strategy', 'Brand Identity', 'Figma', 'Webflow'],
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
    title: 'Clair Search Results Revamp',
    description:
      "Proposed, designed, and built an end-to-end revamp of Clair's clinical search interface, focused on signup incentive and loading states. Free-plan signups rose 34% and drop-off fell 10%.",
    img: '/clair.png',
    link: '/portfolio/clair-search-results',
    pills: ['Product Design', 'Front-End Development', 'UX Research', 'Strategy', 'React', 'Figma'],
    tldr: {
      role: 'Proposed the feature, designed the signup-incentive and loading experiences, built and shipped the front end solo.',
      secondaryLabel: 'Timeline',
      secondaryValue: '~3 weeks, concept to production',
      outcomes: ['+34% free plan signups', '−10% drop-off'],
    },
  },
  // {
  //   title: 'Budget Tracker',
  //   description:
  //     "Gathered with a group of coworkers at Capital One to participate in an 'Innovation Day'— a workday-long hackathon to create a meaningful solution to a need that customers have. Our team decided to focus on the need for customers to budget their spending habits without needing to leave the app.",
  //   img: '/budget-tracker/key.png',
  //   link: '/portfolio/budget-tracker',
  //   pills: ['UI/UX Design', 'Figma', 'Mural'],
  //   tldr: {
  //     role: 'Designer-developer — visualized team ideas live in Figma',
  //     secondaryLabel: 'Timeline',
  //     secondaryValue: "One workday — 'Innovation Day' hackathon",
  //     outcomes: ['End-to-end in-app budgeting concept'],
  //   },
  // },
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
