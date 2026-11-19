import { APPLICATIONS } from '../data/content'
import appAmr from '../assets/images/app-amr.jpg'
import appIndustrial from '../assets/images/app-industrial.jpg'
import appWarehouse from '../assets/images/app-warehouse.jpg'
import appResearch from '../assets/images/app-research.jpg'
import appService from '../assets/images/app-service.jpg'
import appAgricultural from '../assets/images/app-agricultural.jpg'

const IMAGE_MAP = {
  amr: appAmr,
  industrial: appIndustrial,
  warehouse: appWarehouse,
  research: appResearch,
  service: appService,
  agricultural: appAgricultural,
}

export function Applications() {
  return (
    <section
      id="applications"
      className="py-24 lg:py-32 border-b border-[#273644]/70 bg-[#080B10]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl reveal-up">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#55B8FF] mb-4">
            Built for the Physical World
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#F4F7FA] leading-[1.1]">
            One Intelligence Layer. Multiple Robotic Applications.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#93A1B0] leading-relaxed">
            MotiveOS is designed to support robotic systems across different
            industries and environments—starting with autonomous mobile robots
            and research systems as platform integrations expand.
          </p>
        </div>

        {/* Clean 6-card editorial photography grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 reveal-up">
          {APPLICATIONS.map((app) => (
            <article
              key={app.title}
              className="group overflow-hidden rounded-lg border border-[#273644] bg-[#111820] transition-colors hover:border-[#3A4F63]"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#080B10]">
                <img
                  src={IMAGE_MAP[app.imageKey]}
                  alt={app.alt}
                  loading="lazy"
                  width="800"
                  height="600"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-[#F4F7FA]">
                  {app.title}
                </h3>
                <p className="mt-2 text-sm text-[#93A1B0] leading-relaxed">
                  {app.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

