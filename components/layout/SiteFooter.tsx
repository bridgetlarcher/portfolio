import Image from 'next/image'

export function SiteFooter() {
  return (
    <div className="container-page">
      <footer className="border-hairline flex flex-col items-center justify-between gap-4 border-t py-7 sm:flex-row">
        <span className="text-sm italic text-slate-400">Made with love by Bridget Larcher.</span>
        <Image
          src="/favicon.png"
          alt=""
          width={22}
          height={22}
          className="opacity-70"
          aria-hidden="true"
        />
      </footer>
    </div>
  )
}
