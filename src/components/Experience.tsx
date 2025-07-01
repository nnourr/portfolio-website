interface ExperienceProps {
  company: string;
  position: string;
  dateRange: string;
  description: string;
  logoSrc?: string;
  className?: string;
}

function Experience({
  company,
  position,
  dateRange,
  description,
  logoSrc,
  className = '',
}: ExperienceProps) {
  return (
    <div className={`flex flex-col gap-3 rounded-lg p-4 ${className}`}>
      {/* Header with logo, company info, and date */}
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          {/* Company Logo */}
          {logoSrc && (
            <div className="flex-shrink-0">
              <img
                src={logoSrc}
                alt={`${company} logo`}
                className="h-12 w-12 rounded object-contain"
              />
            </div>
          )}

          {/* Company and Position */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-white">{company}</h3>
            <p className="text-sm text-gray-300">{position}</p>
          </div>
        </div>

        {/* Date Range */}
        <div className="flex-shrink-0 text-right text-sm text-gray-400">
          {dateRange}
        </div>
      </div>

      {/* Description */}
      <div className="text-sm leading-relaxed text-gray-300">{description}</div>
    </div>
  );
}

export default Experience;
