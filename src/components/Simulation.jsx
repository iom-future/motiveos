import { useEffect, useState } from 'react'
import { Pause, Play, RotateCcw } from 'lucide-react'
import { SIMULATION_CAPABILITIES } from '../data/content'

const SCENARIOS = {
  nominal: {
    label: 'Nominal Corridor',
    path: [
      [110, 220],
      [260, 220],
      [420, 210],
      [580, 215],
      [710, 215],
    ],
    obstacle: { x: 430, y: 115, label: 'STATIC_PALLET' },
  },
  dynamic: {
    label: 'Dynamic Obstacle',
    path: [
      [110, 220],
      [250, 220],
      [390, 275],
      [545, 270],
      [710, 215],
    ],
    obstacle: { x: 415, y: 195, label: 'REPLAN_OBSTACLE' },
  },
  narrow: {
    label: 'Narrow Passage',
    path: [
      [110, 220],
      [240, 170],
      [410, 170],
      [560, 195],
      [710, 215],
    ],
    obstacle: { x: 415, y: 245, label: 'STAGING_CART' },
  },
}

function interpolatePath(points, t) {
  const clamped = Math.max(0, Math.min(1, t))
  const totalSegments = points.length - 1
  const scaled = clamped * totalSegments
  const idx = Math.min(Math.floor(scaled), totalSegments - 1)
  const localT = scaled - idx
  const [x1, y1] = points[idx]
  const [x2, y2] = points[idx + 1]
  return {
    x: x1 + (x2 - x1) * localT,
    y: y1 + (y2 - y1) * localT,
  }
}

