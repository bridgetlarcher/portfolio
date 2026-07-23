type Props = {
  text: string
}

export function Pill({ text }: Props) {
  return (
    <span className="bg-accent-300/10 text-accent-300 rounded-full px-4 py-1 text-xs">{text}</span>
  )
}
