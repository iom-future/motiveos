export function Logo({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <svg
        width="26"
        height="26"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          x="1"
          y="1"
          width="30"
          height="30"
          rx="5"
          fill="#111820"
          stroke="#273644"
          strokeWidth="1.25"
        />
        <path
          d="M8 23V9.5L16 15.5L24 9.5V23"
          stroke="#F4F7FA"
          strokeWidth="2.1"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        <path
          d="M16 15.5V23.5"
          stroke="#55B8FF"
          strokeWidth="2.1"
          strokeLinecap="square"
        />
        <circle cx="16" cy="8.5" r="1.8" fill="#54E4D3" />
      </svg>
      <span className="font-display text-[15px] font-semibold tracking-[0.14em] text-[#F4F7FA]">
        MOTIVEOS
      </span>
    </span>
  )
}
