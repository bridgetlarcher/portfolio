'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import { GitHub, LinkedIn, Description } from '@mui/icons-material'

import { SectionHeader } from '@/components/SectionHeader'
import { TimelineListItem } from '@/components/TimelineListItem'
import { TimelineAsideRow } from '@/components/TimelineAsideRow'
import { PortfolioListItem } from '@/components/PortfolioListItem'

import { projects } from '../types/projects'
import { workExperience } from '../types/timeline'

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navItems = [
    { id: 'section-about', label: 'About' },
    { id: 'section-work', label: 'Experience' },
    { id: 'section-projects', label: 'Projects' },
  ]

  return (
    <div className="relative flex flex-col gap-4 scroll-smooth px-6 lg:flex-row lg:p-0">
      <aside className="flex pt-12 lg:sticky lg:left-0 lg:top-0 lg:h-screen lg:p-12 xl:flex-shrink xl:p-24">
        <section className="flex flex-col gap-5 lg:w-[37vw] xl:w-[450px]" aria-label="Profile">
          <span className="flex items-center gap-4">
            <Image
              src="/favicon.png"
              alt="Logo. A backwards 'B' and an 'L' side by side."
              width={60}
              height={60}
            />
            <span className="text-2xl" aria-hidden="true">
              —
            </span>
            <h1 className="gradient-text text-center lg:text-4xl">Bridget Larcher</h1>
          </span>
          <p className="text-xl font-medium text-slate-200">
            Product Designer &amp; Front-End Engineer
          </p>
          <p>
            Product designer and front-end engineer with a soft spot for the messy middle, where
            design becomes code.
          </p>
          <p>
            I built a startup's design function from the ground up: the team, the brand, and the
            design system. Then I shipped a self-initiated feature that increased signups 34% and
            cut drop-off 10%.
          </p>

          <div className="mt-2 flex items-center gap-3.5">
            <a
              href={process.env.RESUME}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-button-lg"
            >
              <Description fontSize="small" aria-hidden="true" />
              View Resume
            </a>
            <a
              href="https://github.com/bridgetlarcher"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="nav-button-sm"
            >
              <GitHub fontSize="medium" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/bridgetlarcher/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="nav-button-sm"
            >
              <LinkedIn fontSize="medium" aria-hidden="true" />
            </a>
          </div>

          <nav className="hidden text-xs uppercase lg:mt-6 lg:flex" aria-label="Page sections">
            <ul className="flex flex-col gap-1">
              {navItems.map((navItem) => {
                const isActive = activeSection === navItem.id
                return (
                  <li key={navItem.id}>
                    <a
                      href={`#${navItem.id}`}
                      aria-current={isActive ? 'true' : undefined}
                      className={`inline-flex items-center gap-3 py-2 tracking-[.15em] no-underline ${
                        isActive
                          ? 'text-accent'
                          : 'text-slate-400 transition delay-150 duration-300 ease-in-out hover:text-accent'
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`inline-block h-0.5 transition-all duration-300 ease-in-out ${
                          isActive ? 'w-12 bg-accent' : 'w-6 bg-slate-600'
                        }`}
                      ></span>
                      {navItem.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </section>
      </aside>
      <main
        id="main-content"
        className="flex flex-col gap-8 pb-12 pt-8 lg:w-[50vw] xl:flex-grow xl:px-36 xl:pt-24"
      >
        <section id="section-about">
          <SectionHeader text="About" />
          <div className="flex flex-col gap-4 px-4">
            <p>
              Back in the early 2000s, before my teenage years, I was{' '}
              <span className="italic">obsessed</span> with a game called Neopets. I spent all of my
              free time creating rudimentary graphics and copying code by hand (I had no clue what
              CTRL+C and CTRL+V were). As I grew into my teenage years, I asked for Photoshop for my
              thirteenth birthday and committed myself to learning the ropes of web design and
              development through hands-on experience.
            </p>
            <p>
              Now, after years of experience as a frontend developer and designer, I've built and
              shipped web applications for people and companies of all sorts, like a{' '}
              <a href="https://www.capitalone.com/" target="_blank" rel="noopener noreferrer">
                fortune-500 corporation
              </a>
              , a{' '}
              <a href="https://vthacks.com/" target="_blank" rel="noopener noreferrer">
                student-led hackathon
              </a>
              , a{' '}
              <a href="https://www.mitre.org/" target="_blank" rel="noopener noreferrer">
                government agency
              </a>
              , and a handful of startups (
              <a href="https://www.tinyhood.com/" target="_blank" rel="noopener noreferrer">
                1
              </a>
              ,{' '}
              <a href="https://www.cary.health/" target="_blank" rel="noopener noreferrer">
                2
              </a>
              ).
            </p>
            <p>In my spare time, I'm usually gaming, writing, or hanging out with my two cats.</p>
          </div>
        </section>
        <section id="section-work">
          <SectionHeader text="Experience" />
          <div className="flex flex-col px-4">
            {workExperience
              .filter((workItem) => workItem.type === 'mainExperience')
              .map((workItem, index) => (
                <TimelineListItem key={workItem.dates} item={workItem} />
              ))}
            <TimelineAsideRow
              dates="2015 — 2017"
              items={workExperience.filter((workItem) => workItem.type === 'earlyExperience')}
            />
          </div>
        </section>
        <section id="section-projects">
          <SectionHeader text="Projects" />
          <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2">
            {projects.map((project) => (
              <PortfolioListItem key={project.title} item={project} />
            ))}
          </div>
        </section>
        <footer className="mt-8 flex flex-col gap-2 text-center">
          <span>
            Designed in Figma. Developed in Next.js and TailwindCSS. Deployed with Vercel.
          </span>
          <span>
            All with love by{' '}
            <a href="https://www.linkedin.com/in/bridgetlarcher/" rel="noopener noreferrer">
              Bridget Larcher
            </a>
            .
          </span>
        </footer>
      </main>
    </div>
  )
}