export function Simulation() {
  const [scenarioKey, setScenarioKey] = useState('dynamic')
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0.32)

  const scenario = SCENARIOS[scenarioKey]

  useEffect(() => {
    if (!isPlaying) return
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) return

    let frameId
    let lastTime = performance.now()

    const tick = (now) => {
      const dt = (now - lastTime) / 1000
      lastTime = now
      setProgress((prev) => {
        const next = prev + dt * 0.11
        return next >= 1 ? 0 : next
      })
      frameId = requestAnimationFrame(tick)
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [isPlaying])

  const pos = interpolatePath(scenario.path, progress)
  const pathD = scenario.path
    .map((pt, i) => `${i === 0 ? 'M' : 'L'} ${pt[0]} ${pt[1]}`)
    .join(' ')

  const handleScenarioChange = (key) => {
    setScenarioKey(key)
    setProgress(0.08)
  }

  return (
    <section
      id="simulation"
      className="py-24 lg:py-32 border-b border-[#273644]/70 bg-[#080B10]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl reveal-up">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#55B8FF] mb-4">
            Test Before Deployment
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#F4F7FA] leading-[1.1]">
            Build. Simulate. Validate. Deploy.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#93A1B0] leading-relaxed">
            Robotics development requires testing systems under different
            conditions before deploying them into physical environments.
            MotiveOS is designed to support a workflow where engineers evaluate
            decisions and identify edge cases in controlled environments.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start reveal-up">
          {/* Simulation Interface */}
          <div className="lg:col-span-8 rounded-lg border border-[#273644] bg-[#111820] overflow-hidden">
            {/* Controls Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#273644] bg-[#18232E]/60 px-4 py-3">
              <div className="flex flex-wrap items-center gap-2">
                {Object.entries(SCENARIOS).map(([key, sc]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleScenarioChange(key)}
                    className={`rounded px-3 py-1 font-mono text-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55B8FF] ${
                      scenarioKey === key
                        ? 'bg-[#55B8FF] text-[#080B10] font-medium'
                        : 'bg-[#080B10] text-[#93A1B0] border border-[#273644] hover:text-[#F4F7FA]'
                    }`}
                  >
                    {sc.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsPlaying((p) => !p)}
                  className="inline-flex items-center gap-1.5 rounded border border-[#273644] bg-[#080B10] px-3 py-1 font-mono text-xs text-[#F4F7FA] hover:border-[#55B8FF] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55B8FF]"
                  aria-label={isPlaying ? 'Pause simulation' : 'Play simulation'}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="h-3.5 w-3.5 text-[#55B8FF]" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-3.5 w-3.5 text-[#54E4D3]" />
                      <span>Run</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setProgress(0)}
                  className="inline-flex items-center justify-center rounded border border-[#273644] bg-[#080B10] p-1.5 text-[#93A1B0] hover:text-[#F4F7FA] hover:border-[#55B8FF] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55B8FF]"
                  aria-label="Reset simulation"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Simulation Canvas */}
            <div className="relative aspect-[16/9] w-full bg-[#080B10] bg-tech-grid-fine">
              <svg
                viewBox="0 0 820 380"
                className="w-full h-full"
                role="img"
                aria-label="Simulated warehouse robotics testing viewport with animated AMR and obstacle avoidance trajectory"
              >
                {/* Warehouse boundaries */}
                <rect x="44" y="34" width="732" height="312" rx="4" fill="#0B1017" stroke="#273644" />

                {/* Static warehouse shelving */}
                <rect x="130" y="54" width="210" height="62" fill="#111820" stroke="#273644" />
                <rect x="480" y="54" width="210" height="62" fill="#111820" stroke="#273644" />
                <rect x="130" y="294" width="210" height="36" fill="#111820" stroke="#273644" />
                <rect x="480" y="294" width="210" height="36" fill="#111820" stroke="#273644" />

                {/* Scenario Obstacle */}
                <g>
                  <circle
                    cx={scenario.obstacle.x}
                    cy={scenario.obstacle.y}
                    r="38"
                    fill="#54E4D3"
                    fillOpacity="0.06"
                    stroke="#54E4D3"
                    strokeDasharray="4 4"
                  />
                  <rect
                    x={scenario.obstacle.x - 18}
                    y={scenario.obstacle.y - 18}
                    width="36"
                    height="36"
                    fill="#18232E"
                    stroke="#54E4D3"
                    strokeWidth="1.5"
                  />
                  <text
                    x={scenario.obstacle.x - 42}
                    y={scenario.obstacle.y - 26}
                    fill="#54E4D3"
                    fontSize="10"
                    fontFamily="JetBrains Mono, monospace"
                  >
                    {scenario.obstacle.label}
                  </text>
                </g>

                {/* Planned trajectory */}
                <path
                  d={pathD}
                  fill="none"
                  stroke="#55B8FF"
                  strokeWidth="2"
                  strokeDasharray="7 5"
                  opacity="0.85"
                />

                {/* Goal marker */}
                <circle cx="710" cy="215" r="9" fill="none" stroke="#54E4D3" strokeWidth="1.8" />
                <circle cx="710" cy="215" r="3" fill="#54E4D3" />
                <text x="684" y="242" fill="#54E4D3" fontSize="10" fontFamily="JetBrains Mono, monospace">
                  TARGET
                </text>

                {/* Animated Robot */}
                <g transform={`translate(${pos.x}, ${pos.y})`}>
                  <circle r="22" fill="#55B8FF" fillOpacity="0.09" />
                  <rect
                    x="-13"
                    y="-10"
                    width="26"
                    height="20"
                    rx="3"
                    fill="#18232E"
                    stroke="#55B8FF"
                    strokeWidth="2"
                  />
                  <circle cx="6" cy="0" r="3" fill="#54E4D3" />
                </g>

                {/* HUD text */}
                <text x="58" y="24" fill="#93A1B0" fontSize="10" fontFamily="JetBrains Mono, monospace">
                  SIM_ENV: WAREHOUSE_CORRIDOR_01  |  ILLUSTRATIVE TESTBED
                </text>
              </svg>
            </div>

            {/* Bottom Task Progress & Telemetry */}
            <div className="border-t border-[#273644] bg-[#111820] px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-[#93A1B0]">TASK PROGRESS</span>
                  <span className="text-[#F4F7FA]">
                    {Math.round(progress * 100)}%
                  </span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-[#18232E] overflow-hidden">
                  <div
                    className="h-full bg-[#55B8FF] transition-all duration-75"
                    style={{ width: `${Math.round(progress * 100)}%` }}
                  />
                </div>
              </div>
              <div className="flex items-center gap-6 font-mono text-xs text-[#93A1B0] shrink-0">
                <span>
                  POSE{' '}
                  <strong className="text-[#F4F7FA] font-normal">
                    {(pos.x / 35).toFixed(1)}, {(pos.y / 35).toFixed(1)}
                  </strong>
                </span>
                <span className="text-[#54E4D3]">
                  {isPlaying ? 'RUNNING' : 'PAUSED'}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Four Simulation Capabilities */}
          <div className="lg:col-span-4 space-y-6">
            {SIMULATION_CAPABILITIES.map((cap) => (
              <div
                key={cap.title}
                className="border-t border-[#273644] pt-5"
              >
                <h3 className="font-display text-lg font-semibold text-[#F4F7FA]">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm text-[#93A1B0] leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

