import { useEffect } from 'react';
import Button from '../../components/Button';
import { useBarHideStore } from '../../stores/barHideStore';
import { useBlogNavigation } from '../../hooks/useBlogNavigation';
import Quote from '../../components/quote';

function RbcBlog() {
  const { sections, scrollToSection } = useBlogNavigation();
  const { setOpen } = useBarHideStore();

  useEffect(() => {
    setOpen();
  }, [setOpen]);

  return (
    <div className="relative mt-6 pt-10 md:pt-22">
      <div className="fade-in animate-in 32 absolute -top-24 -right-4 -left-4 -z-50 h-32 duration-1000 ease-in-out md:h-52">
        <img
          src="/rbc-banner.webp"
          alt="rbc banner"
          className="h-full w-full rounded-2xl object-cover object-right opacity-90"
        />
        <img
          src="/rbc-banner.webp"
          alt="rbc banner"
          className="absolute top-0 left-0 -z-10 h-2/3 w-full rounded-2xl object-cover blur-2xl md:opacity-70"
        />
      </div>
      <div className="md:bg-secondary/30 flex scroll-m-24 flex-col transition-all duration-700 ease-out md:rounded-2xl md:px-6 md:py-8 md:shadow-md md:backdrop-blur-xs">
        <div className="flex items-center gap-2">
          <h1
            className={`decoration-accent text-4xl font-bold underline decoration-2`}
          >
            RBC
          </h1>
          <div className="bg-accent h-4 w-4 rounded-full transition-all duration-300 ease-in-out active:h-3 active:w-12" />
        </div>
        <div className="flex flex-col gap-4 font-sans text-base [&>section]:flex [&>section]:flex-col [&>section]:gap-2 [&>section>h1]:scroll-m-24">
          <p>
            At RBC, I worked as an <strong>Applications Developer</strong> under
            JSOC (part of Global Cyber Security) for <strong>4 months</strong>,
            from May 2023 until August 2023. I worked on a data reporting tool
            for RBC's cyber security resilience, built with{' '}
            <strong>Vue.js</strong> and <strong>Django Rest Framework</strong>.
          </p>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="Highlights"
            >
              Highlights
            </h1>
            <ul className="marker:text-accent list-inside list-disc *:mb-1">
              <li>
                Developed a data reporting tool for RBC's cyber security
                resilience using <strong>Vue.js</strong> and{' '}
                <strong>Django REST</strong>.
              </li>
              <li>
                Implemented the <strong>DRF-Spectacular</strong> library to
                generate accurate API documentation, improving QA & onboarding.
              </li>
              <li>
                Created a <strong>Mock API</strong> using Django and Faker
                library to facilitate end-to-end testing for robust data
                ingestion.
              </li>
              <li>
                Led the development of dynamic, responsive frontend components
                using <strong>Vue.js</strong> and <strong>Tailwind</strong>.
              </li>
              <li>
                Participated in hackathons and case competitions, showcasing
                innovative solutions and collaboration skills.
              </li>
            </ul>
          </section>

          <section>
            <Quote>
              <h3 className="mb-2 text-xl font-semibold" id="Contents">
                Contents
              </h3>
              <nav className="flex flex-col gap-1">
                {sections.map(({ id, title }) => (
                  <Button
                    key={id}
                    variant="ghost"
                    onClick={() =>
                      scrollToSection(sections.findIndex(s => s.id === id))
                    }
                    className="text-accent origin-left text-left hover:underline dark:font-bold"
                  >
                    {title}
                  </Button>
                ))}
              </nav>
            </Quote>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="About RBC"
            >
              About RBC
            </h1>
            <p>
              RBC is one of Canada's <strong>largest banks</strong> by market
              capitalization. The team I worked on, JSOC, handled projects
              concerning the{' '}
              <strong>
                digital security of the bank's employees and customers
              </strong>
              .
            </p>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="Learning Goals"
            >
              Learning Goals & Achievements
            </h1>

            <p>My learning goals for this term were:</p>

            <ul className="marker:text-accent list-inside list-disc *:mb-1">
              <li>Grow my network and improve my networking skills</li>
              <li>Get to know everyone on my team</li>
              <li>Learn more about Cyber Security</li>
              <li>Perform a team presentation about a topic or a new idea</li>
            </ul>

            <p>
              My goals for this term were mostly focused on{' '}
              <strong>Soft-Skills</strong> and{' '}
              <strong>building interpersonal relationships</strong>. I managed
              to succeed, attending multiple networking events and getting a lot
              more comfortable reaching out to people. I was also successful in
              performing a team presentation, as you can read more about in the
              Experience section.
            </p>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="Backend Development"
            >
              Backend Development
            </h1>

            <p>
              At RBC, I learned what it takes to build <strong>quality</strong>,{' '}
              <strong>resilient</strong> and <strong>fast</strong> backends. I
              started with rebuilding our entire <strong>REST API</strong> to
              better handle our frontend requirements, re-thinking how we use{' '}
              <strong>Django Serializers</strong> for a better{' '}
              <strong>developer experience</strong> and{' '}
              <strong>scalability</strong>.
            </p>

            <p>
              I was also in charge of implementing the cutting edge{' '}
              <strong>DRF-Spectacular</strong> library, which utilizes the{' '}
              <strong>Open API</strong> specification to automatically generate
              accurate and usable documentation, facilitating a{' '}
              <strong>better QA and on-boarding experience</strong>.
            </p>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="Frontend Development"
            >
              Frontend Development
            </h1>

            <p>
              On the frontend, we use <strong>Figma</strong> to create all our
              designs before implementing them in <strong>Vue.js</strong>. This
              was my first time using the framework, so I had to utilize my{' '}
              <strong>fast-learning skills</strong> to on-board to our
              application.
            </p>

            <p>
              Initially, I implemented pre-designed components using{' '}
              <strong>Tailwind</strong> and <strong>UseFetch</strong> to
              communicate with the endpoints I had created. These components
              were <strong>dynamic</strong> and <strong>bug-free</strong>, as I
              used <strong>Jest</strong> to ensure functionality.
            </p>

            <p>
              After gaining familiarity with Vue.js, I moved on to designing a
              component myself - a new <strong>Priority Tag</strong>. This
              involved design changes across the entire application, providing
              me with extensive experience in Figma. Working{' '}
              <strong>cross-functionally</strong> with{' '}
              <strong>Project Managers and Project Owners</strong> to gain
              approval for my designs, I learned valuable{' '}
              <strong>business communication</strong> skills.
            </p>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="Mock API Development"
            >
              Mock API Development
            </h1>

            <p>
              To facilitate better <strong>end-to-end testing</strong>, I was
              tasked with the creation of a <strong>Mock API</strong> for our
              ingestible data. This was an entirely{' '}
              <strong>new Django application</strong>, where I used the{' '}
              <strong>Faker library</strong> to generate mock data.
            </p>

            <p>
              This data also had to be <strong>relational</strong> in order to
              test our ingestion process, so I had to design the new API with
              that in mind. I also took a <strong>test-driven-design</strong>{' '}
              approach to this API, configuring our{' '}
              <strong>proprietary pipeline</strong> to{' '}
              <strong>ensure unit tests were successful</strong> before
              deployment.
            </p>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="Networking & Events"
            >
              Networking & Events
            </h1>

            <p>
              During my work term, I had numerous valuable{' '}
              <strong>networking experiences</strong>, including{' '}
              <strong>town halls</strong> and{' '}
              <strong>summer celebrations</strong>. I participated in several
              hackathons, including <strong>BattleSnake</strong>, where our team
              became <strong>finalists</strong> in the Experienced division
              using <strong>MaxN MinMax</strong> and <strong>FloodFill</strong>{' '}
              algorithms.
            </p>

            <p>
              I also participated in a <strong>Case Competition</strong> and
              attended two tech conferences: the{' '}
              <a
                className="text-accent/70"
                href="https://brainstation.io/online/intro-day/data-science"
                target="_blank"
                rel="noopener noreferrer"
              >
                Brain Station Intro-Day
              </a>{' '}
              and the{' '}
              <a
                className="text-accent/70"
                href="https://www.techto.org/in-real-life-event"
                target="_blank"
                rel="noopener noreferrer"
              >
                TechTo:TechTogether Conference
              </a>
              .
            </p>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="Demo Days"
            >
              Demo Days Initiative
            </h1>

            <p>
              Throughout my time at RBC, I initiated and participated in
              bi-weekly <strong>demo days</strong>, which I had suggested to my
              manager. During my demos, I provided the extended JSOC team with
              insights into DRF-Spectacular and Faker, showcasing their{' '}
              <strong>purpose</strong> and <strong>business impact</strong>.
              Demo days continue to this day.
            </p>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="Conclusion"
            >
              Conclusion
            </h1>

            <p>
              My work term at RBC was extremely influential. Working in an
              environment with such <strong>high code-quality standards</strong>{' '}
              was intimidating at first, but I quickly adapted and improved as a
              developer because of it. The experience also{' '}
              <strong>kickstarted my networking</strong> and brought light to
              the importance of business communication.
            </p>

            <p>
              I learned several new technologies and progressed in my path to
              becoming a well-rounded developer. I also gained new insight into{' '}
              <strong>best design practices</strong> through my experiences with
              Figma.
            </p>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="Acknowledgements"
            >
              Acknowledgements
            </h1>

            <p>I would like to thank:</p>

            <ul className="marker:text-accent list-inside list-disc *:mb-1">
              <li>
                <strong>Evan Timms</strong>, my manager, for assisting me
                throughout my entire RBC journey, helping me get adjusted to the
                very new environment.
              </li>
              <li>
                <strong>Vinícius Philot</strong>, our front-end engineer, for
                being a beacon of knowledge into advanced <strong>UI/UX</strong>{' '}
                design practices and reviewing every pixel I placed down.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default RbcBlog;
