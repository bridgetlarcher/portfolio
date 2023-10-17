'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

import { GitHub, LinkedIn } from '@mui/icons-material'

import { SectionTitle } from '@/components/SectionTitle'
import { TimelineListItem } from '@/components/TimelineListItem'
import { ProjectItem } from '@/components/ProjectItem'

import { projects } from './projects'
import { workExperience } from './timeline'

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('section-about')

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

  return (
    <div className="relative flex flex-col gap-4 scroll-smooth px-12 lg:flex-row lg:p-0">
      {/* Left sidebar */}
      <aside className="flex lg:sticky lg:left-0 lg:top-0 lg:h-screen lg:w-[43vw] lg:text-right">
        <div className="lg:text-md flex w-full flex-col gap-5 pt-24 lg:px-24">
          <div className="flex gap-4 lg:justify-end">
            <a href="https://www.linkedin.com/in/bridgetlarcher/">
              <LinkedIn fontSize="large" className="social-media-button" />
            </a>
            <a href="https://github.com/bridgetlarcher">
              <GitHub fontSize="large" className="social-media-button" />
            </a>
          </div>
          <span className="flex items-center justify-end gap-4">
            <Image
              src="/favicon.png"
              alt="Logo. A backwards 'B' and an 'L' side by side."
              width={60}
              height={60}
            />
            <span className="text-2xl">—</span>
            <h1 className="gradient-text lg:text-4xl">Bridget Larcher</h1>
          </span>
          <span className="text-slate-200">Frontend developer, designer, and problem solver.</span>
          <span>
            With a passion for <span className="power-underline">user-centric innovation</span> and
            a proven track record of leading high-impact user experience projects, I thrive on
            creating and shipping projects that <span className="power-underline">wow people</span>.
          </span>
          <nav className="hidden text-center text-xs font-medium uppercase text-gray-400 md:block">
            <ul className="-mb-px flex flex-col flex-wrap items-end">
              <li className="mr-2">
                <a
                  href="#section-about"
                  className={`${
                    activeSection === 'section-about'
                      ? `border-accent text-accent`
                      : `border-transparent transition delay-150 duration-300 ease-in-out hover:border-gray-300 hover:text-gray-300`
                  } inline-block border-r-2 p-4`}
                >
                  About
                </a>
              </li>
              <li className="mr-2">
                <a
                  href="#section-work"
                  className={`${
                    activeSection === 'section-work'
                      ? `border-accent text-accent`
                      : `border-transparent transition delay-150 duration-300 ease-in-out hover:border-gray-300 hover:text-gray-300`
                  } inline-block border-r-2 p-4`}
                >
                  Work Experience
                </a>
              </li>
              <li className="mr-2">
                <a
                  href="#section-projects"
                  className={`${
                    activeSection === 'section-projects'
                      ? `border-accent text-accent`
                      : `border-transparent transition delay-150 duration-300 ease-in-out hover:border-gray-300 hover:text-gray-300`
                  } inline-block border-r-2 p-4`}
                >
                  Projects
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      {/* Right sidebar */}
      <main className="flex flex-col gap-8 pt-8 lg:mt-12 lg:max-w-[57vw] lg:px-12">
        <section id="section-about">
          <SectionTitle title="About" />
          <div className="flex flex-col gap-4 px-4">
            <span>
              Back in the early 2000s, before my teenage years, I was{' '}
              <span className="italic">obsessed</span> with a game called Neopets. I spent all of my
              free time creating rudimentary graphics and copying code by hand (I had no clue what
              CTRL+C and CTRL+V were). As I grew into my teenage years, I asked for Photoshop for my
              thirteenth birthday and committed myself to learning the ropes of web design and
              development through hands-on experience.
            </span>
            <span>
              Now, after years of experience as a frontend developer and designer, I've built and
              shipped web applications for people and companies of all sorts: a{' '}
              <a href="https://www.capitalone.com/" target="_blank">
                fortune-500 corporation
              </a>
              , a{' '}
              <a href="https://vthacks.com/" target="_blank">
                student-led hackathon
              </a>
              , a{' '}
              <a href="https://www.mitre.org/" target="_blank">
                government agency
              </a>
              , and an{' '}
              <a href="https://www.tinyhood.com/" target="_blank">
                ultra-small startup
              </a>
              .
            </span>
            <span>
              In my spare time, I'm usually gaming, writing, or hanging out with my two cats.
            </span>
            <span>
              Interested? View my full resume{' '}
              <a
                href="https://drive.google.com/file/d/1IDFKdb3-aDFqFBfx4bAP9JGA9CwApnBc/view?usp=sharing"
                target="_blank"
              >
                here
              </a>
              !
            </span>
          </div>
        </section>
        <section id="section-work">
          <SectionTitle title="Work Experience" />
          <div className="flex flex-col gap-4 px-4">
            <ol className="relative border-l border-gray-700">
              {workExperience.map((workItem) => (
                <TimelineListItem key={workItem.dates} item={workItem} />
              ))}
            </ol>
          </div>
        </section>
        <section id="section-projects">
          <SectionTitle title="Projects" />
          <div className="flex flex-col items-center gap-4 px-4">
            {projects.map((project) => (
              <ProjectItem key={project.title} item={project} />
            ))}
          </div>
        </section>
        <footer className="mb-12 mt-4">
          Designed in Figma. Developed in Next.js and TailwindCSS. Deployed with Vercel.
        </footer>
      </main>
    </div>
  )
}
