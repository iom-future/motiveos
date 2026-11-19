import { useState } from 'react'
import { ARCHITECTURE_LAYERS } from '../data/content'

export function IntelligenceArchitecture() {
  const [selectedId, setSelectedId] = useState('world-model')
  const selectedLayer =
    ARCHITECTURE_LAYERS.find((l) => l.id === selectedId) ?? ARCHITECTURE_LAYERS[2]

  return (
    <section
      id="architecture"
      className="py-24 lg:py-32 border-b border-[#273644]/70 bg-[#080B10]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl reveal-up">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#55B8FF] mb-4">
            The Intelligence Engine
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#F4F7FA] leading-[1.1]">
            A Unified Architecture for Intelligent Machines.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#93A1B0] leading-relaxed">
            MotiveOS is designed around the relationship between perception,
            environmental understanding, planning and execution. Each layer
            provides information to the next, while feedback from physical
            actions helps the system understand how its decisions affect the
            environment.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start reveal-up">
          {/* Left: Layered Architecture Diagram */}
          <div className="lg:col-span-7 rounded-lg border border-[#273644] bg-[#111820] p-5 sm:p-8">
            <div className="flex items-center justify-between border-b border-[#273644] pb-4 mb-6">
              <span className="font-mono text-xs uppercase tracking-wider text-[#93A1B0]">
                Closed-Loop Architecture
              </span>
              <span className="font-mono text-[11px] text-[#54E4D3]">
                CONCEPTUAL SYSTEM TOPOLOGY
              </span>
            </div>

            <div className="relative">
              <svg
                viewBox="0 0 640 480"
                className="w-full h-auto"
                role="img"
                aria-label="MotiveOS five-layer intelligence architecture diagram connecting Sensors, Perception, World Model, Planning, and Action with closed-loop feedback paths"
              >
                {/* Forward vertical flow lines */}
                {[92, 180, 268, 356].map((y) => (
                  <g key={y}>
                    <line
                      x1="270"
                      y1={y}
                      x2="270"
                      y2={y + 28}
                      stroke="#55B8FF"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      className="animate-dash-flow"
                    />
                    <polygon
                      points={`266,${y + 24} 274,${y + 24} 270,${y + 30}`}
                      fill="#55B8FF"
                    />
                  </g>
                ))}

                {/* Feedback loop: Action -> World Model */}
                <path
                  d="M 465 415 L 540 415 L 540 240 L 470 240"
                  fill="none"
                  stroke="#54E4D3"
                  strokeWidth="1.5"
                  strokeDasharray="6 5"
                  className="animate-dash-flow-slow"
                />
                <polygon points="473,236 473,244 465,240" fill="#54E4D3" />

                {/* Feedback loop: Action -> Perception */}
                <path
                  d="M 465 426 L 592 426 L 592 152 L 470 152"
                  fill="none"
                  stroke="#55B8FF"
                  strokeWidth="1.2"
                  strokeDasharray="5 6"
                  opacity="0.7"
                  className="animate-dash-flow-slow"
                />
                <polygon points="473,148 473,156 465,152" fill="#55B8FF" opacity="0.85" />

                {/* Feedback labels */}
                <text
                  x="550"
                  y="335"
                  fill="#54E4D3"
                  fontSize="10"
                  fontFamily="JetBrains Mono, monospace"
                  transform="rotate(-90 550 335)"
                >
                  STATE FEEDBACK → WORLD MODEL
                </text>
                <text
                  x="603"
                  y="305"
                  fill="#55B8FF"
                  fontSize="10"
                  fontFamily="JetBrains Mono, monospace"
                  opacity="0.85"
                  transform="rotate(-90 603 305)"
                >
                  OUTCOME FEEDBACK → PERCEPTION
                </text>

                {/* Five interactive layer nodes */}
                {ARCHITECTURE_LAYERS.map((layer, index) => {
                  const y = 32 + index * 88
                  const active = layer.id === selectedId
                  return (
                    <g
                      key={layer.id}
                      onClick={() => setSelectedId(layer.id)}
                      className="cursor-pointer"
                    >
                      <rect
                        x="75"
                        y={y}
                        width="390"
                        height="60"
                        rx="6"
                        fill={active ? '#18232E' : '#080B10'}
                        stroke={active ? '#55B8FF' : '#273644'}
                        strokeWidth={active ? '1.8' : '1.2'}
                      />
                      {/* Status dot */}
                      <circle
                        cx="98"
                        cy={y + 30}
                        r="4"
                        fill={active ? '#54E4D3' : '#273644'}
                      />
                      <text
                        x="116"
                        y={y + 27}
                        fill="#F4F7FA"
                        fontSize="14"
                        fontWeight="600"
                        fontFamily="Space Grotesk, sans-serif"
                      >
                        {layer.title}
                      </text>
                      <text
                        x="116"
                        y={y + 45}
                        fill="#93A1B0"
                        fontSize="11"
                        fontFamily="JetBrains Mono, monospace"
                      >
                        {layer.signals.join('  ·  ')}
                      </text>
                    </g>
                  )
                })}
              </svg>
            </div>
          </div>

          {/* Right: Interactive Layer Inspector */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-lg border border-[#273644] bg-[#111820] p-6 sm:p-7">
              <p className="font-mono text-xs uppercase tracking-wider text-[#55B8FF]">
                Selected Layer
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-[#F4F7FA]">
                {selectedLayer.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#93A1B0] leading-relaxed">
                {selectedLayer.description}
              </p>

              <div className="mt-6 pt-5 border-t border-[#273644]">
                <p className="font-mono text-[11px] uppercase tracking-wider text-[#93A1B0] mb-3">
                  Primary Data Interfaces
                </p>
                <div className="space-y-2">
                  {selectedLayer.signals.map((sig) => (
                    <div
                      key={sig}
                      className="flex items-center justify-between rounded bg-[#080B10] border border-[#273644]/80 px-3.5 py-2 text-xs font-mono text-[#F4F7FA]"
                    >
                      <span>{sig}</span>
                      <span className="text-[#54E4D3]">ACTIVE</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Layer selector list for quick keyboard navigation */}
            <div className="rounded-lg border border-[#273644] bg-[#111820] divide-y divide-[#273644]/80 overflow-hidden">
              {ARCHITECTURE_LAYERS.map((layer) => {
                const active = layer.id === selectedId
                return (
                  <button
                    key={layer.id}
                    type="button"
                    onClick={() => setSelectedId(layer.id)}
                    className={`w-full text-left px-5 py-3.5 flex items-center justify-between transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#55B8FF] ${
                      active
                        ? 'bg-[#18232E] text-[#F4F7FA]'
                        : 'text-[#93A1B0] hover:bg-[#18232E]/40 hover:text-[#F4F7FA]'
                    }`}
                  >
                    <span className="text-sm font-medium">{layer.title}</span>
                    <span className="font-mono text-xs text-[#55B8FF]">
                      {layer.shortLabel}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

