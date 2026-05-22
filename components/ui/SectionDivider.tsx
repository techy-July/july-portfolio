interface SectionDividerProps {
  label: string
  className?: string
}

export default function SectionDivider({ label, className = '' }: SectionDividerProps) {
  return (
    <div className={`w-full bg-teal-xdark py-2 text-center ${className}`.trim()}>
      <span className="font-sans text-[9px] uppercase tracking-[0.14em] text-on-dark-muted">
        {label}
      </span>
    </div>
  )
}
