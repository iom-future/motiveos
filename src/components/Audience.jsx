import { AUDIENCE_ITEMS } from '../data/content'

export function Audience() {
  return (
    <section className="py-24 lg:py-32 border-b border-[#273644]/70 bg-[#080B10]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl reveal-up">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#55B8FF] mb-4">
            Built for the People Building Intelligent Machines
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#F4F7FA] leading-[1.1]">
            The Infrastructure Behind the Next Generation of Robotics.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 reveal-up">
          {AUDIENCE_ITEMS.map((item) => (
            <div
              key={item.title}
              className="border-t border-[#273644] pt-6"
            >
              <h3 className="font-display text-xl font-semibold text-[#F4F7FA]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#93A1B0] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

