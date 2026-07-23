import './globals.css'

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { TopNav } from '@/components/layout/TopNav'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { ScrollToTop } from '@/components/layout/ScrollToTop'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
})

const title = 'Bridget Larcher — Design Engineer · Product Designer · Design Engineering Manager'
const description =
  'Design engineer, product designer, and design-engineering manager. Nine years across product design and front-end engineering — I design product, write the front-end that ships it, and lead the team that does both.'
const shortDescription =
  'Design engineer, product designer, and design-engineering manager. Nine years across product design and front-end engineering.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bridgetlarcher.com/'),
  title: {
    default: title,
    template: '%s — Bridget Larcher',
  },
  description: description,
  keywords: [
    'Bridget Larcher',
    'Bridget',
    'Larcher',
    'Design Engineer',
    'Staff Design Engineer',
    'Design Engineering Manager',
    'Product Designer',
    'Staff Product Designer',
    'UX Designer',
    'UX/Product Design Manager',
    'Design Manager',
    'Engineering Manager',
    'Design Engineering',
    'Design Systems',
    'UI/UX Design',
    'Front-End Engineer',
    'React',
    'TypeScript',
    'Figma',
    'Portfolio',
  ],
  openGraph: {
    type: 'website',
    url: 'https://www.bridgetlarcher.com/',
    title: title,
    description: shortDescription,
    siteName: 'Bridget Larcher',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Bridget Larcher — design engineer, product designer, and design-engineering manager',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: shortDescription,
    images: ['/og.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} relative flex min-h-screen flex-col leading-relaxed text-slate-400`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to main content
        </a>
        <TopNav />
        {children}
        <SiteFooter />
        <ScrollToTop />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
