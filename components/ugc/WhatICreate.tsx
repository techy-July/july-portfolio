import { WHAT_I_CREATE } from '@/lib/constants'

export default function WhatICreate() {
  return (
    <section className="px-5 py-6">
      <h2 className="font-serif text-[25px] font-normal text-teal-900">What I create</h2>
      <div>
        {WHAT_I_CREATE.map((item, index) => (
          <div key={item.title}>
            <div className="py-3">
              <h3 className="mb-1 font-sans text-[14px] font-medium text-grey-800">
                {item.title}
              </h3>
              <p className="font-sans text-[11px] leading-[1.5] text-grey-600">
                {item.description}
              </p>
            </div>
            {index < WHAT_I_CREATE.length - 1 && (
              <hr className="border-t border-grey-200" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
