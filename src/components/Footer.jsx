import { ArrowRight } from 'lucide-react'
import { FOOTER_COLUMNS } from '../data/content'
import { Logo } from './Logo'

export function Footer() {
  return (
    <div className="bg-[#080B10]">
      {/* Section 17 — Final CTA */}
      <section className="py-24 lg:py-32 border-b border-[#273644]/70 bg-tech-grid relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(60% 60% at 50% 0%, rgba(85,184,255,0.08) 0%, rgba(8,11,16,0.94) 100%)',
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center reveal-up">
          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#F4F7FA] leading-[1.08]">
            Machines Are Learning to Move. Help Them Understand Why.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#93A1B0] max-w-2xl mx-auto leading-relaxed">
            MotiveOS is building the intelligence layer that connects
            perception, understanding and action in the physical world.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#early-access"
              className="inline-flex items-center gap-2 rounded-md bg-[#F4F7FA] px-6 py-3 text-sm font-medium text-[#080B10] hover:bg-[#55B8FF] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55B8FF]"
            >
              Get Early Access
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#platform"
              className="inline-flex items-center gap-2 rounded-md border border-[#273644] bg-[#111820] px-6 py-3 text-sm font-medium text-[#F4F7FA] hover:border-[#55B8FF]/60 hover:bg-[#18232E] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55B8FF]"
            >
              Explore the Platform
            </a>
          </div>

          <p className="mt-8 font-mono text-xs tracking-wide text-[#93A1B0]">
            MotiveOS — Intelligence for Machines That Move.
          </p>
        </div>
      </section>

      {/* Section 18 — Footer */}
      <footer className="py-16 lg:py-20 bg-[#080B10]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-[#273644]/80">
            <div className="lg:col-span-4 space-y-4">
              <Logo />
              <p className="text-sm text-[#93A1B0] max-w-xs leading-relaxed">
                Building the intelligence layer for autonomous machines that
                understand, adapt and act in the physical world.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
              {Object.entries(FOOTER_COLUMNS).map(([heading, links]) => (
                <div key={heading}>
                  <h3 className="font-mono text-xs uppercase tracking-wider text-[#F4F7FA]">
                    {heading}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-sm text-[#93A1B0] hover:text-[#F4F7FA] transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#93A1B0]">
            <p>© 2026 MotiveOS. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#F4F7FA] transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#F4F7FA] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#F4F7FA] transition-colors"
              >
                X
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

