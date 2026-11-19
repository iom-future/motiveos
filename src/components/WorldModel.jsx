import { useState } from 'react'
import { WORLD_MODEL_CAPABILITIES } from '../data/content'

const VIEW_MODES = [
  { id: 'spatial', label: 'Spatial Map' },
  { id: 'detection', label: 'Object Detection' },
  { id: 'navigation', label: 'Navigation Path' },
  { id: 'camera', label: 'Camera View' },
]

export function WorldModel() {
  const [activeLayers, setActiveLayers] = useState({
    spatial: true,
    detection: true,
    navigation: true,
    camera: false,
  })
  const [cursorCoords, setCursorCoords] = useState({ x: 14.2, y: 6.4 })

  const toggleLayer = (id) => {
    if (id === 'camera') {
      setActiveLayers((prev) => ({
        spatial: prev.camera ? true : false,
        detection: true,
        navigation: prev.camera ? true : false,
        camera: !prev.camera,
      }))
      return
    }
    setActiveLayers((prev) => ({
      ...prev,
      camera: false,
      [id]: !prev[id],
    }))
  }

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const nx = ((e.clientX - rect.left) / rect.width) * 28
    const ny = ((e.clientY - rect.top) / rect.height) * 16
    setCursorCoords({
      x: Number(nx.toFixed(1)),
      y: Number(ny.toFixed(1)),
    })
  }

  return (
    <section
      id="world-model"
      className="py-24 lg:py-32 border-b border-[#273644]/70 bg-[#080B10]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl reveal-up">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#55B8FF] mb-4">
            Understanding the Physical World
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#F4F7FA] leading-[1.1]">
            A Robot Needs More Than Eyes. It Needs Context.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#93A1B0] leading-relaxed">
            The long-term vision for MotiveOS is to help machines develop richer
            contextual representations of the physical environments they operate
            within. Rather than simply identifying individual objects,
            intelligent robotic systems should understand relationships between
            objects, locations, obstacles, tasks and environmental conditions.
          </p>
        </div>

        {/* Interactive Spatial Visualization Stage */}
        <div className="mt-14 rounded-lg border border-[#273644] bg-[#111820] overflow-hidden reveal-up">
          {/* Layer toggle toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#273644] px-5 py-3.5 bg-[#18232E]/50">
            <div className="flex flex-wrap items-center gap-2">
              {VIEW_MODES.map((mode) => {
                const isOn = activeLayers[mode.id]
                return (
                  <button
                    key={mode.id}
                    type="button"
                    aria-pressed={isOn}
                    onClick={() => toggleLayer(mode.id)}
                    className={`rounded-md px-3.5 py-1.5 font-mono text-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55B8FF] ${
                      isOn
                        ? 'bg-[#55B8FF] text-[#080B10] font-medium'
                        : 'bg-[#080B10] text-[#93A1B0] border border-[#273644] hover:text-[#F4F7FA]'
                    }`}
                  >
                    {mode.label}
                  </button>
                )
              })}
            </div>

            <div className="flex items-center gap-5 font-mono text-xs text-[#93A1B0]">
              <span>
                CURSOR{' '}
                <strong className="text-[#F4F7FA] font-normal">
                  ({cursorCoords.x.toFixed(1)}m, {cursorCoords.y.toFixed(1)}m)
                </strong>
              </span>
              <span className="hidden sm:inline text-[#54E4D3]">
                SIMULATED WORLD MODEL
              </span>
            </div>
          </div>

          {/* Interactive SVG spatial viewport */}
          <div
            onMouseMove={handleMouseMove}
            className="relative aspect-[16/10] lg:aspect-[21/10] w-full bg-[#080B10] bg-tech-grid-fine overflow-hidden"
          >
            {activeLayers.camera ? (
              <svg
                viewBox="0 0 1000 460"
                className="w-full h-full"
                role="img"
                aria-label="Simulated robot forward camera feed with object detection overlays"
              >
                {/* Camera perspective geometry */}
                <line x1="0" y1="460" x2="360" y2="200" stroke="#273644" />
                <line x1="1000" y1="460" x2="640" y2="200" stroke="#273644" />
                <line x1="250" y1="460" x2="440" y2="200" stroke="#273644" />
                <line x1="750" y1="460" x2="560" y2="200" stroke="#273644" />
                <line x1="180" y1="200" x2="820" y2="200" stroke="#273644" />
                <line x1="90" y1="305" x2="910" y2="305" stroke="#273644" />

                {/* Left and right warehouse shelves */}
                <polygon points="40,70 330,145 330,270 40,390" fill="#111820" stroke="#273644" />
                <polygon points="960,70 670,145 670,270 960,390" fill="#111820" stroke="#273644" />

                {/* Detected bounding boxes in camera space */}
                <g>
                  <rect x="415" y="215" width="135" height="96" fill="#18232E" fillOpacity="0.65" stroke="#55B8FF" strokeWidth="1.8" />
                  <text x="418" y="206" fill="#55B8FF" fontSize="11" fontFamily="JetBrains Mono, monospace">
                    WORKSTATION_CART  [4.6m]
                  </text>
                </g>

                <g>
                  <rect x="615" y="185" width="90" height="108" fill="#18232E" fillOpacity="0.55" stroke="#54E4D3" strokeWidth="1.6" strokeDasharray="4 3" />
                  <text x="615" y="176" fill="#54E4D3" fontSize="11" fontFamily="JetBrains Mono, monospace">
                    OPERATOR  [6.1m]
                  </text>
                </g>

                {/* Floor corridor guidance */}
                <polygon points="365,455 440,315 540,315 625,455" fill="#55B8FF" fillOpacity="0.08" stroke="#55B8FF" strokeDasharray="5 5" />

                <text x="28" y="34" fill="#93A1B0" fontSize="11" fontFamily="JetBrains Mono, monospace">
                  RGB-D CAMERA FEED (SIMULATED)  |  FOV 87°  |  DEPTH OVERLAY ACTIVE
                </text>
              </svg>
            ) : (
              <svg
                viewBox="0 0 1000 460"
                className="w-full h-full"
                role="img"
                aria-label="Interactive warehouse spatial map with navigable areas, obstacles, robot position, and planned trajectory"
              >
                {/* Facility outer walls */}
                <rect
                  x="48"
                  y="36"
                  width="904"
                  height="388"
                  rx="4"
                  fill="#0B1017"
                  stroke="#273644"
                  strokeWidth="1.5"
                />

                {/* Spatial Map Layer: Navigable Corridors & Zones */}
                {activeLayers.spatial && (
                  <g>
                    {/* Navigable area shading */}
                    <rect x="76" y="175" width="848" height="110" fill="#55B8FF" fillOpacity="0.06" />
                    <rect x="435" y="56" width="115" height="348" fill="#55B8FF" fillOpacity="0.06" />
                    {/* Static warehouse shelving structures */}
                    <rect x="95" y="64" width="290" height="84" fill="#111820" stroke="#273644" />
                    <rect x="595" y="64" width="290" height="84" fill="#111820" stroke="#273644" />
                    <rect x="95" y="312" width="290" height="84" fill="#111820" stroke="#273644" />
                    <rect x="595" y="312" width="290" height="84" fill="#111820" stroke="#273644" />

                    {/* Zone labels */}
                    <text x="112" y="110" fill="#93A1B0" fontSize="11" fontFamily="JetBrains Mono, monospace">
                      STORAGE_RACK_A1
                    </text>
                    <text x="612" y="110" fill="#93A1B0" fontSize="11" fontFamily="JetBrains Mono, monospace">
                      STORAGE_RACK_B1
                    </text>
                    <text x="112" y="358" fill="#93A1B0" fontSize="11" fontFamily="JetBrains Mono, monospace">
                      ASSEMBLY_BENCH_A2
                    </text>
                    <text x="612" y="358" fill="#93A1B0" fontSize="11" fontFamily="JetBrains Mono, monospace">
                      LOADING_DOCK_B2
                    </text>
                  </g>
                )}

                {/* Object Detection Layer: Bounding boxes & clearance rings */}
                {activeLayers.detection && (
                  <g>
                    {/* Obstacle 1: Staging Pallet */}
                    <rect
                      x="375"
                      y="206"
                      width="48"
                      height="42"
                      fill="#18232E"
                      stroke="#55B8FF"
                      strokeWidth="1.5"
                    />
                    <rect
                      x="365"
                      y="196"
                      width="68"
                      height="62"
                      fill="none"
                      stroke="#55B8FF"
                      strokeDasharray="3 3"
                      opacity="0.5"
                    />
                    <text x="352" y="188" fill="#55B8FF" fontSize="10" fontFamily="JetBrains Mono, monospace">
                      PALLET [10.4, 7.2]
                    </text>

                    {/* Obstacle 2: Dynamic Utility Cart */}
                    <circle
                      cx="605"
                      cy="238"
                      r="34"
                      fill="#54E4D3"
                      fillOpacity="0.06"
                      stroke="#54E4D3"
                      strokeDasharray="4 4"
                    />
                    <rect
                      x="591"
                      y="224"
                      width="28"
                      height="28"
                      fill="#18232E"
                      stroke="#54E4D3"
                      strokeWidth="1.5"
                    />
                    <text x="562" y="286" fill="#54E4D3" fontSize="10" fontFamily="JetBrains Mono, monospace">
                      MOVING_CART [16.9, 8.3]
                    </text>

                    {/* Target Dock Station */}
                    <rect
                      x="830"
                      y="198"
                      width="62"
                      height="64"
                      fill="#18232E"
                      stroke="#54E4D3"
                      strokeWidth="1.5"
                    />
                    <text x="822" y="190" fill="#54E4D3" fontSize="10" fontFamily="JetBrains Mono, monospace">
                      TARGET_BAY
                    </text>
                  </g>
                )}

                {/* Navigation Path Layer */}
                {activeLayers.navigation && (
                  <g>
                    {/* Planned adaptive trajectory curving around both obstacles */}
                    <path
                      d="M 175 230 C 260 230, 315 268, 405 268 C 485 268, 520 192, 610 192 C 700 192, 745 230, 830 230"
                      fill="none"
                      stroke="#55B8FF"
                      strokeWidth="2.4"
                      strokeDasharray="8 5"
                      className="animate-dash-flow"
                    />
                    {/* Waypoint markers */}
                    {[
                      [405, 268],
                      [610, 192],
                    ].map(([cx, cy], idx) => (
                      <circle
                        key={idx}
                        cx={cx}
                        cy={cy}
                        r="4"
                        fill="#080B10"
                        stroke="#55B8FF"
                        strokeWidth="1.8"
                      />
                    ))}
                  </g>
                )}

                {/* Robot Pose (always visible) */}
                <g>
                  {/* Sensor field of view wedge */}
                  <polygon
                    points="175,230 285,175 285,285"
                    fill="#55B8FF"
                    fillOpacity="0.09"
                  />
                  <circle cx="175" cy="230" r="14" fill="#111820" stroke="#55B8FF" strokeWidth="2" />
                  <polygon points="183,230 171,224 171,236" fill="#54E4D3" />
                  <text x="132" y="264" fill="#F4F7FA" fontSize="11" fontFamily="JetBrains Mono, monospace">
                    AMR_01 [4.8, 8.0]
                  </text>
                </g>

                {/* Coordinate axis ticks */}
                <text x="64" y="444" fill="#93A1B0" fontSize="10" fontFamily="JetBrains Mono, monospace">
                  X: 0.0m
                </text>
                <text x="480" y="444" fill="#93A1B0" fontSize="10" fontFamily="JetBrains Mono, monospace">
                  X: 14.0m
                </text>
                <text x="892" y="444" fill="#93A1B0" fontSize="10" fontFamily="JetBrains Mono, monospace">
                  X: 28.0m
                </text>
              </svg>
            )}
          </div>

          {/* Bottom status readout */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-[#273644] bg-[#111820] px-5 py-4 text-xs">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#93A1B0]">
                Navigable Area
              </div>
              <div className="mt-1 font-mono text-[#F4F7FA]">Corridors Mapped</div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#93A1B0]">
                Active Obstacles
              </div>
              <div className="mt-1 font-mono text-[#F4F7FA]">1 Static · 1 Dynamic</div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#93A1B0]">
                Trajectory Status
              </div>
              <div className="mt-1 font-mono text-[#54E4D3]">Clearance Verified</div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#93A1B0]">
                Coordinate Frame
              </div>
              <div className="mt-1 font-mono text-[#F4F7FA]">map → base_link</div>
            </div>
          </div>
        </div>

        {/* Four world model capabilities */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-up">
          {WORLD_MODEL_CAPABILITIES.map((cap) => (
            <div
              key={cap.title}
              className="border-t border-[#273644] pt-5"
            >
              <h3 className="font-display text-lg font-semibold text-[#F4F7FA]">
                {cap.title}
              </h3>
              <p className="mt-2.5 text-sm text-[#93A1B0] leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

