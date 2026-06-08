import SectionDivider from "@/components/ui/SectionDivider";

export default function HowIThink() {
  return (
    <section>
      <SectionDivider label="HOW I THINK" />
      <div className="px-5 py-6">
        <p className="font-sans text-[12px] leading-[1.8] text-grey-600">
          I don&apos;t start with the solution. I start with the problem. Most
          digital presence issues aren&apos;t actually design problems —
          they&apos;re clarity problems. Most workflow problems aren&apos;t
          efficiency problems — they&apos;re architecture problems. I build
          things that fix the actual issue, not the symptom.
        </p>
      </div>
    </section>
  );
}
