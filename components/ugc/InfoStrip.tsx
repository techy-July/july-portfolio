const columns = [
  { label: 'FORMAT', value: 'Short-form video' },
  { label: 'PLATFORM', value: 'TikTok . Reels' },
  { label: 'NICHE', value: 'Tech . Lifestyle' },
]

export default function InfoStrip() {
  return (
    <div className="grid grid-cols-3 border-b border-t border-grey-200">
      {columns.map(({ label, value }, index) => (
        <div
          key={label}
          className={`px-3 py-[10px] ${index < 2 ? 'border-r border-grey-200' : ''}`}
        >
          <p className="mb-1 font-sans text-[8px] uppercase tracking-[0.12em] text-grey-400">
            {label}
          </p>
          <p className="font-sans text-[12px] text-grey-800">{value}</p>
        </div>
      ))}
    </div>
  )
}
