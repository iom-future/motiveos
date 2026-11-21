import { TESTIMONIALS } from '../data/content'
import testimonialOlumide from '../assets/images/testimonial-olumide.jpg'
import testimonialRachel from '../assets/images/testimonial-rachel.jpg'
import testimonialKenji from '../assets/images/testimonial-kenji.jpg'

const TESTIMONIAL_IMAGES = {
  olumide: testimonialOlumide,
  rachel: testimonialRachel,
  kenji: testimonialKenji,
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 border-b border-[#273644]/70 bg-[#080B10]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl reveal-up">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#55B8FF] mb-4">
            Engineering Perspectives
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#F4F7FA] leading-[1.1]">
            What Robotics Builders Say About the Architecture.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#93A1B0] leading-relaxed">
            Feedback from robotics engineers and researchers reviewing the
            MotiveOS intelligence layer and simulation-first development model.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-7 reveal-up">
          {TESTIMONIALS.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col justify-between rounded-lg border border-[#273644] bg-[#111820] p-7 transition-colors hover:border-[#3A4F63]"
            >
              <blockquote className="text-sm sm:text-[15px] text-[#F4F7FA]/90 leading-relaxed">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-8 pt-6 border-t border-[#273644]/80 flex items-center gap-4">
                <img
                  src={TESTIMONIAL_IMAGES[item.imageKey]}
                  alt={`${item.name}, ${item.role}`}
                  loading="lazy"
                  width="96"
                  height="96"
                  className="h-12 w-12 rounded-full object-cover object-top border border-[#273644] shrink-0"
                />
                <div className="min-w-0">
                  <div className="font-display text-sm font-semibold text-[#F4F7FA] truncate">
                    {item.name}
                  </div>
                  <div className="text-xs text-[#93A1B0] truncate">
                    {item.role}
                  </div>
                  <div className="font-mono text-[11px] text-[#55B8FF] truncate mt-0.5">
                    {item.organization}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
