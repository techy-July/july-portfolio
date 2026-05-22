import ExternalLink from './ExternalLink'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'text-link'

interface ButtonProps {
  variant: ButtonVariant
  href?: string
  external?: boolean
  children: React.ReactNode
  className?: string
  disabled?: boolean
  srLabel?: string
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-teal-base text-white hover:bg-teal-dark transition-colors duration-150 rounded-[6px] px-5 py-[10px] text-[11px] font-medium tracking-[0.06em] uppercase',
  secondary: 
    'bg-lavender-soft text-lavender-dark hover:bg-lavender-mid transition-colors duration-150 rounded-[6px] px-5 py-[10px] text-[11px] font-bold tracking-[0.06em] uppercase',
  ghost:
    'border border-grey-200 bg-transparent text-grey-800 hover:bg-grey-100 transition-colors duration-150 rounded-[6px] px-[18px] py-[10px] text-[11px] font-medium tracking-[0.06em] uppercase',
  'text-link':
    'bg-transparent text-grey-800 underline decoration-grey-200 hover:text-grey-900 transition-colors duration-150 text-[11px]',
}

export default function Button({
  variant,
  href,
  external,
  children,
  className = '',
  disabled,
  srLabel,
}: ButtonProps) {
  const classes = `${variantClasses[variant]} ${disabled ? 'pointer-events-none opacity-60' : ''} ${className}`.trim()

  if (href) {
    if (external) {
      return (
        <ExternalLink href={href} className={classes} srLabel={srLabel}>
          {children}
        </ExternalLink>
      )
    }
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
