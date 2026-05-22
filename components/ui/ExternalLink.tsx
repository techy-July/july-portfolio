interface ExternalLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  srLabel?: string
}

export default function ExternalLink({
  href,
  children,
  className,
  srLabel = '(opens in new tab)',
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
      <span className="sr-only">{srLabel}</span>
    </a>
  )
}
