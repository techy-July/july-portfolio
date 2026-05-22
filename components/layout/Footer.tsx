import Link from "next/link";
import Button from "@/components/ui/Button";
import ExternalLink from "@/components/ui/ExternalLink";
import {
  BRAND_NAME,
  MAILTO_GENERAL,
  SOCIAL_INSTAGRAM,
  SOCIAL_THREADS,
  SOCIAL_TIKTOK,
  SOCIAL_YOUTUBE,
  SOCIAL_KOFI,
} from "@/lib/constants";
import { Icons } from "@/components/ui/Icons";

const serviceLinks = [
  { label: "Digitalizing your Brand", href: "/brand"},
  { label: "UGC Collaborations", href: "/ugc" },
  { label: "Product Shops", href: null }, // disabled — Phase 2
];

const socialLinks = [
  {
    label: "@simplytechbyjuly",
    href: SOCIAL_INSTAGRAM,
    srLabel: "Instagram (opens in new tab)",
    icons: Icons.Instagram_Icon,
  },
  {
    label: "@simplytechbyjuly",
    href: SOCIAL_THREADS,
    srLabel: "Threads (opens in new tab)",
    icons: Icons.Threads_Icon,
  },
  {
    label: "@techy_July",
    href: SOCIAL_TIKTOK,
    srLabel: "TikTok (opens in new tab)",
    icons: Icons.Tiktok_Icon,
  },
  {
    label: "@July-in-tech",
    href: SOCIAL_YOUTUBE,
    srLabel: "YouTube (opens in new tab)",
    icons: Icons.Youtube_Icon,
  }, 
  {
    label: "@July",
    href: SOCIAL_KOFI,
    srLabel: "Ko-fi (opens in new tab)",
    icons: Icons.Kofi_Icon,
  },
];

interface FooterProps {
  ctaLabel?: string;
  ctaHref?: string;
}

export default function Footer({
  ctaLabel = "Reach out",
  ctaHref = MAILTO_GENERAL,
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer>
      {/* CTA block */}
      <div className="bg-teal-base px-5 py-8 text-center">
        <h2 className="mb-2 font-serif text-[26px] leading-tight text-on-dark font-bold">
          Ready to work
          <br />
          <em className="italic text-lavender-soft">together?</em>
        </h2>
        <p className="mb-6 font-sans text-[11px] text-on-dark-sub">
          Whether you need a brand built, a collaboration arranged, or just a
          good template to get started, the door is open.
        </p>
        <Button variant="secondary" href={ctaHref}>
          {ctaLabel}
        </Button>
      </div>

      {/* Links grid */}
      <div className="bg-teal-xdark border-t border-teal-muted px-5 py-5">
        <div className="grid grid-cols-2 gap-8">
          {/* Brand info + description */}
          <div className="gap-2 flex flex-col">
            <span className="font-serif text-[14px] text-white">
              Simply<span className="italic text-lavender-mid">Tech</span>ByJuly
            </span>
            <p className="text-grey-400 text-[9px]">
              Brand Digitalization, UGC Collabs, and Digital products — built
              with intention, delivered with clarity.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="mt-2 font-sans text-[8px] uppercase tracking-[0.12em] text-on-dark-muted">
              Services
            </p>
            <ul className="space-y-1">
              {serviceLinks.map(({ label, href }) => (
                <li key={label}>
                  {href ? (
                    <Link
                      href={href}
                      className="font-sans text-[10px] text-on-dark-sub hover:text-on-dark underline"
                    >
                      {label}
                    </Link>
                  ) : (
                    <span className="font-sans text-[10px] text-on-dark-muted">
                      {label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-3 border-t border-teal-muted pt-3">
          <span className="font-sans text-[8px] uppercase tracking-[0.12em] text-on-dark-muted">
            Connect
          </span>
          <div className="mt-2 grid grid-cols-3 gap-x-2 gap-y-2">
            {socialLinks.map(({ label, href, srLabel, icons: Icon }) => (
              <ExternalLink
                key={label}
                href={href}
                srLabel={srLabel}
                className="flex items-center gap-1.5 font-sans text-[9px] text-on-dark-sub hover:text-on-dark"
              >
                <Icon />
                <span>{label}</span>
              </ExternalLink>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-4 flex items-center justify-between pt-3">
          <p className="font-sans text-[8px] text-on-dark-muted">
            © {year} {BRAND_NAME} . All rights reserved.
          </p>
          <p className="font-sans text-[8px] text-on-dark-muted">
            Brand it. Ship it. Own it.
          </p>
        </div>
      </div>
    </footer>
  );
}
