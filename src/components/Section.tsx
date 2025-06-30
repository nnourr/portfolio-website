interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <section className="flex flex-col">
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
