import type { Metadata } from "next";
import SectionDivider from "@/components/ui/SectionDivider";
import ProductCatalog from "@/components/products/ProductCatalog";
import { PRODUCTS } from "@/lib/constants";
import Footer from "@/components/layout/Footer";
import { productsMetadata } from "@/lib/metadata";

export const metadata: Metadata = productsMetadata;

export default function ProductsPage() {
  return (
    <div className="flex flex-1 flex-col bg-grey-50">
      <div className="px-5 pt-3">
        <p className="font-sans text-[9px] uppercase tracking-[0.12em] text-grey-400">
          DIGITAL PRODUCTS
        </p>
        <h1 className="mb-4 font-serif text-[20px] font-normal leading-[1.05] text-grey-900">
          July&apos;s creative space
        </h1>
      </div>

      <div className="my-5 flex-1">
        <ProductCatalog products={PRODUCTS} />
      </div>

      <Footer />
    </div>
  );
}
