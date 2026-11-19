import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../data/content'
import { Logo } from './Logo'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeHash, setActiveHash] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.querySelector(link.href)
    ).filter(Boolean)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target?.id) {
          setActiveHash(`#${visible[0].target.id}`)
        }
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.25, 0.5] }
    )

    sections.forEach((sec) => observer.observe(sec))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || mobileOpen
          ? 'bg-[#080B10]/95 backdrop-blur-md border-b border-[#273644]/80'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#top"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55B8FF] rounded"
            aria-label="MotiveOS Home"
          >
            <Logo />
          </a>

          <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((item) => {
              const isActive = activeHash === item.href
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55B8FF] rounded px-1 py-0.5 ${
                    isActive
                      ? 'text-[#F4F7FA]'
                      : 'text-[#93A1B0] hover:text-[#F4F7FA]'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="#developers"
              className="text-sm text-[#93A1B0] hover:text-[#F4F7FA] transition-colors px-2 py-1.5 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55B8FF]"
            >
              Explore Documentation
            </a>
            <a
              href="#early-access"
              className="inline-flex items-center justify-center rounded-md bg-[#F4F7FA] px-4 py-2 text-sm font-medium text-[#080B10] hover:bg-[#55B8FF] hover:text-[#080B10] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55B8FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080B10]"
            >
              Get Early Access
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[#93A1B0] hover:text-[#F4F7FA] hover:bg-[#111820] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55B8FF]"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[#273644] bg-[#080B10]">
          <div className="px-6 py-5 space-y-4">
            <nav aria-label="Mobile" className="flex flex-col space-y-3">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-[#93A1B0] hover:text-[#F4F7FA] py-1"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="pt-4 border-t border-[#273644] flex flex-col gap-3">
              <a
                href="#developers"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center rounded-md border border-[#273644] bg-[#111820] px-4 py-2.5 text-sm font-medium text-[#F4F7FA]"
              >
                Explore Documentation
              </a>
              <a
                href="#early-access"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center rounded-md bg-[#F4F7FA] px-4 py-2.5 text-sm font-medium text-[#080B10]"
              >
                Get Early Access
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
