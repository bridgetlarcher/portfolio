import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { socialLinks } from '@/lib/socialLinks'
import { NavLinks } from '@/components/layout/NavLinks'

export function TopNav() {
  return (
    <nav
      aria-label="Site"
      className="border-hairline bg-secondary-950/90 sticky top-0 z-10 border-b backdrop-blur"
    >
      <div className="container-page flex items-center justify-between py-4">
        <Link href="/" aria-label="Home" className="flex items-center gap-3 no-underline">
          <Image
            src="/favicon.png"
            alt="Logo. A backwards 'B' and an 'L' side by side."
            width={28}
            height={28}
          />
          <span className="text-[15px] font-bold text-slate-200">Bridget Larcher</span>
        </Link>
        <div className="flex items-center gap-5 sm:gap-8">
          <NavLinks />
          <Button href={socialLinks.resume.href} external>
            Resume
          </Button>
        </div>
      </div>
    </nav>
  )
}
