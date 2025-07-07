import Section from '../Section';
import Experience from './Experience';

function Education() {
  return (
    <Section title="education" id="education">
      <Experience
        company="University of Guelph"
        position="Bachelor of Computing"
        startDate="2020"
        endDate="2025"
        companyLink="https://uoguelph.ca"
        logoSrc="/uog.svg"
        className="mt-2"
      >
        <ul className="marker:text-accent list-inside list-none">
          <li>
            Major in <strong>Software Engineering</strong>
          </li>
          <li>
            Minor in <strong>Project Management</strong>
          </li>
          <li>
            Graduated with <strong>Honors</strong>
          </li>
          <li>
            GPA: <strong>3.7/4.0</strong>
          </li>
        </ul>
      </Experience>
    </Section>
  );
}

export default Education;
