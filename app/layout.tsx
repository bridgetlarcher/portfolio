import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
})

const title = 'Bridget Larcher | Developer, Designer, Problem Solver'
const description =
  'Frontend developer, designer, and problem solver. With a passion for user-centric innovation and a proven track record of leading high-impact user experience projects, I thrive on creating and shipping projects that wow people.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bridgetlarcher.com/'),
  title: title,
  description: description,
  keywords: [
    'Bridget Larcher',
    'Bridget',
    'Larcher',
    'Web development',
    'Developer',
    'Frontend development',
    'UI/UX Design',
    'Design',
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
      <body className={`${roboto.className} leading-relaxed text-slate-400`}>{children}</body>
      <Analytics />
    </html>
  )
}
