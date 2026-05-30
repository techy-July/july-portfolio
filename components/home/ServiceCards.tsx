import { Gem, Video, Package } from "lucide-react";
import ServiceCard from "./ServiceCard";

const cards = [
  {
    title: "Brand Digitalization",
    description:
      "From strategy to a live branded website — I build your entire digital presence so your brand looks as good online as it does in real life.",
    ctaLabel: "Build your brand with July ›",
    ctaHref: "/brand",
    bgClassName: "bg-lavender-soft",
    icon: <Gem size={20} className="text-lavender-mid" />,
  },
  {
    title: "UGC Brand Collabs",
    description:
      "Authentic, scroll-stopping content made for your brand. I create UGC videos that convert.",
    ctaLabel: "Start a collab with July ›",
    ctaHref: "/ugc",
    bgClassName: "bg-blue-mist",
    icon: <Video size={20} className="text-teal-base" />,
  },
  {
    title: "Digital Products",
    description:
      "Resources, tools and templates built specifically for people who want to move fast and efficient.",
    ctaLabel: "Browse the shop ›",
    ctaHref: "/products",
    bgClassName: "bg-sage-light",
    icon: <Package size={20} className="text-sage-mid" />,
  },
];

export default function ServiceCards() {
  return (
    <section className="flex flex-col gap-2 px-5 py-6">
      {cards.map((card) => (
        <ServiceCard key={card.title} {...card} />
      ))}
    </section>
  );
}
