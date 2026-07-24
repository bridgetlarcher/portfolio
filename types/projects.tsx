import { OpenInNew } from '@mui/icons-material'
import { TextLink } from '@/components/ui/TextLink'

export interface ProjectItem {
  type: 'featured' | 'card'
  title: string
  description: string
  eyebrow: string
  img: { src: string; alt: string }
  stats?: { stat: string; label: string }[]
  video?: { href: string; label: string }
  caption?: string
  link: string
  pills: string[]
  footnote?: string
  tldr: {
    role: string
    secondaryLabel: string
    secondaryValue: string
    outcomes: string[]
  }
  additionalActions?: React.ReactNode
}

export const projects: ProjectItem[] = [
  {
    type: 'featured',
    title: 'Clair Search Results Revamp',
    description:
      "Proposed, designed, and built an end-to-end revamp of Clair's clinical search interface, focused on signup incentive and loading states. Free-plan signups rose 34% and drop-off fell 10%.",
    img: { src: '/clair.png', alt: "Poster frame: Clair's clinical search results interface" },
    link: '/portfolio/clair-search-results',
    eyebrow: 'Featured · Proposed, designed & built',
    stats: [
      { stat: '+34%', label: 'Free plan signups' },
      { stat: '−10%', label: 'Drop-off' },
    ],
    video: {
      href: 'https://player.vimeo.com/video/1068973155?h=2262c53451&badge=0&autopause=0&player_id=0&app_id=58479',
      label: 'Watch the video walkthrough of the shipped Clair product (opens in a new tab)',
    },
    caption: 'Video walkthrough of the shipped product, end to end.',
    footnote: '~3 weeks, concept to production.',
    pills: ['UX Research', 'Interaction Design', 'React / Typescript', 'Figma', 'Clinical AI'],
    tldr: {
      role: 'Proposed the feature, designed the signup-incentive and loading experiences, built and shipped the front end solo.',
      secondaryLabel: 'Timeline',
      secondaryValue: '~3 weeks, concept to production',
      outcomes: ['+34% free plan signups', '−10% drop-off'],
    },
    additionalActions: (
      <TextLink href="https://askclair.ai" external variant="action">
        Clair, live <OpenInNew fontSize="inherit" aria-hidden="true" />
      </TextLink>
    ),
  },
  {
    type: 'card',
    title: 'CaryHealth Brand Identity',
    description:
      "Led design and development of CaryHealth's brand from the ground up: the brand site, product logos, and company-wide marketing collateral.",
    eyebrow: 'Directed',

    img: {
      src: '/caryhealth-brand/site-homepage-slice.png',
      alt: "Poster frame: CaryHealth's brand site",
    },
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
    type: 'card',
    title: 'Capital One Auto Enroll',
    description:
      'Built a feature to automatically enroll existing Capital One customers signing up for a new card. Used by roughly 10% of enrolling customers, it cut average application time from 13 minutes to 6.',
    eyebrow: 'Built',
    img: {
      src: '/auto-enroll/key.png',
      alt: 'Poster frame: The auto enroll page. Users see this when they successfully Auto Enroll.',
    },
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
