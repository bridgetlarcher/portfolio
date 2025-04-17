'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import { GitHub, LinkedIn, Description } from '@mui/icons-material'

import { SectionHeader } from '@/components/SectionHeader'
import { TimelineListItem } from '@/components/TimelineListItem'
import { ProjectListItem } from '@/components/ProjectListItem'

import { projects } from '../types/projects'
import { workExperience } from '../types/timeline'

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('')
  const activeNavStyle = 'border-accent text-accent '
  const inactiveNavStyle =
    'border-transparent transition delay-150 duration-300 ease-in-out hover:text-accent '

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
    <div className="relative flex flex-col gap-4 scroll-smooth px-6 lg:flex-row lg:p-0">
      <aside className="flex pt-12 lg:sticky lg:left-0 lg:top-0 lg:h-screen lg:justify-end lg:p-12 lg:text-right xl:flex-shrink xl:p-24">
        <section className="flex flex-col gap-5 lg:w-[37vw] lg:items-end xl:w-[450px]">
          <div className="flex gap-4 lg:justify-end">
            <a href="https://github.com/bridgetlarcher" target="_blank">
              <GitHub fontSize="large" className="social-media-button" />
            </a>
            <a href="https://www.linkedin.com/in/bridgetlarcher/" target="_blank">
              <LinkedIn fontSize="large" className="social-media-button" />
            </a>
            <a href={process.env.RESUME} target="_blank">
              <Description fontSize="large" className="social-media-button" />
            </a>
          </div>
          <span className="flex items-center gap-4 lg:justify-end">
            <Image
              src="/favicon.png"
              alt="Logo. A backwards 'B' and an 'L' side by side."
              width={60}
              height={60}
            />
            <span className="text-2xl">—</span>
            <h1 className="gradient-text text-center lg:text-4xl">Bridget Larcher</h1>
          </span>
          <span>Frontend developer, designer, and problem solver.</span>
          <span>
            With a passion for <span className="power-underline">user-centric innovation</span> and
            a proven track record of leading high-impact user experience projects, I thrive on
            creating and shipping <span className="power-underline">projects that wow people</span>.
          </span>
          <nav className="hidden text-center text-xs uppercase lg:flex">
            <ul className="flex flex-col items-end">
              <li className="mr-2">
                <a
                  href="#section-about"
                  className={`${
                    activeSection === 'section-about' ? activeNavStyle : inactiveNavStyle
                  } inline-block border-r-2 p-4 no-underline`}
                >
                  About
                </a>
              </li>
              <li className="mr-2">
                <a
                  href="#section-work"
                  className={`${
                    activeSection === 'section-work' ? activeNavStyle : inactiveNavStyle
                  } inline-block border-r-2 p-4 no-underline`}
                >
                  Work Experience
                </a>
              </li>
              <li className="mr-2">
                <a
                  href="#section-projects"
                  className={`${
                    activeSection === 'section-projects' ? activeNavStyle : inactiveNavStyle
                  } inline-block border-r-2 p-4 no-underline`}
                >
                  Projects
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </aside>
      <main className="flex flex-col gap-8 pb-12 pt-8 lg:w-[50vw] xl:flex-grow xl:px-36 xl:pt-24">
        <section id="section-about">
          <SectionHeader text="About" />
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
              shipped web applications for people and companies of all sorts, like a{' '}
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
              , and a handful of startups (
              <a href="https://www.tinyhood.com/" target="_blank">
                1
              </a>
              ,{' '}
              <a href="https://www.cary.health/" target="_blank">
                2
              </a>
              ).
            </span>
            <span>
              In my spare time, I'm usually gaming, writing, or hanging out with my two cats.
            </span>
            <span>
              Want to learn more? View my full resume{' '}
              <a href={process.env.RESUME} target="_blank">
                here
              </a>
              !
            </span>
          </div>
        </section>
        <section id="section-work">
          <SectionHeader text="Work Experience" />
          <div className="flex flex-col gap-4 px-4">
            <ol className="relative border-l border-gray-700">
              {workExperience.map((workItem) => (
                <TimelineListItem key={workItem.dates} item={workItem} />
              ))}
            </ol>
          </div>
        </section>
        <section id="section-projects">
          <SectionHeader text="Projects" />
          <div className="flex flex-col items-center gap-4 px-4 xl:flex-row xl:flex-wrap xl:items-start xl:justify-center">
            {projects.map((project) => (
              <ProjectListItem key={project.title} item={project} />
            ))}
          </div>
        </section>
        <footer className="mt-8 flex flex-col gap-2 text-center">
          <span>
            Designed in Figma. Developed in Next.js and TailwindCSS. Deployed with Vercel.
          </span>
          <span>
            All with love by{' '}
            <a href="https://www.linkedin.com/in/bridgetlarcher/">Bridget Larcher</a>.
          </span>
        </footer>
      </main>
    </div>
  )
}
