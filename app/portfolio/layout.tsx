import '../globals.css'

import Image from 'next/image'
import { ArrowBack } from '@mui/icons-material'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} relative flex min-h-screen flex-col leading-relaxed text-slate-400`}
      >
        <nav className="sticky top-0 flex w-full items-center justify-between px-4 py-3 backdrop-blur-md lg:px-24 lg:backdrop-blur-none">
          <a href="/#section-projects">
            <ArrowBack fontSize="large" />
          </a>
          <a href="/">
            <Image
              src="/favicon.png"
              alt="Logo. A backwards 'B' and an 'L' side by side."
              width={60}
              height={60}
            />
          </a>
        </nav>
        <main className="flex flex-col gap-8 px-12 pb-24 pt-6 lg:px-40 xl:px-96">{children}</main>
      </body>
    </html>
  )
}
