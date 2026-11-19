import { useState } from 'react'
import { ArrowRight, Check, Copy } from 'lucide-react'
import { CODE_EXAMPLES, DEVELOPER_CAPABILITIES } from '../data/content'

const TAB_KEYS = ['python', 'cpp', 'config']

export function DeveloperExperience() {
  const [activeLang, setActiveLang] = useState('python')
  const [copied, setCopied] = useState(false)

  const current = CODE_EXAMPLES[activeLang]

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(current.code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section
      id="developers"
      className="py-24 lg:py-32 border-b border-[#273644]/70 bg-[#080B10]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl reveal-up">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#55B8FF] mb-4">
            Built for Robotics Developers
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#F4F7FA] leading-[1.1]">
            Intelligence You Can Integrate.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#93A1B0] leading-relaxed">
            MotiveOS is designed to give robotics developers modular tools for
            building autonomous systems without having to independently assemble
            every layer of environmental intelligence.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start reveal-up">
          {/* Left: Developer Capabilities */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
            {DEVELOPER_CAPABILITIES.map((cap) => (
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

          {/* Right: Code Demonstration Panel */}
          <div className="lg:col-span-6">
            <div className="rounded-lg border border-[#273644] bg-[#111820] overflow-hidden">
              {/* Editor header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#273644] bg-[#18232E]/60 px-4 py-2.5">
                <div
                  role="tablist"
                  aria-label="Code example language"
                  className="flex items-center gap-1"
                >
                  {TAB_KEYS.map((key) => {
                    const isSelected = key === activeLang
                    return (
                      <button
                        key={key}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => setActiveLang(key)}
                        className={`rounded px-3 py-1 font-mono text-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55B8FF] ${
                          isSelected
                            ? 'bg-[#080B10] text-[#F4F7FA] border border-[#273644]'
                            : 'text-[#93A1B0] hover:text-[#F4F7FA]'
                        }`}
                      >
                        {CODE_EXAMPLES[key].label}
                      </button>
                    )
                  })}
                </div>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 rounded border border-[#273644] bg-[#080B10] px-2.5 py-1 font-mono text-xs text-[#93A1B0] hover:text-[#F4F7FA] hover:border-[#55B8FF]/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55B8FF]"
                  aria-label="Copy code snippet"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#54E4D3]" />
                      <span className="text-[#54E4D3]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Subbar with filename & illustrative note */}
              <div className="flex items-center justify-between border-b border-[#273644]/60 px-4 py-2 bg-[#080B10]/60">
                <span className="font-mono text-[11px] text-[#93A1B0]">
                  {current.filename}
                </span>
                <span className="font-mono text-[11px] text-[#55B8FF]">
                  Illustrative API Design
                </span>
              </div>

              {/* Code body */}
              <pre className="p-5 sm:p-6 overflow-x-auto text-[13px] leading-6 font-mono text-[#F4F7FA] bg-[#080B10]">
                <code>{current.code}</code>
              </pre>

              {/* Footer disclaimer */}
              <div className="border-t border-[#273644] bg-[#111820] px-5 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <p className="text-xs text-[#93A1B0]">
                  Conceptual interface preview. Final SDK signatures will ship
                  with early access documentation.
                </p>
                <a
                  href="#early-access"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#55B8FF] hover:text-[#F4F7FA] transition-colors shrink-0"
                >
                  Explore Developer Documentation
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

