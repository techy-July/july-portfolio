'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Digitalization', href: '/brand' },
  { label: 'UGC', href: '/ugc' },
  // { label: 'Products', href: '/products' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav
      className="sticky top-0 z-50 flex h-12 w-full items-center justify-between border-b border-grey-200 bg-[#FAF9F7] px-5 drop-shadow-sm"
    >
      <Link href="/" className="font-serif text-[14px] text-grey-900 drop-shadow-md">
        Simply<span className="italic text-lavender-mid">Tech</span>ByJuly
      </Link>

      <div className="flex items-center gap-3">
        {navLinks.map(({ label, href }) => {
          const isActive = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={`font-sans text-[10px] uppercase tracking-[0.10em] transition-colors duration-150 drop-shadow-md ${
                isActive ? 'text-grey-900' : 'text-grey-400 hover:text-grey-800'
              }`}
            >
              {label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
