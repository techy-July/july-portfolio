import Image from "next/image";
import Pill from "@/components/ui/Pill";
import type { ProductData } from "@/types";

const categoryLabel: Record<ProductData["category"], string> = {
  // template: "Template",
  checklist: "Checklist",
  "prompt-pack": "Prompt Pack",
  // affiliate: "Affiliate",
};

export default function ProductCard({
  name,
  description,
  price,
  url,
  image,
  category,
  isFree,
  isBestSeller,
}: ProductData) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-[10px] border border-grey-200 bg-white transition-shadow duration-150 hover:shadow-md"
    >
      {/* Image / grey background */}
      <div className="relative h-[140px] w-full bg-grey-100">
        {image && (
          <Image
            src={`/assets/${image}`}
            alt={name}
            fill
            className="object-cover"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-[6px] p-3">
        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          <Pill
            // variant={category === "affiliate" ? "affiliate-tag" : "product-tag"}
            variant="product-tag"
          >
            {categoryLabel[category]}
          </Pill>
          {isFree && <Pill variant="free-tag">Free</Pill>}
          {isBestSeller && <Pill variant="best-seller">Best Seller</Pill>}
        </div>

        <p className="font-sans text-[13px] font-semibold leading-tight text-grey-900">
          {name}
        </p>
        <p className="font-sans text-[11px] leading-[1.5] text-grey-600">
          {description}
        </p>

        {/* Footer row */}
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="font-sans text-[12px] font-medium text-grey-800">
            {isFree ? "Free" : price}
          </span>
          <span className="rounded-[6px] border border-grey-200 px-3 py-[6px] font-sans text-[10px] font-medium uppercase tracking-[0.06em] text-grey-800 transition-colors duration-150 group-hover:bg-grey-100">
            Get →
          </span>
        </div>
      </div>
    </a>
  );
}
