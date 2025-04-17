export interface TimelineItem {
  dates: string
  title: string
  employer: string
  description: string
  link?: string
  responsibilities: string[]
  tools: string[]
}

export const workExperience: TimelineItem[] = [
  {
    dates: 'November 2023 - Present',
    title: 'Manager of User Experiences',
    employer: 'CaryHealth',
    link: 'https://www.cary.health',
    responsibilities: [
      'Leadership',
      'Strategy',
      'Front-End Development',
      'Product Design',
      'Marketing',
      'Product Management',
    ],
    tools: ['React', 'Gatsby', 'Figma', 'TypeScript', 'ClickUp'],
    description:
      'Leads the product design and development of multiple high-impact tools at CaryHealth, spanning the product, design, and tech sectors and overseeing teams of talented designers and developers. Drives the product design and development of Clair, a clinical AI product within the CaryHealth suite, guiding product direction and user experience implementation.',
  },
  {
    dates: 'September 2022 – October 2023',
    title: 'Lead Frontend Engineer',
    employer: 'Tinyhood',
    link: 'https://www.tinyhood.com/',
    responsibilities: ['Front-End Development', 'Leadership', 'Product Design'],
    tools: ['React', 'Next.js', 'Figma', 'TypeScript', 'Linear', 'Axios'],
    description:
      'Spearheaded efforts as the sole front-end developer, collaborating with cross-functional teams to streamline the user’s experience. Led multiple high-impact user experience projects, including the integration of multi-lingual support into the site’s video player and the implementation of an A/B testing framework into the front-end code base.',
  },
  {
    dates: 'April 2021 – September 2022',
    title: 'UX Engineer',
    employer: 'MITRE',
    link: 'https://www.mitre.org/',
    responsibilities: [
      'Mentoring',
      'Front-End Development',
      'Product Design',
      'Product Management',
    ],
    tools: ['Vue', 'Nuxt', 'SASS', 'Adobe XD', 'Mural', 'GitLab', 'Axios', 'Salesforce'],
    description:
      'Wore the hats of tech lead, front-end developer, UI/UX designer, and scrum master on a daily basis. Spanned the UX research, UI design, and front-end development spectrum on multiple ‘start up’ projects at a time.',
  },
  {
    dates: 'July 2017 – April 2021',
    title: 'Senior Software Engineer',
    employer: 'Capital One',
    link: 'https://www.capitalone.com/',
    responsibilities: ['Front-End Development', 'DevOps'],
    tools: ['React', 'AWS', 'Docker', 'Jira', 'Jenkins', 'Jest'],
    description:
      "Built front and backend features on Capital One's credit card enrollment flow, reaching millions of customers per day. Created a feature to automatically enroll existing Capital One customers who are signing up for a new card, saving customers an average of 7 minutes when applying.",
  },
  {
    dates: 'August 2016 – May 2017',
    title: 'Design Lead',
    employer: 'VTHacks',
    link: 'https://www.vthacks.com/',
    responsibilities: ['UI/UX Design', 'Graphic Design', 'Leadership'],
    tools: ['Photoshop'],
    description:
      'Led a team of designers to ideate on and create designs for Virginia Tech’s 2017 hackathon. Created designs for the VTHacks website, responsive webapp, and prospectus.',
  },
  {
    dates: 'June 2016 – August 2016',
    title: 'Webapps Intern',
    employer: 'WillowTree Apps',
    link: 'https://www.willowtreeapps.com/',
    responsibilities: ['Front-End Development'],
    tools: ['React', 'JavaScript'],
    description: 'Developed end-to-end features on several webapps.',
  },
  {
    dates: 'June 2015 – August 2015',
    title: 'Software Engineer Intern',
    employer: 'Perfect Sense (now Brightspot)',
    link: 'https://www.brightspot.com/',
    responsibilities: ['Front-End Development'],
    tools: ['JavaScript', 'JSTL', 'CSS', 'HTML'],
    description:
      'Developed features on the 2015 Special Olympics official website like the front landing page and results page.',
  },
]
