import { Card } from '../ui/Card'

type Props = {
  stat?: string
  header?: string
  label: string | React.ReactNode
  size?: 'lg' | 'sm'
  className?: string
}

export function CalloutCard({ stat, header, label, size = 'lg', className }: Props) {
  return (
    <Card
      className={`!border-primary-300/30 flex flex-col gap-1 ${
        size === 'sm' ? 'px-5 py-4' : 'p-6'
      }${className ? ` ${className}` : ''}`}
    >
      {stat && (
        <span
          className={`text-primary-300 font-black leading-tight ${
            size === 'sm' ? 'text-2xl' : 'text-4xl'
          }`}
        >
          {stat}
        </span>
      )}
      {header && <span className="text-primary-300 text-lg font-bold">{header}</span>}
      {label}
    </Card>
  )
}
