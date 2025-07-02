interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  logoSrc?: string;
  className?: string;
  companyLink?: string;
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
  children,
}: ExperienceProps) {
  return (
    <div className={`text-contrast ${className}`}>
      {/* Header with logo, company info, and date */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-3">
          {/* Company Logo */}
          {logoSrc && (
            <div className="aspect-square h-8 flex-shrink-0">
              <img
                src={logoSrc}
                alt={`${company} logo`}
                className="aspect-square h-full object-contain dark:invert"
              />
            </div>
          )}

          {/* Company and Position */}
          <div className="flex flex-col">
            <h3 className="decoration-accent/50 leading-tight font-bold underline">
              {companyLink ? (
                <a href={companyLink} target="_blank">
                  {company}
                </a>
              ) : (
                company
              )}
            </h3>
            <p className="text-contrast/70 text-sm">{position}</p>
          </div>
        </div>

        {/* Date Range */}
        <div className="text-right text-sm text-nowrap">
          {startDate} -<br /> {endDate}
        </div>
      </div>

      {/* Description */}
      <div className="text-sm leading-relaxed">
        {children}
        <a
          className="text-accent ml-1 text-nowrap"
          onClick={() => alert('Blog coming soon!')}
        >
          read more
        </a>
      </div>
    </div>
  );
}

export default Experience;
