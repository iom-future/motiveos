import { CORE_CAPABILITIES } from '../data/content'

export function Features() {
  return (
    <section
      id="capabilities"
      className="py-24 lg:py-32 border-b border-[#273644]/70 bg-[#080B10]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl reveal-up">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#55B8FF] mb-4">
            The MotiveOS Stack
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#F4F7FA] leading-[1.1]">
            Intelligence Across Every Stage of Autonomous Behaviour.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#93A1B0] leading-relaxed">
            MotiveOS brings together modular capabilities that allow robotics
            developers to build intelligent autonomous systems.
          </p>
        </div>

        {/* Clean 3x2 capability matrix without excessive badges or number tags */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-up">
          {CORE_CAPABILITIES.map((cap) => (
            <div
              key={cap.title}
              className="flex flex-col rounded-lg border border-[#273644] bg-[#111820] p-7 transition-colors hover:border-[#3A4F63]"
            >
              <h3 className="font-display text-xl font-semibold text-[#F4F7FA]">
                {cap.title}
              </h3>
              <p className="mt-3 text-sm text-[#93A1B0] leading-relaxed">
                {cap.description}
              </p>
              <ul className="mt-6 pt-5 border-t border-[#273644]/70 space-y-2.5 text-sm text-[#93A1B0]">
                {cap.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-1 rounded-full bg-[#55B8FF] shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

