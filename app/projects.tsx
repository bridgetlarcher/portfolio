export interface ProjectItem {
  title: string
  description: string
  img: string
  link?: string
  pills: string[]
}

export const projects: ProjectItem[] = [
  {
    title: 'Stats of Our Own',
    description:
      "A weekend project derived from frustration surrounding a writing site's frustrating stats page. With this app, writers can visualize hits, kudos, and bookmarks in an interactive chart.",
    img: '/stats-of-our-own.png',
    link: 'https://stats-of-our-own.vercel.app/',
    pills: [
      'React',
      'Next.js',
      'MaterialUI',
      'TailwindCSS',
      'Charts.js',
      'TypeScript',
      'Python',
      'Flask',
      'Vercel',
    ],
  },
  {
    title: 'Multilingual Video Support',
    description:
      'At Tinyhood, we wanted to extend our site to be able to host users of different lingual backgrounds. Using Next.js, React, and the HLS player, I developed a solution so that a user could switch languages in-player.',
    img: '/multilingual-video-support.png',
    pills: ['React', 'Next.js', 'HLS.js'],
  },
  {
    title: 'Budget Tracker',
    description:
      "I gathered with a group of coworkers at Capital One to participate in an 'Innovation Day'— a workday-long hackathon to create a meaningful solution to a need that customers have.\n\nOur team decided to focus on the need for customers to budget their spending habits without having to leave the app. Using the data from their previous transactions, while giving them the option to set budgets based on this data, would be a useful tool for customers across the board.",
    img: '/budget-tracker.png',
    link: 'https://projects.invisionapp.com/share/DJ104OCMSW2A#/screens/444153411_ASU',
    pills: ['Figma', 'Mural', 'InVision'],
  },
  {
    title: 'Capital One Auto Enroll',
    description:
      "Spearheaded the development of a feature to automatically enroll existing Capital One customers who are signing up for a new card. After launch, we noticed a large uptick in customers who completed their enrollment, cutting the average customer's application to completion time from 13 minutes to 6 minutes.",
    img: '/auto-enroll.png',
    pills: ['React', 'Axios', 'Jest', 'AWS', 'Docker'],
  },
]
