import Section from '../../components/Section';

function EcobeeBlog() {
  return (
    <Section title="ecobee" size="lg">
      <div className="flex flex-col gap-4 font-sans text-base">
        <p>
          At ecobee, I embarked on an adventure as a{' '}
          <strong>Software Engineer</strong> on the Home Monitoring Backend
          (HMB) team for <strong>8 months</strong>, from January 2024 until
          August 2024. The HMB team was like the secret agents of backend
          services for ecobee's home security products. Ecobee is an
          eco-friendly smart home company, aiming to create products that
          promote comfort, security, and sustainability.
        </p>

        <h1
          className="decoration-accent text-2xl font-semibold underline decoration-2"
          id="Highlights"
        >
          Highlights
        </h1>
        <ul className="marker:text-accent list-inside list-disc *:mb-1">
          <li>
            Developed <strong>Google Pub/Sub-driven Go microservices</strong>{' '}
            and <strong>NestJs APIs</strong> to integrate third-party smart door
            locks and manage Beehive subscription states for{' '}
            <strong>1000s of users</strong>.
          </li>
          <li>
            Led <strong>three major GCP Kubernetes upgrades</strong> and a
            private network redesign, cutting staging costs by{' '}
            <strong>20%</strong>.
          </li>
          <li>
            Served as <strong>SCRUM Lead</strong>, introducing epic audits that
            improved Jira epic completeness by <strong>40%</strong>.
          </li>
          <li>
            Extended our <strong>GraphQL gateway</strong> to support new backend
            APIs, collaborating to meet quality requirements.
          </li>
          <li>
            Integrated <strong>Amplitude events</strong> into the{' '}
            <strong>Next.js frontend</strong> to enable real-time user analytics
            on critical flows.
          </li>
        </ul>

        <h1
          className="decoration-accent text-2xl font-semibold underline decoration-2"
          id="Learning Goals"
        >
          Learning Goals & Achievements
        </h1>

        <p>My learning goals for this term were:</p>

        <ul className="marker:text-accent list-inside list-disc *:mb-1">
          <li>
            Dive into the mysterious world of{' '}
            <strong>software architecture</strong> and infrastructure in a
            complex, hexagonal context
          </li>
          <li>
            Transform into a <strong>leadership ninja</strong> by leaving a
            positive impact on the team's culture or processes
          </li>
          <li>
            Master the art of the <strong>Go programming language</strong>
          </li>
          <li>
            Leave my mark on the <strong>GO codebase</strong>
          </li>
          <li>
            Deliver a <strong>show-stopping</strong> end of term co-op
            presentation
          </li>
          <li>
            Lead a <strong>sprint</strong> like a pro
          </li>
        </ul>

        <p>
          I gained valuable experience with <strong>Go programming</strong>,
          particularly through infrastructure deep-dives and leadership
          opportunities. I'm proud to have achieved most of my goals and made a
          meaningful impact on the team.
        </p>

        <h1
          className="decoration-accent text-2xl font-semibold underline decoration-2"
          id="Infrastructure & Architecture"
        >
          Infrastructure & Architecture Deep-Dives
        </h1>

        <p>
          I began my HMB journey by mapping out ecobee's architecture in Miro
          with my onboarding buddy. This skill evolved throughout my term, and
          diagramming became one of my most valuable skills. I also started
          learning Go using gobyexample.com, familiarizing myself with the
          language before tackling my first ticket.
        </p>

        <p>
          My first major challenge was investigating and fixing a{' '}
          <strong>bug</strong> reported by a customer. This challenge required
          me to understand the intricate details of our{' '}
          <strong>pub-sub based event-driven architecture</strong>. After
          thorough investigation, we concluded the bug required a sizable system
          redesign. I created an{' '}
          <strong>Architecture Decision Record (ADR)</strong> documenting the
          problem, context, reproduction steps, and root cause analysis. This
          ADR was presented at our weekly "Tech Topics" forum and led to a{' '}
          <strong>Jira epic</strong> to address the issue.
        </p>

        <h1
          className="decoration-accent text-2xl font-semibold underline decoration-2"
          id="GKE Upgrades"
        >
          GKE Upgrades & Infrastructure Leadership
        </h1>

        <p>
          We were running an outdated version of{' '}
          <strong>Google Kubernetes Engine (GKE)</strong>. Having never worked
          with Kubernetes before, this was an exciting opportunity to address my
          software infrastructure goal. I was paired with a more experienced
          teammate, but we both had much to learn.
        </p>

        <p>
          The upgrade process involved upgrading our{' '}
          <strong>NGINX-ingress</strong>, identifying deprecated GKE APIs (like
          the <strong>v1beta2 version of HPA</strong>), upgrading them, and then
          performing the upgrade for each cluster. We wrote comprehensive
          upgrade plan documents for each step, providing context, detailed
          steps, risk assessments, and rollback plans. We leveraged various
          metrics from <strong>Google Cloud</strong>,{' '}
          <strong>Prometheus</strong>, and <strong>Grafana</strong>, combined
          with staging environment testing, to provide detailed assessments of
          upgrade outcomes.
        </p>

        <h1
          className="decoration-accent text-2xl font-semibold underline decoration-2"
          id="Leadership Impact"
        >
          Leadership & Team Process Improvements
        </h1>

        <p>
          During the GKE upgrade, I had my first major leadership opportunity.
          On-call members guard our services' health, receiving alerts outside
          business hours during instability. In a handover meeting, an upcoming
          on-call member expressed concerns about an NGINX upgrade, citing
          unfamiliarity with the process, unclear risks, and lack of confidence
          in our rollback command.
        </p>

        <p>
          Recognizing this as a communication issue, I organized meetings to
          address it. We focused on verifying changes for production, supporting
          on-call staff, and improving release communication. The result was a
          comprehensive document with strategies to enhance communication and
          support, including using <strong>Outlook</strong> for non-blocking
          event notifications, visible metrics, and up-to-date runbooks.
        </p>

        <p>
          Since then, our on-call and release process has significantly
          improved, leading to higher satisfaction among our team, a more stable
          production environment, and happier customers!
        </p>

        <h1
          className="decoration-accent text-2xl font-semibold underline decoration-2"
          id="Hardware Service Bundles"
        >
          Hardware Service Bundles (HWSB)
        </h1>

        <p>
          Hardware Service Bundles was a major product initiative to sell our
          security hardware with an included{' '}
          <strong>ecobee SmartSecurity subscription</strong>. For this project,
          I was in charge of updating the <strong>Activation Code</strong> state
          using <strong>Google Pub/Sub</strong> event handlers in combination
          with custom client methods for our activation code and subscriptions
          provider. To facilitate better customer engagement metrics, I also
          enabled <strong>Amplitude</strong> events on our{' '}
          <strong>NextJs</strong> front-end, allowing product managers to track
          user flows and discover any problems in our UX.
        </p>

        <p>
          This project involved cross-functional collaboration across{' '}
          <strong>8+ teams</strong>, and I demonstrated my excellent
          communication skills through PRs on other team's Github repositories
          and through defining tickets and project scope by communicating with
          project managers. Currently, we sell Hardware Service Bundles every
          day, with lots of potential to grow. Check them out at{' '}
          <a
            className="text-accent/70"
            href="https://www.ecobee.com/en-ca/bundles-exclusives/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.ecobee.com/en-ca/bundles-exclusives/
          </a>
        </p>

        <h1
          className="decoration-accent text-2xl font-semibold underline decoration-2"
          id="Third Party Device Integration"
        >
          Third Party Device Integration
        </h1>

        <p>
          Once the dev work for HWSB was complete, my team moved on to
          integrating a third party device with our smart security ecosystem. As
          part of the integration, we needed to keep track of the device's
          complex state using a collection of webhooks from the third party
          provider.
        </p>

        <p>
          The complexity grew when we found there wasn't perfect parity between
          the states we need to display to the user and the state we receive
          from the third party. Faced with this problem, I created a{' '}
          <strong>state diagram</strong> detailing all possible states and how
          the device can go from one to another, facilitating further discussion
          and allowing us to identify various edge cases and future challenges.
        </p>

        <p>
          I then implemented support for one of these states, modifying our
          existing domain, decoder and service layers in our GO domain driven
          architecture. Part of this implementation involved handling a new
          webhook payload, which had a field shared by other payloads, but as a
          different type. Unfortunately, this broke our existing decoder design,
          so I was tasked with designing a workaround. The result was a new
          decoder that exploited GO's polymorphic capabilities to decode a
          variety of webhook payloads with minimal configuration.
        </p>

        <h1
          className="decoration-accent text-2xl font-semibold underline decoration-2"
          id="SCRUM Lead"
        >
          SCRUM Leadership
        </h1>

        <p>
          I've always been inspired by the various SCRUM leads I worked with
          throughout my internships, so I made it my goal this term to become
          one myself.
        </p>

        <p>At ecobee, the responsibilities of a SCRUM lead involve:</p>

        <ul className="marker:text-accent ml-4 list-inside list-disc *:mb-1">
          <li>Facilitating scope discussion during sprint planning</li>
          <li>Leading our daily standup meetings</li>
          <li>Orchestrating sprint retrospectives</li>
          <li>Delivering updates to upper management and project managers</li>
          <li>Ensuring the team is on-track and happy</li>
        </ul>

        <p>
          With help from the current SCRUM master, I gradually took on more
          responsibility and attended more skip meetings until I was able to
          lead the entirety of my last sprint! In our sprint retro before this
          one, we had discussed a problem where our Jira epics did not contain
          all the tickets required to complete the epic requirements. To address
          this issue, I introduced a new team ritual to audit the epics involved
          in the next sprint to ensure their completeness. I also encouraged
          discussion around the definition of completeness to ensure everyone
          was on the same page.
        </p>

        <p>
          I was also able to use my relative inexperience to my advantage by
          asking a lot of questions. This allowed more senior team members to
          challenge their assumptions, forcing us to discover gaps in our
          process much earlier. Leading a sprint was an eye-opening experience,
          and I'm grateful for the opportunity to apply the communication and
          leadership skills I gained through my minor in Project Management and
          my previous internships.
        </p>

        <h1
          className="decoration-accent text-2xl font-semibold underline decoration-2"
          id="Co-Op Presentation"
        >
          Co-Op Presentation
        </h1>

        <p>
          I was both excited and anxious about my first time doing an end of
          term co-op presentation. I presented with some of my fellow co-ops in
          front of all ecobee engineers and engineering managers, discussing my
          contributions and learnings during my time at ecobee. While I only had
          one day to prepare, I'm extremely proud of what I was able to create
          in such little time.
        </p>

        <p>
          I would like to share with you some slides discussing a new concept I
          had learned, which I've coined "
          <strong>Responsibility Based Error Responding</strong>":
        </p>

        {/* Image carousel - replaced Angular component with simple image grid */}
        <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {[1, 2, 3, 4, 5].map(num => (
            <img
              key={num}
              src={`/ecobeeSlides/ (${num}).JPG`}
              alt={`Ecobee presentation slide ${num}`}
              className="w-full rounded-lg shadow-md"
            />
          ))}
        </div>

        <p>
          My presentation was praised for its well-thought-out analogies,
          lightheartedness, and coherence with the ecobee brand.
        </p>

        <h1
          className="decoration-accent text-2xl font-semibold underline decoration-2"
          id="Conclusion"
        >
          Conclusion
        </h1>

        <p>
          In conclusion, I'm very proud of my co-op term at ecobee. In its
          intensely multifaceted environment, I was constantly challenged with
          complex technical and communicative problems. I gained valuable
          experience with Go programming, particularly through infrastructure
          deep-dives and significant leadership opportunities. I'm proud of the
          impact I've had on our process, as well as my contributions to our GKE
          upgrade documentation. Most of all, I'm proud to have a voice, always
          speaking at team retros, organizing events with my fellow co-ops,
          reviewing PRs, and making suggestions. This work term, I not only
          became a better developer, but also a better employee and team member.
        </p>

        <h1
          className="decoration-accent text-2xl font-semibold underline decoration-2"
          id="Acknowledgements"
        >
          Acknowledgements
        </h1>

        <p>I would like to thank:</p>

        <ul className="marker:text-accent ml-4 list-inside list-disc *:mb-1">
          <li>
            <strong>Genia (Eugenia Kondratova)</strong>, my manager, for being
            the blinding beacon of inspiration that you are. I would not have
            had the impact I did if it wasn't for your leadership.
          </li>
          <li>
            <strong>Pray Mishra</strong>, my onboarding buddy, for your
            relentless understanding of everything ecobee has ever done
            expressed exclusively and exquisitely in Miro boards.
          </li>
          <li>
            <strong>Anton Nguyen</strong> for dealing with all the headaches I
            caused and teaching by example what a staff software engineer should
            be.
          </li>
          <li>
            <strong>Chen Zhang</strong> for sticking by me through all those
            cloud upgrades we did and having my back every time I take staging
            down on accident.
          </li>
          <li>
            <strong>Dave Arnold</strong> for being an incredible managerial
            role-model and constant source of inspiration.
          </li>
          <li>
            <strong>Prasanth Pillai</strong> for teaching me how to use
            questions to facilitate discussion (the hard way).
          </li>
          <li>
            <strong>Judy</strong> for being the only Beaver in the office during
            the new office party.
          </li>
        </ul>
      </div>
    </Section>
  );
}

export default EcobeeBlog;
