type Props = {
  text: string
}

export function SectionSubheader({ text }: Props) {
  return <h3 className="text-sm font-semibold uppercase">{text}</h3>
}
