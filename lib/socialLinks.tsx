import { Description, GitHub, LinkedIn, SvgIconComponent } from '@mui/icons-material'

type SocialLink = {
  href: string | undefined
  label: string
  icon: SvgIconComponent
  aria: string
}

export const socialLinks = {
  github: {
    href: 'https://github.com/bridgetlarcher',
    label: 'GitHub',
    icon: GitHub,
    aria: 'GitHub profile',
  },
  linkedin: {
    href: 'https://www.linkedin.com/in/bridgetlarcher/',
    label: 'LinkedIn',
    icon: LinkedIn,
    aria: 'LinkedIn profile',
  },
  resume: {
    href: process.env.RESUME,
    label: 'Resume',
    icon: Description,
    aria: 'Resume',
  },
} satisfies Record<string, SocialLink>

export type SocialKey = keyof typeof socialLinks
