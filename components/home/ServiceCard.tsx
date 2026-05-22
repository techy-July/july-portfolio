interface ServiceCardProps {
  title: string
  description: string
  ctaLabel: string
  ctaHref: string
  ctaDisabled?: boolean
  bgClassName: string
  icon: React.ReactNode
}

export default function ServiceCard({
  title,
  description,
  ctaLabel,
  ctaHref,
  ctaDisabled,
  bgClassName,
  icon,
}: ServiceCardProps) {
  return (
    <div className={`rounded-[10px] p-4 ${bgClassName}`}>
      <div className="mb-2 flex items-center gap-2">
        <span className="flex-shrink-0">{icon}</span>
        <h3 className="font-sans text-[16px] font-semibold text-grey-800">{title}</h3>
      </div>
      <p className="mb-3 font-sans text-[11px] leading-[1.5] text-grey-600">{description}</p>
      {ctaDisabled ? (
        <span className="pointer-events-none cursor-default border-b border-grey-200 font-sans text-[11px] text-grey-400">
          {ctaLabel}
        </span>
      ) : (
        <a
          href={ctaHref}
          className="border-b border-grey-200 font-sans text-[11px] text-grey-800 hover:text-grey-900  underline"
        >
          {ctaLabel}
        </a>
      )}
    </div>
  )
}
