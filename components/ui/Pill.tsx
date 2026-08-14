type Props = {
  text: string
}

export function Pill({ text }: Props) {
  return (
    <li className="rounded-full bg-primary-300/10 px-4 py-1 text-xs text-primary-300">{text}</li>
  )
}
