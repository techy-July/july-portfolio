import { STATS } from '@/lib/constants'

export default function StatsRow() {
  return (
    <div className="mx-5 grid grid-cols-3 divide-x divide-grey-200 border border-grey-200 rounded-[8px]">
      {STATS.map(({ value, label }) => (
        <div key={label} className="flex flex-col items-center py-3">
          <span className="font-sans text-[13px] font-medium text-grey-800">{value}</span>
          <span className="font-sans text-[9px] uppercase tracking-[0.10em] text-grey-400">
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}
