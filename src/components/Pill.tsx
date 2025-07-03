interface PillProps {
  children: React.ReactNode;
  className?: string;
}

function Pill({ children, className = '' }: PillProps) {
  return (
    <div className={`bg-accent/20 rounded-md px-3 py-0.5 text-sm ${className}`}>
      {children}
    </div>
  );
}

export default Pill;
