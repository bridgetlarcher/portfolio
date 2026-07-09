import './globals.css'

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ScrollToTop } from '@/components/ScrollToTop'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
})

const title = 'Bridget Larcher | Product Designer & Front-End Engineer'
const description =
  "Product designer and front-end engineer who takes user-facing products from research through production code. Founded a startup's design function from zero and shipped features that move real metrics."

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bridgetlarcher.com/'),
  title: title,
  description: description,
  keywords: [
    'Bridget Larcher',
    'Bridget',
    'Larcher',
    'Product Designer',
    'Staff Product Designer',
    'UX Designer',
    'UX/Product Design Manager',
    'Design Manager',
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
    description: description,
    siteName: title,
    images: '/og.png',
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
        {children}
        <ScrollToTop />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
