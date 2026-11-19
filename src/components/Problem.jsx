import { PROBLEM_ITEMS } from '../data/content'

export function Problem() {
  return (
    <section
      id="problem"
      className="py-24 lg:py-32 border-b border-[#273644]/70 bg-[#080B10]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl reveal-up">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#55B8FF] mb-4">
            The Challenge
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#F4F7FA] leading-[1.1]">
            The Real World Doesn&apos;t Follow a Script.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#93A1B0] leading-relaxed">
            Robots are increasingly capable of performing complex tasks, but
            operating reliably in physical environments requires more than
            predefined instructions. Objects move. Environments change. Sensors
            produce imperfect information. Unexpected obstacles appear. Robotic
            systems need to understand what is happening around them and respond
            accordingly.
          </p>
        </div>

        {/* Clean architectural 2x2 grid — no clutter or excessive card tags */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-px bg-[#273644] border border-[#273644] rounded-lg overflow-hidden reveal-up">
          {PROBLEM_ITEMS.map((item) => (
            <div
              key={item.title}
              className="bg-[#111820] p-8 lg:p-10 transition-colors hover:bg-[#18232E]/70"
            >
              <h3 className="font-display text-xl font-medium text-[#F4F7FA]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#93A1B0] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl border-l-2 border-[#55B8FF] pl-6 reveal-up">
          <p className="text-base sm:text-lg text-[#F4F7FA] leading-relaxed">
            The next generation of robots needs more than better hardware. It
            needs intelligence that connects what machines perceive with what
            they understand and what they do.
          </p>
        </div>
      </div>
    </section>
  )
}

