import { PillRow } from '@/components/PillRow'
import { SectionTitle } from '@/components/SectionTitle'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative flex flex-col gap-4 px-12 lg:flex-row lg:p-0">
      {/* Left sidebar */}
      <aside className="flex lg:sticky lg:left-0 lg:top-0 lg:h-screen lg:w-[43vw]">
        <div className="lg:text-md flex w-full flex-col gap-5 pt-24 lg:px-28">
          <span className="animate-text bg-gradient-to-r from-primary-400 via-accent to-primary-100 bg-clip-text text-2xl font-black text-transparent lg:text-4xl">
            Bridget Larcher
          </span>
          <span className="text-slate-200">Frontend developer, designer, and problem solver.</span>
          <span>
            With a passion for <span className="power-underline">user-centric innovation</span> and
            a proven track record of leading high-impact user experience projects, I thrive on
            creating and shipping projects that <span className="power-underline">wow people.</span>
          </span>
          <nav className="hidden lg:flex">
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#about">About</a>
              </li>
              <li>Skills & Proficiencies</li>
              <li>My Work</li>
            </ul>
          </nav>
        </div>
      </aside>
      {/* Right sidebar */}
      <main className="flex flex-col gap-8 pt-8 lg:mt-12 lg:max-w-[57vw] lg:px-12">
        <section id="about" className="flex flex-col gap-4">
          <SectionTitle title="About" />
          <span>
            Back in the early 2000s, before my teenage years, I was{' '}
            <span className="italic">obsessed</span> with a game called Neopets . I spent all of my
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
        </section>
        <section id="skills" className="flex flex-col gap-4">
          <SectionTitle title="Skills & Proficiencies" />
          <div className="flex flex-col gap-4">
            <div className="">
              <div className="mb-2 font-bold text-slate-200">Frontend Development</div>
              <div className="flex flex-col gap-4 px-2">
                I craft clean and efficient code that offers the perfect canvas for creativity.
                <PillRow
                  title="Languages & Frameworks"
                  pills={['React', 'Next.js', 'Vue', 'Nuxt', 'Javascript', 'Typescript']}
                />
                <PillRow
                  title="Libraries"
                  pills={['Axios', 'TailwindCSS', 'Node.js', 'SASS', 'Material UI', 'Jest']}
                />
                <PillRow title="Dev Tools" pills={['Vercel', 'AWS', 'Docker', 'Jira', 'Git']} />
              </div>
            </div>
            <div className="">
              <div className="mb-2 font-bold text-slate-200">UI/UX Design</div>
              <div className="flex flex-col gap-4 px-2">
                I love guiding users through a seamless journey, from the initial spark of ideation
                to the intricate details of mocking.
                <PillRow
                  title="Design Tools"
                  pills={['Figma', 'Adobe XD', 'Adobe Photoshop', 'Mural']}
                />
              </div>
            </div>
          </div>
        </section>
        <section id="work" className="flex flex-col gap-4">
          <SectionTitle title="Work" />
        </section>
      </main>
    </div>
  )
}
