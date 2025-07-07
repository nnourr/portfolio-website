export default function Glass({
  children,
  className,
  layered = false,
  style,
}: {
  children?: React.ReactNode;
  className?: string;
  layered?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`${className} outline-secondary/50 shadow-glass relative flex overflow-hidden rounded-2xl outline-1 transition-all duration-400 ease-[cubic-bezier(0.68,-0.55,0.27,1.25)]`}
      style={style}
    >
      <div
        className="absolute inset-0 isolate z-0 overflow-hidden backdrop-blur-[2.5px]"
        style={{ filter: 'url(#glass-distortion)' }}
      ></div>
      {layered && (
        <div className="bg-secondary/50 absolute inset-0 top-1/2 left-1/2 z-20 h-[calc(100%-1rem)] w-[calc(100%-1rem)] -translate-x-1/2 -translate-y-1/2 rounded-2xl blur-lg"></div>
      )}
      <div className="from-secondary/20 to-secondary/20 absolute inset-0 z-0 bg-gradient-to-r from-0% via-transparent via-20% to-100%"></div>
      {children}
    </div>
  );
}
