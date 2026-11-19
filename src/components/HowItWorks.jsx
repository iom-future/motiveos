import { useState } from 'react'
import { WORKFLOW_STEPS } from '../data/content'

function PlatformViewport({ activeTab }) {
  return (
    <div className="relative rounded-lg border border-[#273644] bg-[#080B10] overflow-hidden">
      {/* Top technical bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#273644] bg-[#111820] px-4 py-2.5">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#54E4D3]" />
          <span className="font-mono text-xs text-[#F4F7FA]">
            {activeTab === 'perception' && 'sensor_pipeline / rgb_depth_fusion'}
            {activeTab === 'world-model' && 'spatial_graph / warehouse_bay_02'}
            {activeTab === 'planning' && 'planner_node / constraint_solver'}
            {activeTab === 'execution' && 'controller_bridge / amr_diff_drive'}
          </span>
        </div>
        <span className="font-mono text-[11px] text-[#93A1B0]">
          ILLUSTRATIVE SIMULATION
        </span>
      </div>

      {/* Main SVG spatial stage */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-tech-grid-fine p-4 sm:p-6">
        {activeTab === 'perception' && (
          <svg
            viewBox="0 0 800 420"
            className="w-full h-full"
            role="img"
            aria-label="Simulated robot camera perception view with object bounding boxes and depth markers"
          >
            {/* Perspective floor lines */}
            <line x1="80" y1="400" x2="310" y2="180" stroke="#273644" strokeWidth="1" />
            <line x1="720" y1="400" x2="490" y2="180" stroke="#273644" strokeWidth="1" />
            <line x1="200" y1="400" x2="365" y2="180" stroke="#273644" strokeWidth="1" />
            <line x1="600" y1="400" x2="435" y2="180" stroke="#273644" strokeWidth="1" />
            <line x1="250" y1="180" x2="550" y2="180" stroke="#273644" strokeWidth="1" />
            <line x1="170" y1="265" x2="630" y2="265" stroke="#273644" strokeWidth="1" />
            <line x1="100" y1="345" x2="700" y2="345" stroke="#273644" strokeWidth="1" />

            {/* Left rack silhouette */}
            <rect x="65" y="75" width="175" height="245" fill="#111820" stroke="#273644" />
            <line x1="65" y1="155" x2="240" y2="155" stroke="#273644" />
            <line x1="65" y1="235" x2="240" y2="235" stroke="#273644" />

            {/* Right rack silhouette */}
            <rect x="560" y="75" width="175" height="245" fill="#111820" stroke="#273644" />
            <line x1="560" y1="155" x2="735" y2="155" stroke="#273644" />
            <line x1="560" y1="235" x2="735" y2="235" stroke="#273644" />

            {/* Detected pallet obstacle */}
            <rect x="330" y="215" width="115" height="82" fill="#18232E" stroke="#55B8FF" strokeWidth="1.5" />
            <path d="M330 229V215H344 M445 229V215H431 M330 283V297H344 M445 283V297H431" stroke="#54E4D3" strokeWidth="2" />
            <text x="332" y="206" fill="#55B8FF" fontSize="11" fontFamily="JetBrains Mono, monospace">
              PALLET_CRATE  d=4.2m
            </text>

            {/* Detected dynamic cart */}
            <rect x="485" y="190" width="68" height="92" fill="#18232E" stroke="#54E4D3" strokeWidth="1.5" strokeDasharray="4 3" />
            <text x="485" y="182" fill="#54E4D3" fontSize="11" fontFamily="JetBrains Mono, monospace">
              CART_MOVING  d=5.8m
            </text>

            {/* Depth scan sweep */}
            <polygon points="400,395 275,260 525,260" fill="#55B8FF" fillOpacity="0.07" />
            <circle cx="400" cy="395" r="5" fill="#55B8FF" />
            <text x="24" y="34" fill="#93A1B0" fontSize="11" fontFamily="JetBrains Mono, monospace">
              CAM_FRONT_STEREO  |  30 FPS  |  DEPTH ALIGNED
            </text>
          </svg>
        )}

        {activeTab === 'world-model' && (
          <svg
            viewBox="0 0 800 420"
            className="w-full h-full"
            role="img"
            aria-label="Simplified isometric 3D environment model with spatial relationships"
          >
            {/* Isometric floor plane */}
            <polygon
              points="400,60 720,210 400,360 80,210"
              fill="#111820"
              stroke="#273644"
              strokeWidth="1.2"
            />
            {/* Isometric grid lines */}
            {[1, 2, 3].map((i) => (
              <g key={i} opacity="0.45">
                <line
                  x1={400 - i * 80}
                  y1={60 + i * 37.5}
                  x2={720 - i * 80}
                  y2={210 + i * 37.5}
                  stroke="#273644"
                />
                <line
                  x1={400 + i * 80}
                  y1={60 + i * 37.5}
                  x2={80 + i * 80}
                  y2={210 + i * 37.5}
                  stroke="#273644"
                />
              </g>
            ))}

            {/* Navigable corridor highlight */}
            <polygon
              points="400,115 585,202 400,290 215,202"
              fill="#55B8FF"
              fillOpacity="0.09"
              stroke="#55B8FF"
              strokeOpacity="0.35"
            />

            {/* 3D Rack Volume Left */}
            <polygon points="210,165 290,127 335,148 255,186" fill="#18232E" stroke="#55B8FF" strokeWidth="1" />
            <polygon points="210,165 255,186 255,232 210,211" fill="#111820" stroke="#273644" />
            <polygon points="255,186 335,148 335,194 255,232" fill="#141D27" stroke="#273644" />

            {/* 3D Obstacle Volume Center */}
            <polygon points="395,188 455,160 495,179 435,207" fill="#18232E" stroke="#54E4D3" strokeWidth="1.4" />
            <polygon points="395,188 435,207 435,244 395,225" fill="#111820" stroke="#54E4D3" strokeOpacity="0.5" />
            <polygon points="435,207 495,179 495,216 435,244" fill="#141D27" stroke="#54E4D3" strokeOpacity="0.5" />

            {/* Spatial relation vectors */}
            <line x1="295" y1="245" x2="435" y2="207" stroke="#55B8FF" strokeDasharray="4 4" opacity="0.7" />
            <circle cx="295" cy="245" r="7" fill="#55B8FF" />
            <circle cx="295" cy="245" r="15" stroke="#55B8FF" strokeOpacity="0.35" />

            <text x="24" y="34" fill="#93A1B0" fontSize="11" fontFamily="JetBrains Mono, monospace">
              SPATIAL_GRAPH  |  NODES: 18  |  CLEARANCE_FIELD: UPDATED
            </text>
            <text x="505" y="176" fill="#54E4D3" fontSize="11" fontFamily="JetBrains Mono, monospace">
              OBSTACLE_ZONE (0.8m buffer)
            </text>
          </svg>
        )}

        {activeTab === 'planning' && (
          <svg
            viewBox="0 0 800 420"
            className="w-full h-full"
            role="img"
            aria-label="Decision and path planning visualization showing primary route and alternate trajectories"
          >
            {/* Floor boundaries */}
            <rect x="60" y="55" width="680" height="310" rx="4" fill="#111820" stroke="#273644" />
            {/* Static racks */}
            <rect x="190" y="95" width="130" height="75" fill="#18232E" stroke="#273644" />
            <rect x="460" y="245" width="145" height="80" fill="#18232E" stroke="#273644" />

            {/* Dynamic obstacle with safety envelope */}
            <circle cx="420" cy="190" r="44" fill="#54E4D3" fillOpacity="0.06" stroke="#54E4D3" strokeDasharray="4 4" />
            <rect x="404" y="174" width="32" height="32" fill="#18232E" stroke="#54E4D3" strokeWidth="1.5" />

            {/* Rejected alternate path */}
            <path
              d="M 125 275 C 240 265, 345 215, 420 190 C 510 165, 595 145, 675 130"
              stroke="#93A1B0"
              strokeWidth="1.2"
              strokeDasharray="3 5"
              opacity="0.35"
            />
            <text x="260" y="248" fill="#93A1B0" fontSize="10" fontFamily="JetBrains Mono, monospace" opacity="0.65">
              ALT_PATH_B (BLOCKED)
            </text>

            {/* Selected optimal trajectory */}
            <path
              d="M 125 275 C 210 275, 295 305, 390 295 C 490 285, 560 155, 675 130"
              stroke="#55B8FF"
              strokeWidth="2.4"
              strokeDasharray="8 5"
              className="animate-dash-flow"
            />

            {/* Start Robot */}
            <circle cx="125" cy="275" r="10" fill="#55B8FF" />
            <text x="98" y="305" fill="#F4F7FA" fontSize="11" fontFamily="JetBrains Mono, monospace">
              AMR_01
            </text>

            {/* Goal Target */}
            <circle cx="675" cy="130" r="8" fill="none" stroke="#54E4D3" strokeWidth="2" />
            <circle cx="675" cy="130" r="3" fill="#54E4D3" />
            <text x="632" y="112" fill="#54E4D3" fontSize="11" fontFamily="JetBrains Mono, monospace">
              TARGET_BAY
            </text>

            <text x="24" y="34" fill="#93A1B0" fontSize="11" fontFamily="JetBrains Mono, monospace">
              SELECTED_ROUTE: A_PRIMARY  |  CLEARANCE: 1.15m  |  COST: OPTIMAL
            </text>
          </svg>
        )}

        {activeTab === 'execution' && (
          <svg
            viewBox="0 0 800 420"
            className="w-full h-full"
            role="img"
            aria-label="Execution state showing robot progress along waypoints and controller telemetry"
          >
            <rect x="60" y="55" width="680" height="310" rx="4" fill="#111820" stroke="#273644" />

            {/* Completed path */}
            <path
              d="M 120 265 C 210 265, 295 280, 415 245"
              stroke="#54E4D3"
              strokeWidth="2.5"
            />
            {/* Remaining path */}
            <path
              d="M 415 245 C 510 218, 575 155, 675 145"
              stroke="#55B8FF"
              strokeWidth="2"
              strokeDasharray="6 6"
              className="animate-dash-flow"
            />

            {/* Waypoints */}
            {[
              { x: 120, y: 265, done: true, label: 'WP1' },
              { x: 265, y: 271, done: true, label: 'WP2' },
              { x: 415, y: 245, done: true, label: 'CURRENT' },
              { x: 555, y: 178, done: false, label: 'WP3' },
              { x: 675, y: 145, done: false, label: 'GOAL' },
            ].map((wp) => (
              <g key={wp.label}>
                <circle
                  cx={wp.x}
                  cy={wp.y}
                  r={wp.label === 'CURRENT' ? 10 : 5}
                  fill={wp.done ? '#54E4D3' : '#111820'}
                  stroke={wp.done ? '#54E4D3' : '#55B8FF'}
                  strokeWidth="2"
                />
                <text
                  x={wp.x - 16}
                  y={wp.y + 24}
                  fill="#93A1B0"
                  fontSize="10"
                  fontFamily="JetBrains Mono, monospace"
                >
                  {wp.label}
                </text>
              </g>
            ))}

            {/* Telemetry box inside viewport */}
            <rect x="90" y="82" width="230" height="96" rx="4" fill="#080B10" stroke="#273644" />
            <text x="106" y="106" fill="#55B8FF" fontSize="10" fontFamily="JetBrains Mono, monospace">
              EXECUTION_MONITOR
            </text>
            <text x="106" y="128" fill="#F4F7FA" fontSize="11" fontFamily="JetBrains Mono, monospace">
              LINEAR_VEL:   0.82 m/s
            </text>
            <text x="106" y="148" fill="#F4F7FA" fontSize="11" fontFamily="JetBrains Mono, monospace">
              ANGULAR_VEL:  0.04 rad/s
            </text>
            <text x="106" y="168" fill="#54E4D3" fontSize="11" fontFamily="JetBrains Mono, monospace">
              TASK_PROGRESS: 64%
            </text>

            <text x="24" y="34" fill="#93A1B0" fontSize="11" fontFamily="JetBrains Mono, monospace">
              CONTROL_LOOP: 100 Hz  |  FEEDBACK: NOMINAL
            </text>
          </svg>
        )}
      </div>
    </div>
  )
}

export function HowItWorks() {
  const [activeId, setActiveId] = useState(WORKFLOW_STEPS[0].id)
  const activeStep = WORKFLOW_STEPS.find((s) => s.id === activeId) ?? WORKFLOW_STEPS[0]

  return (
    <section
      id="platform"
      className="py-24 lg:py-32 border-b border-[#273644]/70 bg-[#080B10]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl reveal-up">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#55B8FF] mb-4">
            The MotiveOS Platform
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#F4F7FA] leading-[1.1]">
            From Perception to Intelligent Action.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#93A1B0] leading-relaxed">
            MotiveOS is designed to connect the essential stages of robotic
            intelligence into a modular platform that helps machines interpret
            physical environments and execute context-aware actions.
          </p>
        </div>

        {/* Four-step horizontal workflow */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-up">
          {WORKFLOW_STEPS.map((step) => {
            const isSelected = step.id === activeId
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setActiveId(step.id)}
                className={`text-left rounded-lg border p-6 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55B8FF] ${
                  isSelected
                    ? 'border-[#55B8FF] bg-[#18232E]'
                    : 'border-[#273644] bg-[#111820] hover:border-[#36495B]'
                }`}
              >
                <h3 className="font-display text-lg font-semibold text-[#F4F7FA]">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm text-[#93A1B0] leading-relaxed">
                  {step.summary}
                </p>
              </button>
            )
          })}
        </div>

        {/* Interactive tabbed platform demonstration */}
        <div className="mt-12 rounded-lg border border-[#273644] bg-[#111820] p-5 sm:p-8 reveal-up">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-6 border-b border-[#273644]">
            <div
              role="tablist"
              aria-label="Platform demonstration views"
              className="flex flex-wrap gap-2"
            >
              {WORKFLOW_STEPS.map((step) => {
                const isSelected = step.id === activeId
                return (
                  <button
                    key={step.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    aria-controls={`panel-${step.id}`}
                    onClick={() => setActiveId(step.id)}
                    className={`rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55B8FF] ${
                      isSelected
                        ? 'bg-[#55B8FF] text-[#080B10]'
                        : 'bg-[#18232E] text-[#93A1B0] hover:text-[#F4F7FA]'
                    }`}
                  >
                    {step.tabLabel}
                  </button>
                )
              })}
            </div>
            <p className="text-sm text-[#93A1B0] lg:max-w-md lg:text-right">
              {activeStep.detail}
            </p>
          </div>

          <div
            id={`panel-${activeStep.id}`}
            role="tabpanel"
            className="mt-6"
          >
            <PlatformViewport activeTab={activeStep.id} />
          </div>
        </div>
      </div>
    </section>
  )
}

