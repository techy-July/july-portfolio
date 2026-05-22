import SectionDivider from '@/components/ui/SectionDivider'
import { PROCESS_STEPS } from '@/lib/constants'

export default function ProcessSteps() {
  return (
    <section>
      <SectionDivider label="THE PROCESS" />

      <div className="px-5 py-4">
        {PROCESS_STEPS.map((step, index) => (
          <div key={step.number}>
            <div className="flex gap-4 py-4">
              {/* Step number */}
              <span className="w-7 flex-shrink-0 font-serif text-[20px] font-normal text-grey-400">
                {step.number}
              </span>
              {/* Step content */}
              <div className="flex flex-col gap-1">
                <h3 className="font-sans text-[12px] font-medium text-grey-800">{step.title}</h3>
                <p className="font-sans text-[10px] leading-[1.6] text-grey-600">
                  {step.description}
                </p>
              </div>
            </div>
            {index < PROCESS_STEPS.length - 1 && (
              <hr className="border-t border-grey-200" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
