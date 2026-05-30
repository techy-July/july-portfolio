type PillVariant =
  | "username"
  | "skill"
  | "free-tag"
  | "content-type"
  | "product-tag"
  | "affiliate-tag"
  | "best-seller";

interface PillProps {
  variant: PillVariant;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<PillVariant, string> = {
  username: "bg-lavender-soft text-lavender-mid text-[13px] px-[14px] py-1",
  skill:
    "bg-lavender-xlight border border-grey-200 text-grey-800 text-[11px] px-3 py-1",
  "free-tag":
    "bg-sage-xdark text-sage-mid text-[9px] uppercase tracking-[0.10em] px-[10px] py-[2px]",
  "content-type": "text-white text-[9px] tracking-[0.10em] px-2 py-[3px]",
  "product-tag":
    "bg-sage-light text-sage-xdark text-[9px] uppercase tracking-[0.10em] px-[10px] py-[2px]",
  "affiliate-tag":
    "bg-blue-mist text-teal-xdark text-[9px] uppercase tracking-[0.10em] px-[10px] py-[2px]",
  "best-seller":
    "bg-amber-accent text-white text-[9px] uppercase tracking-[0.10em] px-[10px] py-[2px]",
};

const contentTypeStyle = {
  background: "rgba(255,255,255,0.18)",
  border: "0.5px solid rgba(255,255,255,0.25)",
};

export default function Pill({ variant, children, className = "" }: PillProps) {
  const base =
    `rounded-full inline-flex items-center ${variantClasses[variant]} ${className}`.trim();

  if (variant === "content-type") {
    return (
      <span className={base} style={contentTypeStyle}>
        {children}
      </span>
    );
  }

  return <span className={base}>{children}</span>;
}
