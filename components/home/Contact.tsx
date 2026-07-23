import { Section } from '@/components/ui/Section'
import { TextLink } from '@/components/ui/TextLink'
import { SocialButtons } from '@/components/ui/SocialButtons'

export function Contact() {
  return (
    <Section id="contact" title="Contact" type="home">
      <div className="flex flex-col gap-6 py-10">
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
