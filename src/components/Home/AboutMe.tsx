import Section from '../Section';

function AboutMe() {
  return (
    <Section title="about me">
      <div className="flex flex-col gap-2 font-sans text-base md:px-4 md:pb-2">
        <p>
          I'm a builder, tinkerer, and <strong>full-stack developer</strong> who
          loves turning wild ideas into real, working software. I've helped
          teams ship subscription flows handling <strong>$2M+</strong> in annual
          revenue, innovative <strong>AI-based learning platforms</strong> and{' '}
          <strong>cybersecurity dashboards</strong>.
        </p>
        <p>
          No matter what I'm working on, I'm all about{' '}
          <strong>fast feedback</strong>, <strong>clean code</strong>, and
          having fun.
        </p>
      </div>
    </Section>
  );
}

export default AboutMe;
