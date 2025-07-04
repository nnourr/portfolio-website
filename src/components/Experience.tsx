interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  logoSrc?: string;
  className?: string;
  companyLink?: string;
  blogLink?: string;
  children?: React.ReactNode;
}

function Experience({
  company,
  position,
  startDate,
  endDate,
  logoSrc,
  className = '',
  companyLink,
  blogLink,
  children,
}: ExperienceProps) {
  return (
    <div
      className={`text-contrast md:hover:bg-secondary/40 rounded-xl transition-all duration-300 ease-in-out md:px-4 md:py-2 ${className}`}
    >
      {/* Header with logo, company info, and date */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 md:gap-4">
          {/* Company Logo */}
          {logoSrc && (
            <div className="aspect-square h-8 flex-shrink-0 md:h-10">
              <img
                src={logoSrc}
                alt={`${company} logo`}
                className="aspect-square h-full object-contain dark:invert"
              />
            </div>
          )}

          {/* Company and Position */}
          <div className="flex flex-col">
            <h3 className="decoration-accent/50 leading-tight font-bold underline md:text-xl">
              {companyLink ? (
                <a href={companyLink} target="_blank">
                  {company}
                </a>
              ) : (
                company
              )}
            </h3>
            <p className="text-contrast/70 text-xs md:text-base">{position}</p>
          </div>
        </div>

        {/* Date Range */}
        <div className="text-right text-sm text-nowrap md:text-base">
          {startDate} -<br /> {endDate}
        </div>
      </div>

      {/* Description */}
      <div className="font-sans text-sm leading-relaxed md:ml-14 md:w-1/2 md:text-base">
        {children}
        {blogLink && (
          <a
            href={blogLink}
            target="_blank"
            className="text-accent hover:text-accent/75 cursor-pointer transition-all duration-150 ease-in-out"
          >
            read more
          </a>
        )}
      </div>
    </div>
  );
}

export default Experience;
