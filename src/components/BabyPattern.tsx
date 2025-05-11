export default function BabyPattern({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`${className} pointer-events-none`}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="babyPattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M10 10C12 8 15 8 17 10C19 12 19 15 17 17C15 19 12 19 10 17C8 15 8 12 10 10Z"
              fill="none"
              stroke="#FF6B35"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <circle cx="50" cy="50" r="3" fill="#FF6B35" opacity="0.2" />
            <path
              d="M80 30C82 28 85 28 87 30C89 32 89 35 87 37C85 39 82 39 80 37C78 35 78 32 80 30Z"
              fill="none"
              stroke="#FF6B35"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <path d="M30 80L35 75L40 80L35 85Z" fill="#FF6B35" opacity="0.2" />
            <circle cx="80" cy="80" r="2" fill="#FF6B35" opacity="0.2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#babyPattern)" />
      </svg>
    </div>
  );
}
