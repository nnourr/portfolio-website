export default function Glass({
  children,
  className,
  layered = false,
}: {
  children?: React.ReactNode;
  className?: string;
  layered?: boolean;
}) {
  return (
    <div
      className={`${className} relative flex cursor-pointer overflow-hidden font-semibold text-black shadow-[0_6px_6px_rgba(0,0,0,0.2),0_0_20px_rgba(0,0,0,0.1)] transition-all duration-400 ease-[cubic-bezier(0.68,-0.55,0.27,1.25)]`}
    >
      <div
        className="absolute inset-0 isolate z-0 overflow-hidden backdrop-blur-xs"
        style={{ filter: 'url(#glass-distortion)' }}
      ></div>
      {layered && <div className="bg-secondary/50 absolute inset-0 z-1"></div>}
      <div className="from-secondary/20 to-secondary/20 absolute inset-0 z-0 bg-gradient-to-r from-0% via-transparent via-20% to-100%"></div>
      {children && <div className={`z-10 w-full`}>{children}</div>}
    </div>
  );
}
