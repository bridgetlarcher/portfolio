type Props = {
  text: string
}

export function Pill({ text }: Props) {
  return <span className="rounded-full bg-accent/10 px-2 py-1 text-xs text-accent">{text}</span>
}
