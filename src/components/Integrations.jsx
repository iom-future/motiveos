import { Cpu, Layers, MonitorPlay, Terminal, Workflow } from 'lucide-react'
import { INTEGRATION_CATEGORIES } from '../data/content'

const CATEGORY_ICONS = {
  'Robotics Middleware': Workflow,
  Simulation: MonitorPlay,
  Hardware: Cpu,
  Development: Terminal,
  'AI & Machine Learning': Layers,
}

export function Integrations() {
  return (
    <section
      id="integrations"
      className="py-24 lg:py-32 border-b border-[#273644]/70 bg-[#080B10]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 reveal-up">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#55B8FF] mb-4">
              Connect Your Robotics Stack
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#F4F7FA] leading-[1.1]">
              Designed to Work With Existing Robotics Infrastructure.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[#93A1B0] leading-relaxed">
              MotiveOS is engineered to complement the tools, frameworks,
              hardware and development environments robotics teams already use.
            </p>
          </div>
          <p className="font-mono text-xs text-[#93A1B0] lg:text-right shrink-0">
            Ecosystem targets &amp; planned integrations
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-up">
          {INTEGRATION_CATEGORIES.map((group) => {
            const Icon = CATEGORY_ICONS[group.category] ?? Layers
            return (
              <div
                key={group.category}
                className="rounded-lg border border-[#273644] bg-[#111820] p-6 transition-colors hover:border-[#3A4F63] group"
              >
                <div className="flex items-center gap-3 pb-4 border-b border-[#273644]/80">
                  <Icon
                    className="h-4 w-4 text-[#93A1B0] group-hover:text-[#55B8FF] transition-colors"
                    aria-hidden="true"
                  />
                  <h3 className="font-display text-base font-semibold text-[#F4F7FA]">
                    {group.category}
                  </h3>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center justify-between text-sm text-[#93A1B0] group-hover:text-[#F4F7FA]/90 transition-colors"
                    >
                      <span>{item}</span>
                      <span className="font-mono text-[11px] text-[#93A1B0]/70">
                        Target
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

