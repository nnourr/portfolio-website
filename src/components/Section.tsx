interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
  return(
    <section className='flex flex-col'>
      <div className='flex items-center gap-2'>
        <h2 className='text-2xl font-bold underline decoration-accent decoration-2'>{title}</h2>
        <div className='bg-accent rounded-full h-4 aspect-square'/>
      </div>
      {children}
    </section>
  )
}

export default Section;