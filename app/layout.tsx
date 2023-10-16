import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Bridget Larcher | Developer, Designer, Problem Solver',
  description: 'Bridget Larcher | Developer, Designer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} leading-relaxed text-slate-400`}>{children}</body>
    </html>
  )
}
