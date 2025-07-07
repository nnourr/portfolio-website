import { useScrollInView } from '../hooks/useScrollInView';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children: React.ReactNode;
  className?: string;
  size?: 'md' | 'lg';
  animate?: boolean;
}

const sizeClasses = {
  md: 'text-2xl md:pl-4 md:text-3xl',
  lg: 'text-4xl md:pl-8 md:text-5xl',
};

function Section({
  title,
  children,
  className,
  size = 'md',
  animate = true,
  ...props
}: SectionProps) {
  const { ref, isInView } = useScrollInView<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`md:bg-secondary/30 flex scroll-m-24 flex-col transition-all duration-700 ease-out md:scroll-m-52 md:rounded-2xl md:px-2 md:py-4 md:shadow-md md:backdrop-blur-xs ${
        animate &&
        (isInView
          ? 'md:translate-x-0 md:opacity-100'
          : 'md:translate-x-20 md:opacity-0')
      } ${className}`}
      {...props}
    >
      <div className="flex items-center gap-2">
        <h1
          className={`decoration-accent font-bold underline decoration-2 ${sizeClasses[size]}`}
        >
          {title}
        </h1>
        <div className="bg-accent h-4 w-4 rounded-full transition-all duration-300 ease-in-out active:h-3 active:w-12" />
      </div>
      {children}
    </section>
  );
}

export default Section;
