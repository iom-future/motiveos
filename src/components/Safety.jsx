import { useState } from 'react'
import { ShieldCheck, Hand } from 'lucide-react'
import { SAFETY_PRINCIPLES } from '../data/content'

export function Safety() {
  const [interventionHold, setInterventionHold] = useState(false)

  return (
    <section
      id="safety"
      className="py-24 lg:py-32 border-b border-[#273644]/70 bg-[#080B10]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl reveal-up">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#55B8FF] mb-4">
            Intelligence With Responsibility
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#F4F7FA] leading-[1.1]">
            Autonomous Systems Must Be Built to Operate Safely.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#93A1B0] leading-relaxed">
            Robots interact with the physical world. Their decisions can affect
            people, equipment and environments. MotiveOS is designed with
            safety, reliability, testing and human oversight as core engineering
            requirements.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start reveal-up">
          {/* Left: Four Principles */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {SAFETY_PRINCIPLES.map((principle) => (
              <div
                key={principle.title}
                className="border-t border-[#273644] pt-5"
              >
                <h3 className="font-display text-lg font-semibold text-[#F4F7FA]">
                  {principle.title}
                </h3>
                <p className="mt-2.5 text-sm text-[#93A1B0] leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Example Robot Status & Human Oversight Panel */}
          <div className="lg:col-span-5">
            <div className="rounded-lg border border-[#273644] bg-[#111820] overflow-hidden">
              <div className="flex items-center justify-between border-b border-[#273644] bg-[#18232E]/60 px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#54E4D3]" aria-hidden="true" />
                  <span className="font-mono text-xs text-[#F4F7FA]">
                    SUPERVISION_MONITOR
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[#93A1B0]">
                  ILLUSTRATIVE PANEL
                </span>
              </div>

              <div className="p-5 sm:p-6 space-y-3.5 text-sm">
                <div className="flex items-center justify-between py-2 border-b border-[#273644]/60">
                  <span className="text-[#93A1B0]">Operational State</span>
                  <span className="font-mono text-xs text-[#F4F7FA]">
                    {interventionHold ? 'MOTION_HELD' : 'SUPERVISED_NAV'}
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#273644]/60">
                  <span className="text-[#93A1B0]">Safety Constraints</span>
                  <span className="font-mono text-xs text-[#54E4D3]">
                    ENVELOPE_ENFORCED
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#273644]/60">
                  <span className="text-[#93A1B0]">System Health</span>
                  <span className="font-mono text-xs text-[#F4F7FA]">
                    NOMINAL (ALL NODES)
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#273644]/60">
                  <span className="text-[#93A1B0]">Active Objective</span>
                  <span className="font-mono text-xs text-[#F4F7FA]">
                    TRANSIT_BAY_04
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#273644]/60">
                  <span className="text-[#93A1B0]">Execution Status</span>
                  <span className="font-mono text-xs text-[#55B8FF]">
                    {interventionHold ? 'PAUSED_BY_OPERATOR' : 'MONITORED'}
                  </span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-[#93A1B0]">Human Intervention</span>
                  <span className="font-mono text-xs text-[#54E4D3]">
                    {interventionHold ? 'OVERRIDE ACTIVE' : 'READY (LOW LATENCY)'}
                  </span>
                </div>

                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => setInterventionHold((prev) => !prev)}
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-md border px-4 py-2.5 text-xs font-mono transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55B8FF] ${
                      interventionHold
                        ? 'border-[#54E4D3] bg-[#54E4D3]/10 text-[#54E4D3]'
                        : 'border-[#273644] bg-[#080B10] text-[#F4F7FA] hover:border-[#55B8FF]'
                    }`}
                  >
                    <Hand className="h-3.5 w-3.5" />
                    {interventionHold
                      ? 'Release Operator Hold (Simulated)'
                      : 'Test Operator Intervention Hold'}
                  </button>
                </div>

                <p className="pt-2 text-xs text-[#93A1B0]/85 leading-relaxed">
                  Software intelligence assists operational decision-making and
                  does not replace certified hardware safety interlocks or human
                  oversight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

