import { useEffect } from 'react';
import Button from '../../components/Button';
import { useBarHideStore } from '../../stores/barHideStore';
import { useBlogNavigation } from '../../hooks/useBlogNavigation';
import Quote from '../../components/quote';

function PlantTogetherBlog() {
  const { sections, scrollToSection } = useBlogNavigation();
  const { setOpen } = useBarHideStore();

  useEffect(() => {
    setOpen();
  }, [setOpen]);

  return (
    <div className="relative mt-6 pt-10 md:pt-22">
      <div className="fade-in animate-in absolute -top-24 -right-4 -left-4 -z-50 h-32 duration-1000 ease-in-out md:h-52">
        <img
          src="/planttogether.webp"
          alt="Plant Together banner"
          className="h-full w-full rounded-2xl object-cover opacity-90"
        />
        <img
          src="/planttogether.webp"
          alt="Plant Together banner"
          className="absolute top-0 left-0 -z-10 h-2/3 w-full rounded-2xl object-cover blur-2xl md:opacity-70"
        />
      </div>
      <div className="md:bg-secondary/30 flex scroll-m-24 flex-col transition-all duration-700 ease-out md:rounded-2xl md:px-6 md:py-8 md:shadow-md md:backdrop-blur-xs">
        <div className="flex items-center gap-2">
          <h1
            className={`decoration-accent text-4xl font-bold underline decoration-2`}
          >
            Plant Together
          </h1>
          <div className="bg-accent h-4 w-4 rounded-full transition-all duration-300 ease-in-out active:h-3 active:w-12" />
        </div>
        <div className="flex flex-col gap-4 font-sans text-base [&>section]:flex [&>section]:flex-col [&>section]:gap-2 [&>section>h1]:scroll-m-24">
          <p>
            Plant Together is my passion project that started as a weekend MVP
            and evolved into a full-featured collaborative PlantUML editor. What
            began as a solution to a classroom problem became a tool used by{' '}
            <strong>50+ students</strong> to create{' '}
            <strong>300+ diagrams</strong> throughout the semester. This project
            represents my journey from identifying a real problem to building an
            innovative solution that actually made a difference.
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
                Built a <strong>real-time collaborative</strong> PlantUML editor
                with zero-latency rendering
              </li>
              <li>
                Used by <strong>50+ students</strong> to create{' '}
                <strong>300+ diagrams</strong> in one semester
              </li>
              <li>
                Implemented <strong>WebAssembly-based</strong> PlantUML
                rendering for client-side processing
              </li>
              <li>
                Led development as <strong>Product Owner</strong> in capstone
                project with 4-person team
              </li>
              <li>
                Achieved <strong>4 stars</strong> on GitHub with active
                community usage
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
                    title={`Jump to ${title} section`}
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
              id="The Problem"
            >
              The Problem: Why Plant Together Exists
            </h1>

            <p>
              During my Software Design course, my team needed to create
              numerous PlantUML diagrams collaboratively. PlantUML is a powerful
              markdown language for creating UML diagrams that describe software
              architecture, but existing collaborative solutions were
              disappointing.
            </p>

            <p>The main issues with existing solutions were:</p>

            <ul className="marker:text-accent list-inside list-disc *:mb-1">
              <li>
                <strong>Server dependency:</strong> PlantUML's Java-based
                rendering engine required external servers
              </li>
              <li>
                <strong>Network latency:</strong> Every diagram change required
                a network request, causing 1+ second delays
              </li>
              <li>
                <strong>Poor collaboration:</strong> Real-time editing was
                virtually unusable due to delays
              </li>
              <li>
                <strong>No offline support:</strong> Users couldn't work without
                internet connectivity
              </li>
            </ul>

            <p>
              I wasn't satisfied with these limitations. I wanted a solution
              that felt as responsive as Google Docs but specialized for
              PlantUML diagrams.
            </p>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="The Breakthrough"
            >
              The Breakthrough: WebAssembly-Powered Rendering
            </h1>

            <p>
              The key innovation came when I discovered <strong>CheerpJ</strong>
              , a Java runtime built with WebAssembly. This meant I could run
              the PlantUML rendering engine directly in the browser with
              virtually no delay.
            </p>

            <Quote>
              <h3 className="mb-2 font-semibold">Technical Innovation</h3>
              <p>
                By using CheerpJ to compile Java bytecode into WebAssembly and
                JavaScript, PlantUML could run natively in the browser. This
                eliminated network requests and provided instant rendering
                feedback.
              </p>
            </Quote>

            <p>
              This discovery was the catalyst that transformed a weekend project
              into something truly innovative. I could now build a collaborative
              editor that felt as responsive as a local application while
              supporting real-time collaboration.
            </p>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="MVP Development"
            >
              MVP Development: From Idea to Reality
            </h1>

            <p>
              Fueled by excitement from the CheerpJ discovery, I created an MVP
              over a single weekend using:
            </p>

            <div className="my-4 grid gap-4 md:grid-cols-2">
              <Quote>
                <h3 className="mb-2 font-semibold">Frontend Stack</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <strong>React:</strong> UI framework for the web app
                  </li>
                  <li>
                    <strong>Monaco Editor:</strong> VSCode-like code editor
                  </li>
                  <li>
                    <strong>Yjs:</strong> Real-time collaboration framework
                  </li>
                  <li>
                    <strong>plantuml-core:</strong> WebAssembly PlantUML
                    renderer
                  </li>
                </ul>
              </Quote>

              <Quote>
                <h3 className="mb-2 font-semibold">Backend Stack</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <strong>Express.js:</strong> Web server framework
                  </li>
                  <li>
                    <strong>Y-Websocket:</strong> WebSocket server for Yjs
                  </li>
                  <li>
                    <strong>Docker:</strong> Containerization for deployment
                  </li>
                  <li>
                    <strong>Google Cloud:</strong> Cloud hosting platform
                  </li>
                </ul>
              </Quote>
            </div>

            <p>
              The MVP featured real-time collaboration, instant PlantUML
              rendering, and a familiar code editor interface. Within days of
              launching, classmates were using it for their assignments.
            </p>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="Technical Architecture"
            >
              Technical Architecture Deep Dive
            </h1>

            <p>
              Plant Together's architecture is built around three core
              technologies that work together seamlessly:
            </p>

            <div className="space-y-4">
              <Quote>
                <h3 className="mb-2 font-semibold">1. Yjs for Collaboration</h3>
                <p>
                  Yjs implements Conflict-Free Replicated Data Types (CRDTs) to
                  handle real-time collaboration. Unlike Operational
                  Transformation, CRDTs allow text to be distributed and merged
                  without conflicts, providing seamless multi-user editing
                  experience.
                </p>
              </Quote>

              <Quote>
                <h3 className="mb-2 font-semibold">
                  2. Monaco Editor Integration
                </h3>
                <p>
                  The Monaco Editor provides a VSCode-like experience with
                  built-in shortcuts, syntax highlighting, and native Yjs
                  bindings. This gives users a familiar interface while enabling
                  real-time collaboration.
                </p>
              </Quote>

              <Quote>
                <h3 className="mb-2 font-semibold">
                  3. WebAssembly PlantUML Rendering
                </h3>
                <p>
                  Using CheerpJ, the Java-based PlantUML engine runs entirely in
                  the browser. This eliminates server dependencies and provides
                  instant rendering feedback, making the editing experience
                  incredibly responsive.
                </p>
              </Quote>
            </div>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="Capstone Evolution"
            >
              Capstone Project: Taking It to the Next Level
            </h1>

            <p>
              In my final semester, my team decided to dedicate our capstone
              Software Engineering project to evolving Plant Together. As the{' '}
              <strong>Product Owner</strong>, I led the charge in steering the
              product's direction based on user feedback gathered throughout the
              semester.
            </p>

            <p>Over two months of dedicated development, we added:</p>

            <ul className="marker:text-accent list-inside list-disc *:mb-1">
              <li>
                <strong>User Authentication:</strong> Secure login system with
                user profiles
              </li>
              <li>
                <strong>Cursor Highlighting:</strong> See who's editing where in
                real-time
              </li>
              <li>
                <strong>Private/Public Rooms:</strong> Control access to
                collaborative sessions
              </li>
              <li>
                <strong>Enhanced UI/UX:</strong> Improved interface with better
                user experience
              </li>
              <li>
                <strong>Export Features:</strong> Download diagrams as SVG files
              </li>
              <li>
                <strong>Offline Support:</strong> Sync changes when reconnecting
                to internet
              </li>
            </ul>

            <p>
              This evolution transformed Plant Together from a simple MVP into a
              full-featured collaborative tool that could compete with
              commercial solutions.
            </p>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="Deployment Challenges"
            >
              Deployment Challenges: From Local to Production
            </h1>

            <p>
              Deploying Plant Together presented unique challenges, particularly
              around WebSocket security and certificate management.
            </p>

            <Quote>
              <h3 className="mb-2 font-semibold">
                WebSocket Security Challenge
              </h3>
              <p>
                To connect from an HTTPS website, I needed WebSocket Secure
                (WSS) connections. This required obtaining TLS certificates and
                configuring the Y-Websocket server to support native TLS.
              </p>
            </Quote>

            <p>The solution involved:</p>

            <ul className="marker:text-accent list-inside list-disc *:mb-1">
              <li>
                <strong>Certificate Management:</strong> Using Let's Encrypt
                with Certbot for TLS certificates
              </li>
              <li>
                <strong>Server Configuration:</strong> Finding a Y-Websocket
                fork with native TLS support
              </li>
              <li>
                <strong>Linux Permissions:</strong> Properly configuring file
                permissions for certificate access
              </li>
              <li>
                <strong>Google Cloud Setup:</strong> Deploying on Compute Engine
                with proper networking
              </li>
            </ul>

            <p>
              These challenges taught me valuable lessons about production
              deployment, security, and infrastructure management.
            </p>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="Impact & Reception"
            >
              Impact & Reception: Beyond the Code
            </h1>

            <p>
              The impact of Plant Together exceeded my initial expectations. The
              tool became an integral part of our Software Design course,
              demonstrating the power of solving real problems with innovative
              solutions.
            </p>

            <div className="my-4 grid gap-4 md:grid-cols-2">
              <Quote>
                <h3 className="mb-2 font-semibold">Quantitative Impact</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    ✅ <strong>50+ students</strong> actively used the tool
                  </li>
                  <li>
                    ✅ <strong>300+ diagrams</strong> created in one semester
                  </li>
                  <li>
                    ✅ <strong>4 GitHub stars</strong> from the community
                  </li>
                  <li>
                    ✅ <strong>0 forks</strong> - unique solution in the space
                  </li>
                </ul>
              </Quote>

              <Quote>
                <h3 className="mb-2 font-semibold">Qualitative Impact</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    🎯 <strong>Positive reception</strong> from classmates
                  </li>
                  <li>
                    🎯 <strong>Improved collaboration</strong> in group projects
                  </li>
                  <li>
                    🎯 <strong>Reduced friction</strong> in diagram creation
                  </li>
                  <li>
                    🎯 <strong>Innovation recognition</strong> from professors
                  </li>
                </ul>
              </Quote>
            </div>

            <p>
              The positive reception gave me confidence to present the MVP to my
              classmates and eventually lead a team in expanding the project. It
              was incredibly rewarding to see something I built actually making
              a difference in people's workflows.
            </p>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="Personal Growth"
            >
              Personal Growth: Beyond Technical Skills
            </h1>

            <p>
              Plant Together has brought me many reasons to be proud and
              grateful. It represents more than just a technical achievement -
              it's a journey of personal growth and confidence building.
            </p>

            <div className="space-y-4">
              <Quote>
                <h3 className="mb-2 font-semibold">What I'm Proud Of</h3>
                <ul className="list-inside list-disc space-y-1">
                  <li>
                    Finding a truly innovative solution to PlantUML rendering
                  </li>
                  <li>Building an MVP in such a short timeframe</li>
                  <li>Having the courage to present the MVP to classmates</li>
                  <li>Leading an amazing team in the capstone project</li>
                  <li>Creating real impact that helped others</li>
                </ul>
              </Quote>

              <Quote>
                <h3 className="mb-2 font-semibold">What I'm Grateful For</h3>
                <ul className="list-inside list-disc space-y-1">
                  <li>The positive reception from the community</li>
                  <li>
                    My amazing team that dedicated their capstone to the project
                  </li>
                  <li>
                    The incredible impact we were able to achieve together
                  </li>
                  <li>
                    The learning opportunities that came from every challenge
                  </li>
                  <li>The confidence this project gave me as a developer</li>
                </ul>
              </Quote>
            </div>

            <p>
              This project taught me that innovation isn't just about using the
              latest technologies - it's about identifying real problems and
              finding creative solutions. The courage to present an MVP, the
              leadership to guide a team, and the persistence to overcome
              technical challenges have all contributed to my growth as both a
              developer and a person.
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
              Plant Together represents everything I love about software
              development: identifying real problems, finding innovative
              solutions, and creating tools that actually make a difference.
              From a weekend MVP to a full-featured collaborative platform, this
              project has been a journey of continuous learning and growth.
            </p>

            <p>
              The project demonstrates that the best learning comes from
              building real solutions to real problems. Every challenge - from
              WebAssembly integration to production deployment - provided
              insights that couldn't be gained from tutorials alone. The
              positive reception from users and the impact on their workflows
              has been incredibly rewarding.
            </p>

            <p>
              Most importantly, Plant Together taught me that innovation isn't
              just about using cutting-edge technologies - it's about solving
              real problems with creative solutions. The courage to present an
              MVP, the leadership to guide a team, and the persistence to
              overcome technical challenges have all contributed to my growth as
              both a developer and a person.
            </p>

            <p>
              As I continue to develop and improve Plant Together, I'm excited
              to explore new technologies and implement best practices. This
              project serves as a foundation for future innovations and a
              reminder that passion projects can evolve into meaningful tools
              that benefit others.
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
                <strong>My Capstone Team:</strong> For dedicating their final
                semester to evolving Plant Together and bringing it to the next
                level
              </li>
              <li>
                <strong>My Classmates:</strong> For providing valuable feedback
                and being early adopters of the tool
              </li>
              <li>
                <strong>@sakirtemel:</strong> For the plantuml.js implementation
                that heavily influenced my work
              </li>
              <li>
                <strong>Andreas Rozek:</strong> For the Y-Websocket TLS fork
                that enabled secure WebSocket connections
              </li>
              <li>
                <strong>Kevin Jahns:</strong> For creating y-redis, enabling
                persistent room storage
              </li>
              <li>
                <strong>The Open Source Community:</strong> For the incredible
                tools and libraries that made this project possible
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PlantTogetherBlog;
