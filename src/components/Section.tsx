import { useScrollInView } from '../hooks/useScrollInView';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children: React.ReactNode;
  className?: string;
}

function Section({ title, children, className, ...props }: SectionProps) {
  const { ref, isInView } = useScrollInView<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`md:bg-secondary/30 flex scroll-m-24 flex-col transition-all duration-700 ease-out md:rounded-2xl md:px-2 md:py-4 md:shadow-md md:backdrop-blur-xs ${
        isInView
          ? 'md:translate-x-0 md:opacity-100'
          : 'md:translate-x-20 md:opacity-0'
      } ${className}`}
      {...props}
    >
      <div className="flex items-center gap-2">
        <h2 className="decoration-accent text-2xl font-bold underline decoration-2 md:pl-4 md:text-3xl">
          {title}
        </h2>
        <div className="bg-accent h-4 w-4 rounded-full transition-all duration-300 ease-in-out active:h-3 active:w-12" />
      </div>
      {children}
    </section>
  );
}

export default Section;
