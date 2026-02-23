export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      fill="none"
      className={className}
    >
      <path
        d="M20 2C11 2 4 9 4 18c0 6 3 11 8 14l8 6 8-6c5-3 8-8 8-14 0-9-7-16-16-16z"
        fill="#1a472a"
      />
      <line
        x1="20" y1="8" x2="20" y2="32"
        stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round"
      />
      <line
        x1="8" y1="18" x2="32" y2="18"
        stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round"
      />
      <text
        x="12" y="17"
        fontFamily="Arial, sans-serif" fontWeight="700" fontSize="9"
        fill="#ffffff" letterSpacing="0.5"
      >
        P
      </text>
      <text
        x="22" y="28"
        fontFamily="Arial, sans-serif" fontWeight="300" fontSize="9"
        fill="#c9a96e" letterSpacing="0.5"
      >
        T
      </text>
    </svg>
  );
}
