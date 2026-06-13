import SectionDivider from "@/components/ui/SectionDivider";
import { CASE_STUDIES } from "@/lib/constants";

const LABELS = {
  problem: "The problem",
  cost: "Why it mattered",
  built: "What I built",
  result: "The result",
} as const;

export default function ProblemsSolved() {
  return (
    <section>
      <SectionDivider label="PROBLEMS I'VE SOLVED" />

      <div className="flex flex-col gap-3 px-5 py-4">
        {CASE_STUDIES.map((study) => (
          <div
            key={study.id}
            className="flex flex-col gap-3 rounded-[10px] border border-grey-200 bg-white p-4"
          >
            {(["problem", "cost", "built", "result"] as const).map((key) => (
              <div key={key}>
                <p className="mb-[2px] font-sans text-[9px] uppercase tracking-[0.10em] text-grey-400">
                  {LABELS[key]}
                </p>
                <p className="font-sans text-[11px] leading-[1.6] text-grey-700">
                  {study[key]}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
