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
      "Led the direction of design and development of CaryHealth's brand identity, including its own brand site, logos, and marketing materials.",
    img: '/caryhealth-brand/site-homepage-slice.png',
    link: '/portfolio/caryhealth-brand',
    pills: ['Strategy', 'Marketing Design', 'Product Management', 'Figma', 'Webflow'],
  },
  {
    title: 'Clair Search Results Revamp',
    description:
      "Orchestrated, designed, and developed end-to-end revamp of Clair's clinical search interface, focusing on signup incentive and optimizing loading states, resulting in 34% increase in free plan signups and 10% decrease in drop off.",
    img: '/clair.png',
    link: '/portfolio/clair-search-results',
    pills: ['Product Design', 'Front-End Development', 'Strategy', 'React', 'Figma'],
  },
  {
    title: 'Budget Tracker',
    description:
      "Gathered with a group of coworkers at Capital One to participate in an 'Innovation Day'— a workday-long hackathon to create a meaningful solution to a need that customers have. Our team decided to focus on the need for customers to budget their spending habits without needing to leave the app.",
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
