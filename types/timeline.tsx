export interface TimelineItem {
  dates: string
  title: string
  employer: string
  description?: string
  link?: string
  responsibilities?: string[]
  tools?: string[]
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
      'Design Systems',
      'Product Design',
      'Front-End Development',
      'Brand',
      'Product Management',
    ],
    tools: ['React', 'Gatsby', 'Figma', 'TypeScript', 'ClickUp'],
    description:
      "Founded the design function from zero and stood up a five-person team of designers and front-end developers, now running regular 1:1s and performance reviews. Designed and built the company's design system and brand, drove the codebase to a shared component library and monorepos, and shipped a self-initiated feature for Clair, the clinical AI copilot, increasing signups 34% and reducing drop-off 10%.",
  },
  {
    dates: 'September 2022 – October 2023',
    title: 'Lead Frontend Engineer',
    employer: 'Tinyhood',
    link: 'https://www.tinyhood.com/',
    responsibilities: ['Front-End Development', 'Leadership', 'Product Design'],
    tools: ['React', 'Next.js', 'Figma', 'TypeScript', 'Linear', 'Axios'],
    description:
      'Sole front-end developer driving growth through UI/UX. Built multilingual support for the video player, launching Spanish to reach roughly 14% of customers on an architecture that adds any language from an audio track. Led accessibility improvements to WCAG AA and championed company-wide adoption of A/B testing to validate marketing and product decisions.',
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
      'Served as tech lead, front-end developer, UI/UX designer, and scrum master across multiple concurrent startup-style initiatives for a U.S. government sponsor (specifics restricted under security clearance). Drove end-to-end product development across UX research, UI design, and front-end implementation.',
  },
  {
    dates: 'July 2017 – April 2021',
    title: 'Senior Software Engineer',
    employer: 'Capital One',
    link: 'https://www.capitalone.com/',
    responsibilities: ['Front-End Development', 'DevOps'],
    tools: ['React', 'AWS', 'Docker', 'Jira', 'Jenkins', 'Jest'],
    description:
      "Built front-end and back-end features for Capital One's credit-card enrollment platform, which reached millions of customers a day. Led an auto-enrollment feature used by roughly 10% of enrolling customers, cutting the average application time from 13 minutes to 6.",
  },
  {
    dates: 'August 2016 – May 2017',
    title: 'Design Lead',
    employer: 'VTHacks',
    link: 'https://www.vthacks.com/',
    responsibilities: ['UI/UX Design', 'Graphic Design', 'Leadership'],
    tools: ['Photoshop'],
    // description: 'Led a team of designers to ideate on and create designs for Virginia Tech’s 2017 hackathon. Created designs for the VTHacks website, responsive webapp, and prospectus.',
  },
  {
    dates: 'June 2016 – August 2016',
    title: 'Webapps Intern',
    employer: 'WillowTree Apps',
    link: 'https://www.willowtreeapps.com/',
    responsibilities: ['Front-End Development'],
    tools: ['React', 'JavaScript'],
    // description: 'Developed end-to-end features on several webapps.',
  },
  {
    dates: 'June 2015 – August 2015',
    title: 'Software Engineer Intern',
    employer: 'Perfect Sense (now Brightspot)',
    link: 'https://www.brightspot.com/',
    responsibilities: ['Front-End Development'],
    tools: ['JavaScript', 'JSTL', 'CSS', 'HTML'],
    // description: 'Developed features on the 2015 Special Olympics official website like the front landing page and results page.',
  },
]
