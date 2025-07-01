import Glass from './Glass';

export default function CornerBar({
  verticalIcons,
  horizontalIcons,
}: {
  verticalIcons: React.ReactNode[];
  horizontalIcons: React.ReactNode[];
}) {
  return (
    <div className="fixed right-4 bottom-1/12 z-50">
      {/* Glass background that will adapt to content size */}
      <Glass
        style={{
          clipPath: 'url(#test-clip)',
          WebkitClipPath: 'url(#test-clip)',
        }}
        layered={true}
        className="relative"
      >
        {/* Inline SVG for clipPath definition */}
        <svg width="0" height="0" style={{ position: 'absolute' }}>
          <defs>
            <clipPath id="test-clip" clipPathUnits="objectBoundingBox">
              <path d="M 0.921 0 C 0.965 0 1 0.038 1 0.085 L 1 0.77 C 1 0.77 1 0.77 1 0.77 C 1 0.77 1 0.77 1 0.77 L 1 0.915 C 1 0.962 0.965 1 0.921 1 L 0.079 1 C 0.035 1 0 0.962 0 0.915 L 0 0.823 C 0 0.776 0.035 0.77 0.079 0.77 L 0.73 0.77 C 0.73 0.77 0.73 0.724 0.73 0.688 L 0.73 0.085 C 0.73 0.038 0.765 0 0.809 0 L 0.921 0 Z"></path>
            </clipPath>
          </defs>
        </svg>

        <div className="bg-accent/50 absolute top-0 right-4 h-10 w-8 rounded-xs blur-lg" />
        <div className="bg-accent/50 absolute right-0 bottom-0 h-12 w-4 rounded-xs blur-lg" />
        <div className="bg-accent/50 absolute bottom-4 left-0 h-12 w-4 rounded-xs blur-lg" />
        <div className="border-secondary/100 absolute right-0 bottom-0 z-50 h-full w-full rounded-2xl border-r-4 border-b-4 blur-sm" />

        {/* Content container */}
        <div className="relative z-10 flex h-full w-full flex-col items-end">
          {/* Vertical section */}
          <div className="flex flex-col items-center justify-start space-y-4 px-2 pt-4">
            {verticalIcons.map((icon, i) => (
              <div key={i}>{icon}</div>
            ))}
          </div>

          {/* Horizontal section */}
          <div className="flex flex-col justify-end">
            <div className="flex flex-row items-center gap-4 px-4 pt-2 pb-2.5">
              {horizontalIcons.map((icon, i) => icon)}
            </div>
          </div>
        </div>
      </Glass>
    </div>
  );
}
