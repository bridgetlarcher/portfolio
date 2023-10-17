type Props = {
  href: string
  text: string
}

export function AnimatedLink({ href, text }: Props) {
  return (
    <a href={href} className="group text-accent transition duration-300">
      {text}
      <span className="block h-0.5 max-w-0 bg-accent transition-all duration-500 group-hover:max-w-full"></span>
    </a>
  )
}
