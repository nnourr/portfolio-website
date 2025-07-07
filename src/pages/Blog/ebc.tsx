import { useEffect } from 'react';
import Button from '../../components/Button';
import { useBarHideStore } from '../../stores/barHideStore';
import { useBlogNavigation } from '../../hooks/useBlogNavigation';

function EbcBlog() {
  const { sections, scrollToSection } = useBlogNavigation();
  const { setOpen } = useBarHideStore();

  useEffect(() => {
    setOpen();
  }, [setOpen]);

  return (
    <div className="relative mt-6 pt-10 md:pt-22">
      <div className="fade-in animate-in absolute -top-24 -right-4 -left-4 -z-10 h-32 duration-1000 ease-in-out md:h-52">
        <img
          src="/ebc-banner.webp"
          alt="ebc banner"
          className="h-full w-full rounded-2xl object-cover opacity-90"
        />
        <img
          src="/ebc-banner.webp"
          alt="ebc banner"
          className="absolute top-0 left-0 -z-10 h-2/3 w-full rounded-2xl object-cover blur-2xl md:opacity-70"
        />
      </div>
      <div className="md:bg-secondary/30 flex scroll-m-24 flex-col transition-all duration-700 ease-out md:rounded-2xl md:px-6 md:py-8 md:shadow-md md:backdrop-blur-xs">
        <div className="flex items-center gap-2">
          <h1
            className={`decoration-accent text-4xl font-bold underline decoration-2`}
          >
            Egyptian Banks Company
          </h1>
          <div className="bg-accent h-4 w-4 rounded-full transition-all duration-300 ease-in-out active:h-3 active:w-12" />
        </div>
        <div className="flex flex-col gap-4 font-sans text-base [&>section]:flex [&>section]:flex-col [&>section]:gap-2 [&>section>h1]:scroll-m-24">
          <p>
            For my summer 2022 Co-Op placement, I worked with the Egyptian Banks
            Company in order to implement a model{' '}
            <strong>Automatic Clearing House System</strong>. This was a{' '}
            <strong>full stack project</strong> making use of{' '}
            <strong>Java SpringBoot</strong>, <strong>Angular</strong> and{' '}
            <strong>SQL Server</strong>.
          </p>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="About"
            >
              About Egyptian Banks Company
            </h1>
            <p>
              Egyptian Banks Company is a <strong>FinTech company</strong> owned
              by the <strong>Central bank of Egypt</strong>. They handle the{' '}
              <strong>technology infrastructure</strong> behind{' '}
              <strong>inter-bank transactions</strong> and <strong>ATMs</strong>
              .
            </p>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="Highlights"
            >
              Highlights
            </h1>
            <ul className="marker:text-accent list-inside list-disc *:mb-1">
              <li>
                Developed a model{' '}
                <strong>Automated Clearing House (ACH)</strong> system using
                Java and MSSQL
              </li>
              <li>
                Proficiently applied industry-standard programming practices and{' '}
                <strong>Test-Driven-Design</strong> to ensure code quality
              </li>
              <li>
                Transformed the ACH model into a web-app using{' '}
                <strong>Spring Boot</strong> and <strong>Angular</strong>
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
              id="Learning Goals"
            >
              Learning Goals & Achievements
            </h1>

            <p>My learning goals for this term were:</p>

            <ul className="marker:text-accent list-inside list-disc *:mb-1">
              <li>
                Become more familiar with <strong>production level</strong>{' '}
                software engineering best practices
              </li>
              <li>
                Expand my ability to develop web apps and{' '}
                <strong>REST APIs</strong>
              </li>
              <li>
                Improve my ability to work in a team on a{' '}
                <strong>production level project</strong>
              </li>
            </ul>

            <p>
              These goals would help me on my next work term placements as they
              would give me experience in highly demanded skills and abilities
              in today's Software Engineering environment. Previously, I have
              had experience dealing with web apps and developing my own APIs,
              but in order to expand my skills to a production-level standard, I
              had to make an attentive effort to analyze existing production
              level and engage in active feedback with my superiors.
            </p>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="Experience"
            >
              Experience
            </h1>

            <p>
              As previously mentioned, my assigned task was to create a model{' '}
              <strong>Automatic Clearing House System</strong>. An Automatic
              Clearing House system allows for the management of electronic
              banking transactions. This was achieved by using the{' '}
              <strong>REST API, JPA and DTO/Entity models</strong>. For
              implementation, I used{' '}
              <strong>Java Spring Boot, SQL Server and Angular</strong>. I was
              able to develop my Software Engineering best practices by learning{' '}
              <strong>Test Driven Development</strong>. While I wasn't able to
              work in a team, I was able to cooperate with my fellow Co-Op team
              members on the same project, allowing us to share our ideas and
              learn from each other's techniques.
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
              My Summer 2022 work term experience was extremely positive to my
              future work. It was crucial to my understanding of the role of{' '}
              <strong>best practices</strong> in production environments, as
              well as in developing my <strong>web app experience</strong>.
            </p>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="Acknowledgements"
            >
              Acknowledgements
            </h1>

            <p>
              I would to give a special thank you to my supervisors Mohammed
              Nasser and Emad Samir for their continued assistance during and
              after my work term. They guided me effectively through the new
              challenges I had to face during this work term.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default EbcBlog;
