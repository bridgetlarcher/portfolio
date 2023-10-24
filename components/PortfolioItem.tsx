type Props = {
  title: string
  summary: string
  children: React.ReactNode
}

export function PortfolioItem({ title, summary, children }: Props) {
  return (
    <>
      <h1 className="text-4xl font-black">{title}</h1>
      <h2>
        <blockquote className="border-l-2 border-slate-500 px-4 py-2 italic">{summary}</blockquote>
      </h2>
      {children}
    </>
  )
}
