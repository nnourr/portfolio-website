interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children: React.ReactNode;
  className?: string;
}

function Section({ title, children, className, ...props }: SectionProps) {
  return (
    <section className={`flex scroll-m-24 flex-col ${className}`} {...props}>
      <div className="flex items-center gap-2">
        <h2 className="decoration-accent text-2xl font-bold underline decoration-2">
          {title}
        </h2>
        <div className="bg-accent aspect-square h-4 rounded-full" />
      </div>
      {children}
    </section>
  );
}

export default Section;
