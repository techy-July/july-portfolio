import { Check, Clock } from "lucide-react";
import Button from "@/components/ui/Button";
import { SOCIAL_THREADS } from "@/lib/constants";
import type { PricingPlanData } from "@/types";

export default function PricingCard({
  tag,
  featured,
  title,
  description,
  priceUSD,
  priceSGD,
  features,
  note,
  deliveryTime,
  ctaLabel,
  ctaHref,
}: PricingPlanData) {
  return (
    <div
      className={`flex flex-col rounded-[10px] p-4 ${
        featured
          ? "border-2 border-teal-base bg-lavender-xlight"
          : "border border-grey-200 bg-white"
      }`}
    >
      {/* Tag */}
      <span
        className={`mb-3 w-fit rounded-full px-[10px] py-[3px] font-sans text-[9px] uppercase tracking-[0.10em] ${
          featured
            ? "bg-teal-base text-white"
            : "border border-grey-200 bg-grey-50 text-grey-600"
        }`}
      >
        {tag}
      </span>

      {/* Title + description */}
      <h3 className="font-serif text-[20px] font-semibold text-grey-900">
        {title}
      </h3>
      <p className="mb-3 font-sans text-[11px] leading-[1.6] text-grey-600">
        {description}
      </p>

      {/* Price */}
      <div className="mb-3 space-y-1">
        <p className="font-serif text-[28px] font-bold leading-none text-grey-900">
          {priceUSD}
        </p>
        <p className="font-sans text-[10px] text-grey-400">{priceSGD}</p>
      </div>

      <hr className="mb-4 border-t border-grey-200" />

      {/* Features */}
      <p className="mb-2 font-sans text-[9px] uppercase tracking-[0.10em] text-grey-400">
        What you walk away with
      </p>
      <ul className="mb-4 flex flex-col gap-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <Check
              size={14}
              className="mt-[2px] flex-shrink-0 text-teal-base"
            />
            <span className="font-sans text-[11px] leading-[1.5] text-grey-700">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* Optional note */}
      {note && (
        <p className="mb-4 rounded-[8px] border border-grey-200 bg-grey-50 p-2 font-sans text-[10px] leading-[1.5] text-grey-600">
          {note}
        </p>
      )}

      {/* Footer */}
      <div className="mt-auto flex flex-col gap-3 pt-2">
        <div className="flex items-center gap-1 font-sans text-[10px] text-grey-400">
          <Clock size={12} />
          <span>{deliveryTime}</span>
        </div>
        <Button
          variant={featured ? "primary" : "ghost"}
          href={ctaHref}
          className="block w-full text-center"
        >
          {ctaLabel}
        </Button>
        <p className="text-center font-sans text-[10px] text-grey-400">
          or DM me on Threads{" "}
          <a
            href={SOCIAL_THREADS}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lavender-mid hover:underline"
          >
            @simplytechbyjuly
          </a>
          .
        </p>
      </div>
    </div>
  );
}
