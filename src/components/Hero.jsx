import { ArrowRight } from 'lucide-react'
import heroAmrImg from '../assets/images/hero-amr.jpg'

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex items-end lg:items-center overflow-hidden border-b border-[#273644]/70 pt-24 pb-16 lg:py-28"
    >
      {/* Background robotics photography */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroAmrImg}
          alt="Autonomous mobile robot navigating a dimly lit industrial warehouse aisle"
          className="h-full w-full object-cover object-center opacity-75"
          width="1920"
          height="1080"
          fetchPriority="high"
        />
        {/* Editorial dark scrim for typography legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(8,11,16,0.96) 0%, rgba(8,11,16,0.84) 45%, rgba(8,11,16,0.38) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(8,11,16,0.6) 0%, rgba(8,11,16,0.05) 35%, rgba(8,11,16,0.92) 100%)',
          }}
        />
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      </div>

      {/* Subtle perception reticle overlay on the right-hand robot plane (desktop) */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden lg:block absolute inset-0 z-10 max-w-7xl mx-auto"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1280 760"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Planned navigation spline */}
          <path
            d="M 865 550 C 830 500, 790 470, 745 435"
            stroke="#55B8FF"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            className="animate-dash-flow"
            opacity="0.7"
          />
          <circle cx="745" cy="435" r="4" fill="#54E4D3" opacity="0.85" />
          {/* Detected obstacle frame */}
          <rect
            x="930"
            y="255"
            width="148"
            height="112"
            stroke="#55B8FF"
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity="0.45"
          />
          <text
            x="934"
            y="247"
            fill="#55B8FF"
            fontSize="10"
            fontFamily="JetBrains Mono, monospace"
            opacity="0.75"
          >
            RACK_UNIT_B4  [3.4m]
          </text>
        </svg>
      </div>

      <div className="relative z-20 mx-auto max-w-7xl w-full px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* Left editorial copy */}
          <div className="lg:col-span-7 hero-stagger">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#55B8FF] mb-5">
              The Intelligence Layer for Autonomous Machines
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[62px] font-semibold tracking-tight text-[#F4F7FA] leading-[1.05]">
              Give Machines the Intelligence to Move Beyond the Script.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#93A1B0] max-w-2xl leading-relaxed">
              MotiveOS connects perception, environmental understanding and
              decision-making into a unified intelligence layer, helping
              developers build robots that can understand their surroundings and
              adapt to the real world.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#platform"
                className="inline-flex items-center gap-2 rounded-md bg-[#F4F7FA] px-5 py-3 text-sm font-medium text-[#080B10] hover:bg-[#55B8FF] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55B8FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080B10]"
              >
                Explore MotiveOS
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#world-model"
                className="inline-flex items-center gap-2 rounded-md border border-[#273644] bg-[#111820]/85 px-5 py-3 text-sm font-medium text-[#F4F7FA] hover:border-[#55B8FF]/60 hover:bg-[#18232E] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55B8FF]"
              >
                Meet the Platform
              </a>
            </div>

            <p className="mt-8 text-xs font-mono tracking-wide text-[#93A1B0]/80">
              Built for the next generation of intelligent machines.
            </p>
          </div>

          {/* Right telemetry overlay panel */}
          <div className="lg:col-span-5 hero-stagger">
            <div className="rounded-lg border border-[#273644] bg-[#080B10]/88 backdrop-blur-md p-5 sm:p-6">
              <div className="flex items-center justify-between border-b border-[#273644]/80 pb-3 mb-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#93A1B0]">
                  Illustrative Runtime View
                </span>
                <span className="inline-flex items-center gap-2 font-mono text-[11px] text-[#54E4D3]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#54E4D3]" />
                  SIMULATED
                </span>
              </div>

              <div className="space-y-4">
                {/* Environment Perception */}
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#55B8FF] mb-2">
                    Environment Perception
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
                    <div className="flex justify-between text-[#93A1B0]">
                      <span>Detected Objects</span>
                      <span className="font-mono text-[#F4F7FA]">14</span>
                    </div>
                    <div className="flex justify-between text-[#93A1B0]">
                      <span>Active Obstacles</span>
                      <span className="font-mono text-[#F4F7FA]">3</span>
                    </div>
                    <div className="flex justify-between text-[#93A1B0]">
                      <span>Navigation Path</span>
                      <span className="font-mono text-[#54E4D3]">Clear</span>
                    </div>
                    <div className="flex justify-between text-[#93A1B0]">
                      <span>Geometry Mesh</span>
                      <span className="font-mono text-[#F4F7FA]">Locked</span>
                    </div>
                  </div>
                </div>

                {/* Robot State */}
                <div className="border-t border-[#273644]/70 pt-3.5">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#55B8FF] mb-2">
                    Robot State
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
                    <div className="flex justify-between text-[#93A1B0]">
                      <span>Position (m)</span>
                      <span className="font-mono text-[#F4F7FA]">12.4, 4.8</span>
                    </div>
                    <div className="flex justify-between text-[#93A1B0]">
                      <span>Motion State</span>
                      <span className="font-mono text-[#F4F7FA]">0.85 m/s</span>
                    </div>
                    <div className="flex justify-between text-[#93A1B0]">
                      <span>Sensors</span>
                      <span className="font-mono text-[#54E4D3]">Synced</span>
                    </div>
                    <div className="flex justify-between text-[#93A1B0]">
                      <span>Mode</span>
                      <span className="font-mono text-[#F4F7FA]">Supervised</span>
                    </div>
                  </div>
                </div>

                {/* Intelligence Status */}
                <div className="border-t border-[#273644]/70 pt-3.5">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#55B8FF] mb-2">
                    Intelligence Status
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between text-[#93A1B0]">
                      <span>Perception Processing</span>
                      <span className="font-mono text-[#54E4D3]">Active</span>
                    </div>
                    <div className="flex items-center justify-between text-[#93A1B0]">
                      <span>Planning Status</span>
                      <span className="font-mono text-[#F4F7FA]">
                        Corridor Route A
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[#93A1B0]">
                      <span>Action Execution</span>
                      <span className="font-mono text-[#F4F7FA]">
                        Tracking Waypoint 4
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
