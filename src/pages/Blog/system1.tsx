import { useEffect } from 'react';
import Button from '../../components/Button';
import { useBarHideStore } from '../../stores/barHideStore';
import { useBlogNavigation } from '../../hooks/useBlogNavigation';

function System1Blog() {
  const { sections, scrollToSection } = useBlogNavigation();
  const { setOpen } = useBarHideStore();

  useEffect(() => {
    setOpen();
  }, []);

  return (
    <div className="relative mt-6 pt-10 md:pt-22">
      <div className="fade-in animate-in absolute -top-24 -right-4 -left-4 -z-50 h-32 duration-1000 ease-in-out md:h-52">
        <img
          src="/system1-banner.jpg"
          alt="system1 banner"
          className="h-full w-full rounded-2xl object-cover object-right opacity-90 brightness-110"
        />
        <img
          src="/system1-banner.jpg"
          alt="system1 banner"
          className="absolute top-0 left-0 -z-10 h-2/3 w-full rounded-2xl object-cover blur-2xl md:opacity-70"
        />
      </div>
      <div className="md:bg-secondary/30 flex scroll-m-24 flex-col transition-all duration-700 ease-out md:rounded-2xl md:px-6 md:py-8 md:shadow-md md:backdrop-blur-xs">
        <div className="flex items-center gap-2">
          <h1
            className={`decoration-accent text-4xl font-bold underline decoration-2`}
          >
            System1
          </h1>
          <div className="bg-accent h-4 w-4 rounded-full transition-all duration-300 ease-in-out active:h-3 active:w-12" />
        </div>
        <div className="flex flex-col gap-4 font-sans text-base [&>section]:flex [&>section]:flex-col [&>section]:gap-2 [&>section>h1]:scroll-m-24">
          <p>
            At System1, I worked as a{' '}
            <strong>Full Stack Software Engineer</strong> for{' '}
            <strong>4 months</strong>, from September 2022 until December 2022.
            During this time, I worked with <strong>Angular</strong> on the
            frontend, <strong>.NET</strong> on the backend and{' '}
            <strong>Snowflake</strong> for the database, collaborating with
            multiple <strong>Agile teams</strong>.
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
                Recognized for my fast learning on a large production project
                using cutting-edge <strong>Angular</strong> and{' '}
                <strong>.NET</strong> patterns.
              </li>
              <li>
                Optimized SQL queries to cut down on response time by{' '}
                <strong>30-40%</strong>.
              </li>
              <li>
                Thrived in fast Agile teams, using <strong>Jira</strong> and{' '}
                <strong>Slack</strong> to ensure efficient remote communication.
              </li>
            </ul>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="Contents"
            >
              Contents
            </h1>
            <nav className="flex flex-col gap-1">
              {sections.map(({ id, title }) => (
                <Button
                  variant="ghost"
                  key={id}
                  onClick={() =>
                    scrollToSection(sections.findIndex(s => s.id === id))
                  }
                  className="text-accent origin-left text-left hover:underline dark:font-bold"
                >
                  {title}
                </Button>
              ))}
            </nav>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="About System1"
            >
              About System1
            </h1>
            <p>
              System1 combines best-in-class technology & data science to
              operate the most dynamic{' '}
              <strong>Responsive Acquisition Marketing Platform (RAMP)</strong>.
              This allows them to build <strong>powerful brands</strong> across
              multiple <strong>consumer verticals</strong>, develop & grow their
              suite of <strong>privacy-focused products</strong>, and deliver{' '}
              <strong>high-intent customers</strong> to their advertising
              partners.
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
              <li>
                See how <strong>popular programming frameworks</strong> like
                Angular and .NET work differently when used in{' '}
                <strong>production environments</strong> as opposed to
                personal/small projects.
              </li>
              <li>
                Gain experience with Slack, Jira and other{' '}
                <strong>
                  professional tools for programming communication
                </strong>
                .
              </li>
              <li>
                Be able to work effectively in a{' '}
                <strong>programming team</strong> working on a{' '}
                <strong>production project</strong>.
              </li>
            </ul>

            <p>
              My goals for this work term were mostly focused on the{' '}
              <strong>soft skills</strong> of working as a Software Engineer as
              opposed to technical goals. This is because I am confident in my
              ability to learn technical concepts, but I was unsure about my
              application in a <strong>real-world working environment</strong>.
              From my experience these skills are also more valued by employers,
              meaning they will be vital for my next work term and continued
              career.
            </p>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="First Tasks"
            >
              First Tasks & Learning
            </h1>

            <p>
              My experience at System1 was <strong>fast-paced</strong>,{' '}
              <strong>technical</strong> and <strong>highly resourceful</strong>
              . My first task involved creating <strong>JIRA tickets</strong>{' '}
              from a spreadsheet created during a BugBash. Within my first
              ticket I learned about <strong>RXJS Observables</strong> as well
              as <strong>service dependency injection</strong>, immediately
              improving my knowledge about{' '}
              <strong>professional Angular development</strong>.
            </p>

            <p>
              Not much later I took on a ticket involving changes on the full
              stack, meaning I was interacting with not only Angular on the
              frontend, but also <strong>.NET</strong> and{' '}
              <strong>Snowflake</strong> for the first time. This change
              involved modifying an existing query to <strong>join data</strong>{' '}
              from a new table, then modifying the{' '}
              <strong>.NET API endpoint</strong> and frontend to reflect the
              changes. Despite adding a new table to the query, my supervisor
              and I found a way to make the query run{' '}
              <strong>30-40% faster</strong> by removing other redundant joins.
            </p>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="Security Implementation"
            >
              Security Implementation
            </h1>

            <p>
              Another memorable ticket involved me{' '}
              <strong>preventing cyber attacks</strong> by improving the{' '}
              <strong>file validation</strong> on the frontend and backend. On
              the Angular side, I developed a new component in an internal
              shared library, which made use of{' '}
              <strong>Angular FormControl</strong>. This gave me experience
              developing <strong>NPM Packages</strong> as well as{' '}
              <strong>custom Form Control validation</strong>.
            </p>

            <p>
              For the backend, I developed an{' '}
              <strong>injectable service</strong> that works with{' '}
              <strong>IFormFile</strong> objects. It checks the file extension,
              content-type and <strong>file header bytes</strong> of the
              IFormFile to make sure that it is the correct type. In order to
              make sure the code is as <strong>reusable</strong> and{' '}
              <strong>extendable</strong> as possible, I made use of the{' '}
              <strong>strategy pattern</strong> to decide what it would use to
              validate based on the file type.
            </p>

            <p>
              All a developer would have to do to add a new file type for
              validation is add a new FileType value,{' '}
              <strong>with no changes made to service itself</strong>. This
              implementation was particularly praised for its extensibility and
              clean design.
            </p>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="Recognition"
            >
              Team Recognition
            </h1>

            <p>
              During my term, I <strong>presented my work</strong> to the whole
              dev team on two separate occasions and received{' '}
              <strong>special recognition</strong> for my contributions. These
              presentations helped me develop my technical communication skills
              and gave me confidence in sharing my work with senior developers.
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
              My Fall 2022 work term could not have been more impactful. It
              exposed me to countless new experiences that will surely form the
              rest of my professional career. On the technical side, I improved
              my <strong>Angular proficiency</strong> to a{' '}
              <strong>professional standard</strong>, was exposed to{' '}
              <strong>.NET</strong> for the first time and learned the{' '}
              <strong>subtleties of high-performance SQL queries</strong>.
            </p>

            <p>
              The work done on my soft skills has been even more impactful in my
              opinion, greatly{' '}
              <strong>improving my technical communication skills</strong> and
              my <strong>confidence in an office environment</strong>. I was
              able to <strong>meet my goals</strong> and could not have been
              happier.
            </p>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="Acknowledgements"
            >
              Acknowledgements
            </h1>

            <p>I would like to give a special thank you to:</p>

            <ul className="marker:text-accent list-inside list-disc *:mb-1">
              <li>
                <strong>Chris Dekker</strong>, <strong>Matt Potts</strong>, and{' '}
                <strong>Darren Laser</strong> for the incredible support they
                gave me the entire term (not to mention all the PR comments).
              </li>
              <li>
                <strong>Babak Hajiahmadi</strong> for his onboarding and the
                entire dev team for making me feel at home in their company.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default System1Blog;
