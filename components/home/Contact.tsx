import { Section } from '@/components/ui/Section'
import { TextLink } from '@/components/ui/TextLink'
import { SocialButtons } from '@/components/ui/SocialButtons'

export function Contact() {
  return (
    <Section id="contact" title="Contact" type="home">
      <div className="relative flex flex-col gap-6 py-10">
        <div
          aria-hidden="true"
          className="bg-secondary-800 pointer-events-none absolute -bottom-12 left-9 -z-10 hidden h-[300px] w-[300px] rounded-full opacity-30 blur-3xl lg:block"
        />
        <TextLink
          href="mailto:bridgetlarcher@gmail.com"
          className="self-start text-lg font-black text-slate-200 sm:text-2xl md:text-[34px]"
        >
          bridgetlarcher@gmail.com
        </TextLink>
        <div className="flex flex-wrap gap-5">
          <SocialButtons links={['linkedin', 'github', 'resume']} size="sm" />
        </div>
      </div>
    </Section>
  )
}
