export interface ProjectItem {
  title: string
  description: string
  img: string
  link: string
  pills: string[]
}

export const projects: ProjectItem[] = [
  {
    title: 'CaryHealth Brand Identity',
    description:
      "Lead the direction of design and development of CaryHealth's brand identity, including its own brand site, logos, and marketing materials.",
    img: '/caryhealth-brand/site-homepage-slice.png',
    link: '/portfolio/caryhealth-brand',
    pills: ['Strategy', 'Marketing Design', 'Product Management', 'Figma', 'Webflow'],
  },
  {
    title: 'Clair',
    description:
      'Leads the design and development efforts of Clair, the permier clinical AI reference. This includes both the web experience and the mobile apps.',
    img: '/clair.png',
    link: 'https://www.askclair.ai/',
    pills: ['Figma', 'React', 'Gatsby', 'Typescript', 'Product Management'],
  },
  {
    title: 'Budget Tracker',
    description:
      "I gathered with a group of coworkers at Capital One to participate in an 'Innovation Day'— a workday-long hackathon to create a meaningful solution to a need that customers have. Our team decided to focus on the need for customers to budget their spending habits without needing to leave the app.",
    img: '/budget-tracker/key.png',
    link: '/portfolio/budget-tracker',
    pills: ['UI/UX Design', 'Figma', 'Mural'],
  },
  {
    title: 'Capital One Auto Enroll',
    description:
      "Spearheaded the development of a feature to automatically enroll existing Capital One customers who are signing up for a new card. After launch, we noticed a large uptick in customers who completed their enrollment, cutting the average customer's application to completion time from 13 minutes to 6 minutes.",
    img: '/auto-enroll/key.png',
    link: '/portfolio/auto-enroll',
    pills: ['React', 'Axios', 'Jest', 'AWS', 'Docker'],
  },
]
