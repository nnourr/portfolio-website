import Section from '../Section';
import Experience from './Experience';

function WorkExperience() {
  return (
    <Section title="work experience" id="work-exp">
      <div className="mt-2 flex flex-col gap-6 md:gap-2">
        <Experience
          logoSrc={'/lmai.svg'}
          company={'LearningModeAI'}
          companyLink={'https://learningmodeai.com'}
          position={'Founding Engineer'}
          startDate={'Jan 2025'}
          endDate={'present'}
        >
          <ul className="marker:text-accent list-inside list-none">
            <li>
              Built an innovative learning platform with <strong>Go</strong>,{' '}
              <strong>AWS</strong>, <strong>React</strong>,{' '}
              <strong>Redis</strong>, <strong>Docker</strong>
            </li>
          </ul>
        </Experience>
        <Experience
          logoSrc={'/ecobee.svg'}
          company={'ecobee'}
          position={'Software Engineer Co-Op'}
          startDate={'Jan 2024'}
          endDate={'Aug 2024'}
          companyLink={'https://ecobee.com'}
          blogLink={'/blog/ecobee'}
        >
          <ul className="marker:text-accent list-inside list-none">
            <li>
              Delivered <strong>$2M+</strong> in annual revenue.
            </li>
            <li>
              Cut on-call incidents by <strong>70%</strong>.
            </li>
            <li>
              Reduced staging costs by <strong>20%</strong>.
            </li>
          </ul>
        </Experience>
        <Experience
          logoSrc={'/rbc.svg'}
          company={'Royal Bank of Canada'}
          position={'Cyber Security Developer Co-Op'}
          startDate={'May 2023'}
          endDate={'Aug 2023'}
          companyLink={'https://rbc.com'}
          blogLink={'/blog/rbc'}
        >
          <ul className="marker:text-accent list-inside list-none">
            <li>
              Built <strong>8+ scalable Vue</strong> components.
            </li>
            <li>
              Developed data-driven <strong>Django APIs</strong>.
            </li>
          </ul>
        </Experience>
        <Experience
          logoSrc={'/system1.svg'}
          company={'System1'}
          position={'Full Stack Web Developer Co-Op'}
          startDate={'Sept 2022'}
          endDate={'Dec 2022'}
          companyLink={'https://system1.com'}
          blogLink={'/blog/system1'}
        >
          <ul className="marker:text-accent list-inside list-none">
            <li>
              Cut query times by <strong>40%</strong>
            </li>
            <li>
              Built end-to-end <strong>file validation</strong>.
            </li>
          </ul>
        </Experience>
        <Experience
          logoSrc={'/ebc.svg'}
          company={'Egyptian Banks Company'}
          position={'Full Stack Web Developer Co-Op'}
          startDate={'Sept 2022'}
          endDate={'Dec 2022'}
          companyLink={'https://www.egyptianbanks.com/'}
          blogLink={'/blog/ebc'}
        >
          <ul className="marker:text-accent list-inside list-none">
            <li>
              Built an <strong>ACH system</strong> for banks.
            </li>
          </ul>
        </Experience>
      </div>
    </Section>
  );
}

export default WorkExperience;
