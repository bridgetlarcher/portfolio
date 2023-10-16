import { Pill } from './Pill'

type Props = {
  title?: string
  pills: string[]
}

export function PillRow({ title, pills }: Props) {
  return (
    <span>
      {title && <div className="mb-2 text-sm text-slate-300">{title}</div>}
      <div className={title && 'ml-4'}>
        <div className="flex flex-row flex-wrap gap-2">
          {pills.map((pill) => (
            <Pill text={pill} />
          ))}
        </div>
      </div>
    </span>
  )
}
