interface PillProps {
  children: React.ReactNode;
  className?: string;
}

function Pill({ children, className = '' }: PillProps) {
  return (
    <div
      className={`bg-accent/20 cursor-default rounded-md px-3 py-0.5 font-sans text-sm transition-all duration-200 ease-in-out select-none active:scale-x-80 active:scale-y-90 ${className}`}
    >
      {children}
    </div>
  );
}

export default Pill;
