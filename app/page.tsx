import { Hero } from '@/components/home/Hero'
import { SelectedWork } from '@/components/home/SelectedWork'
import { About } from '@/components/home/About'
import { Contact } from '@/components/home/Contact'

export default function Home() {
  return (
    <div className="relative grow">
      <div className="noise-overlay" aria-hidden="true"></div>
      <div className="vignette" aria-hidden="true"></div>
      <div className="container-page">
        <Hero />
        <main id="main-content">
          <SelectedWork />
          <About />
          <Contact />
        </main>
      </div>
    </div>
  )
}
