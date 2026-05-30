"use client";

import { useState } from "react";
import type { ProductData, ProductCategory } from "@/types";
import ProductCard from "./ProductCard";

type Tab = "all" | ProductCategory;

const TABS: { label: string; value: Tab }[] = [
  { label: "All", value: "all" },
  // { label: "Templates", value: "template" },
  { label: "Checklists", value: "checklist" },
  { label: "Prompt Packs", value: "prompt-pack" },
  // { label: "Affiliates", value: "affiliate" },
];

export default function ProductCatalog({
  products,
}: {
  products: ProductData[];
}) {
  const [activeTab, setActiveTab] = useState<Tab>("all");

  const filtered =
    activeTab === "all"
      ? products
      : products.filter((p) => p.category === activeTab);

  return (
    <div>
      {/* Tab bar — horizontally scrollable on mobile */}
      <div className="flex gap-2 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {TABS.map((tab) => (
          <button
            key={tab.value}
            type="button"
            onClick={() => setActiveTab(tab.value)}
            className={`flex-shrink-0 rounded-full px-4 py-[6px] font-sans text-[11px] uppercase tracking-[0.08em] transition-colors duration-150 ${
              activeTab === tab.value
                ? "bg-grey-900 text-white"
                : "bg-grey-100 text-grey-600 hover:bg-grey-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Product grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 gap-3 px-5">
          {filtered.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <p className="px-5 py-12 text-center font-sans text-[12px] text-grey-400">
          Nothing here yet — check back soon.
        </p>
      )}
    </div>
  );
}
