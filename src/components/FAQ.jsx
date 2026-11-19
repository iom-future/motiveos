import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQ_ITEMS } from '../data/content'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section
      id="faq"
      className="py-24 lg:py-32 border-b border-[#273644]/70 bg-[#080B10]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 reveal-up">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#55B8FF] mb-4">
              Questions
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F4F7FA] leading-[1.1]">
              Frequently Asked Questions.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#93A1B0] leading-relaxed">
              Key details about MotiveOS&apos;s architecture, scope, and initial
              development direction.
            </p>
          </div>

          <div className="lg:col-span-8 divide-y divide-[#273644] border-y border-[#273644] reveal-up">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx
              return (
                <div key={item.question}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55B8FF] rounded"
                  >
                    <span className="font-display text-lg font-medium text-[#F4F7FA]">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-[#93A1B0] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#55B8FF]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="pb-6 pr-8 text-sm sm:text-base text-[#93A1B0] leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

