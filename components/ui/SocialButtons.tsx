import { Button } from '@/components/ui/Button'
import { socialLinks, SocialKey } from '@/lib/socialLinks'

type Props = {
  links: SocialKey[]
  size: 'icon' | 'sm'
  variant?: 'ghost' | 'solid'
}

export function SocialButtons({ links, size, variant = 'ghost' }: Props) {
  return (
    <>
      {links.map((key) => {
        const { href, label, icon: Icon, aria } = socialLinks[key]
        return (
          <Button
            key={key}
            href={href}
            external
            variant={variant}
            size={size}
            ariaLabel={size === 'icon' ? aria : undefined}
          >
            {size === 'icon' ? <Icon fontSize="medium" aria-hidden="true" /> : label}
          </Button>
        )
      })}
    </>
  )
}
