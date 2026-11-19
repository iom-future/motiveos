import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../data/content'
import { Logo } from './Logo'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeHash, setActiveHash] = useState('')

  const isClickScrollingRef = useRef(false)
  const scrollTimeoutRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const updateActiveSection = () => {
      // If the user clicked a nav link, do NOT update or slide through intermediate sections
      if (isClickScrollingRef.current) return

      const scrollY = window.scrollY
      if (scrollY < 200) {
        setActiveHash('')
        return
      }

      // Check if user is scrolled to the absolute bottom of the document
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      if (windowHeight + scrollY >= documentHeight - 120) {
        setActiveHash(NAV_LINKS[NAV_LINKS.length - 1].href)
        return
      }

      const detectionLine = 240
      for (const item of NAV_LINKS) {
        const el = document.querySelector(item.href)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= detectionLine && rect.bottom >= detectionLine) {
            setActiveHash(item.href)
            return
          }
        }
      }
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })

    const handleScrollEnd = () => {
      isClickScrollingRef.current = false
    }
    window.addEventListener('scrollend', handleScrollEnd)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('scrollend', handleScrollEnd)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  // Instantly jump highlighter to target link and suppress scroll updates during transit
  const handleNavClick = (href) => {
    setActiveHash(href)
    isClickScrollingRef.current = true

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }

    scrollTimeoutRef.current = setTimeout(() => {
      isClickScrollingRef.current = false
    }, 900)
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || mobileOpen
          ? 'bg-[#080B10]/95 backdrop-blur-md border-b border-[#273644]/80'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-2 lg:gap-4">
          <a
            href="#top"
            onClick={() => handleNavClick('')}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55B8FF] rounded shrink-0"
            aria-label="MotiveOS Home"
          >
            <Logo />
          </a>

          {/* Desktop Nav: discrete active highlighter that jumps instantly without traversing intermediate links */}
          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-1 min-[860px]:gap-1.5 lg:gap-2.5 min-[1180px]:gap-3 xl:gap-4 2xl:gap-6"
          >
            {NAV_LINKS.map((item) => {
              const isActive = activeHash === item.href
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative inline-flex items-center text-[11px] min-[860px]:text-[11.5px] lg:text-xs min-[1180px]:text-[13px] 2xl:text-sm font-medium rounded-md px-2 py-1 min-[860px]:px-2.5 xl:px-3 whitespace-nowrap transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55B8FF] ${
                    isActive
                      ? 'bg-[#18232E] text-[#F4F7FA] border border-[#55B8FF]/50 shadow-[0_0_12px_rgba(85,184,255,0.18)]'
                      : 'text-[#93A1B0] hover:text-[#F4F7FA] hover:bg-[#111820]/80 border border-transparent'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>

          <div className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0">
            <a
              href="#developers"
              onClick={() => handleNavClick('#developers')}
              className="hidden min-[1100px]:inline-block text-xs xl:text-sm text-[#93A1B0] hover:text-[#F4F7FA] transition-colors px-2 py-1.5 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55B8FF] whitespace-nowrap"
            >
              Explore Documentation
            </a>
            <a
              href="#early-access"
              className="inline-flex items-center justify-center rounded-md bg-[#F4F7FA] px-2.5 py-1.5 min-[860px]:px-3 min-[860px]:py-1.5 xl:px-4 xl:py-2 text-xs xl:text-sm font-medium text-[#080B10] hover:bg-[#55B8FF] hover:text-[#080B10] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55B8FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080B10] whitespace-nowrap"
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
            <nav aria-label="Mobile" className="flex flex-col space-y-2">
              {NAV_LINKS.map((item) => {
                const isActive = activeHash === item.href
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      handleNavClick(item.href)
                      setMobileOpen(false)
                    }}
                    className={`flex items-center justify-between text-sm py-2 px-3 rounded-md transition-colors ${
                      isActive
                        ? 'bg-[#18232E] text-[#F4F7FA] border border-[#55B8FF]/40 font-medium'
                        : 'text-[#93A1B0] hover:text-[#F4F7FA] hover:bg-[#111820]'
                    }`}
                  >
                    <span>{item.label}</span>
                  </a>
                )
              })}
            </nav>
            <div className="pt-4 border-t border-[#273644] flex flex-col gap-3">
              <a
                href="#developers"
                onClick={() => {
                  handleNavClick('#developers')
                  setMobileOpen(false)
                }}
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
