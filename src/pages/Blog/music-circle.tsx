import { useEffect } from 'react';
import Button from '../../components/Button';
import { useBarHideStore } from '../../stores/barHideStore';
import { useBlogNavigation } from '../../hooks/useBlogNavigation';
import Quote from '../../components/quote';

function MusicCircleBlog() {
  const { sections, scrollToSection } = useBlogNavigation();
  const { setOpen } = useBarHideStore();

  useEffect(() => {
    setOpen();
  }, [setOpen]);

  return (
    <div className="relative mt-6 pt-10 md:pt-22">
      <div className="fade-in animate-in absolute -top-24 -right-4 -left-4 -z-50 h-32 duration-1000 ease-in-out md:h-52">
        <img
          src="/musiccircle.webp"
          alt="Music Circle banner"
          className="h-full w-full rounded-2xl object-cover object-top opacity-90"
        />
        <img
          src="/musiccircle.webp"
          alt="Music Circle banner"
          className="absolute top-0 left-0 -z-10 h-2/3 w-full rounded-2xl object-cover blur-2xl md:opacity-70"
        />
      </div>
      <div className="md:bg-secondary/30 flex scroll-m-24 flex-col transition-all duration-700 ease-out md:rounded-2xl md:px-6 md:py-8 md:shadow-md md:backdrop-blur-xs">
        <div className="flex items-center gap-2">
          <h1
            className={`decoration-accent text-4xl font-bold underline decoration-2`}
          >
            Music Circle
          </h1>
          <div className="bg-accent h-4 w-4 rounded-full transition-all duration-300 ease-in-out active:h-3 active:w-12" />
        </div>
        <div className="flex flex-col gap-4 font-sans text-base [&>section]:flex [&>section]:flex-col [&>section]:gap-2 [&>section>h1]:scroll-m-24">
          <p>
            Music Circle was born from a simple desire to connect with people
            through music. During my internship, I wanted to ask my colleagues
            about their music taste to get to know them better, but with so many
            people, it felt impractical to go around asking each person
            individually. So I built a solution that would bring everyone's
            music taste together in one place.
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
                Built a <strong>collaborative music discovery</strong> platform
                using Spotify API integration
              </li>
              <li>
                Implemented <strong>real-time compatibility scoring</strong> to
                show shared musical interests
              </li>
              <li>
                Created <strong>interactive visualizations</strong> with Framer
                Motion for engaging user experience
              </li>
              <li>
                Deployed on <strong>Google Cloud Run</strong> with Docker
                containerization for scalability
              </li>
              <li>
                Achieved <strong>3 GitHub stars</strong> and active community
                usage
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
                    variant="ghost"
                    key={id}
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
              id="The Inspiration"
            >
              The Inspiration: Connecting Through Music
            </h1>

            <p>
              During my internship, I found myself in a large team where I
              wanted to get to know my colleagues better. Music has always been
              a universal language that brings people together, so I thought it
              would be a great way to connect. However, with dozens of people,
              going around asking each person about their music taste felt
              inefficient and potentially awkward.
            </p>

            <p>
              I realized there had to be a better way. What if I could create a
              platform where everyone could share their music taste
              simultaneously, see what they have in common, and discover new
              music through their colleagues? This was the seed that grew into
              Music Circle.
            </p>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="Technical Architecture"
            >
              Technical Architecture: Full-Stack Music Discovery
            </h1>

            <div className="my-4 grid md:grid-cols-2 md:gap-4">
              <Quote>
                <h3 className="mb-2 font-semibold">Frontend Stack</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <strong>React:</strong> Modern UI framework with TypeScript
                  </li>
                  <li>
                    <strong>Framer Motion:</strong> Smooth animations and
                    interactions
                  </li>
                  <li>
                    <strong>Tailwind CSS:</strong> Utility-first styling
                  </li>
                </ul>
              </Quote>

              <Quote>
                <h3 className="mb-2 font-semibold">Backend Stack</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <strong>Express.js:</strong> RESTful API server
                  </li>
                  <li>
                    <strong>Google Cloud Run:</strong> Serverless deployment
                  </li>
                  <li>
                    <strong>Docker:</strong> Containerization
                  </li>
                  <li>
                    <strong>Firestore:</strong> NoSQL database
                  </li>
                  <li>
                    <strong>Spotify API:</strong> Music data integration
                  </li>
                </ul>
              </Quote>
            </div>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="Core Features"
            >
              Core Features: What Makes Music Circle Special
            </h1>

            <div className="space-y-4">
              <Quote>
                <h3 className="mb-2 font-semibold">
                  1. Circle Creation & Invitation
                </h3>
                <p>
                  Users can create a "Circle" and invite others through a simple
                  link. This makes it easy to gather a group of people and start
                  discovering shared musical interests.
                </p>
              </Quote>

              <Quote>
                <h3 className="mb-2 font-semibold">2. Spotify Integration</h3>
                <p>
                  Music Circle connects to each user's Spotify account to fetch
                  their top 100 artists and tracks. This provides authentic,
                  real-time data about their listening habits.
                </p>
              </Quote>

              <Quote>
                <h3 className="mb-2 font-semibold">
                  3. Collaborative Analytics
                </h3>
                <p>
                  The platform aggregates everyone's music data to show
                  collective top artists, tracks, and compatibility scores
                  between members.
                </p>
              </Quote>

              <Quote>
                <h3 className="mb-2 font-semibold">
                  4. Interactive Visualizations
                </h3>
                <p>
                  Using Framer Motion, the app presents data in engaging,
                  animated charts and graphs that make discovering shared music
                  taste fun and intuitive.
                </p>
              </Quote>
            </div>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="Algorithm Design"
            >
              Algorithm Design: The Math Behind Music Discovery
            </h1>

            <p>
              The core innovation of Music Circle lies in its algorithms for
              calculating compatibility and generating collective rankings.
            </p>

            <div className="space-y-4">
              <Quote>
                <h3 className="mb-2 font-semibold">
                  Top Ten Ranking Algorithm
                </h3>
                <p>
                  The "top ten" bar chart is generated by looping through each
                  artist/track in every user's sorted top 100 list and assigning
                  points based on their position. The more points an item has,
                  the higher ranked it is across all users' lists.
                </p>
              </Quote>

              <Quote>
                <h3 className="mb-2 font-semibold">
                  Compatibility Calculation
                </h3>
                <p>
                  Compatibility is calculated by finding the number of
                  artists/tracks shared between every pair in the circle. The
                  overall circle compatibility is the average of each pairwise
                  comparison, giving a comprehensive view of how well the group
                  connects through music.
                </p>
              </Quote>
            </div>

            <p>
              These algorithms transform raw Spotify data into meaningful
              insights that help people discover connections they might not have
              realized existed.
            </p>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="User Experience"
            >
              User Experience: Making Music Discovery Fun
            </h1>

            <p>
              The user experience was designed to be intuitive and engaging,
              making music discovery feel natural and enjoyable.
            </p>

            <div className="space-y-4">
              <Quote>
                <h3 className="mb-2 font-semibold">Simple Onboarding</h3>
                <p>
                  Users join a circle through a simple link, connect their
                  Spotify account with one click, and immediately see their
                  contribution to the collective music taste.
                </p>
              </Quote>

              <Quote>
                <h3 className="mb-2 font-semibold">Real-Time Updates</h3>
                <p>
                  As new people join the circle, the collective rankings and
                  compatibility scores update in real-time, creating a dynamic
                  experience that encourages participation.
                </p>
              </Quote>

              <Quote>
                <h3 className="mb-2 font-semibold">Visual Engagement</h3>
                <p>
                  Framer Motion animations make the data visualization engaging
                  and interactive, turning music discovery into a visually
                  appealing experience.
                </p>
              </Quote>
            </div>

            <p>
              The goal was to make discovering shared music taste as easy and
              enjoyable as having a conversation about music, but with the power
              of data and visualization.
            </p>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="Development Process"
            >
              Development Process: From Idea to Production
            </h1>

            <p>
              Music Circle was developed over several months, with a focus on
              creating a polished, production-ready application.
            </p>

            <div className="space-y-4">
              <Quote>
                <h3 className="mb-2 font-semibold">Frontend Development</h3>
                <p>
                  The React frontend was built with TypeScript for type safety,
                  Tailwind CSS for styling, and Framer Motion for animations.
                  The focus was on creating a responsive, accessible interface
                  that works across all devices.
                </p>
              </Quote>

              <Quote>
                <h3 className="mb-2 font-semibold">Backend API</h3>
                <p>
                  The Express.js backend handles Spotify API integration, data
                  processing, and circle management. It's containerized with
                  Docker and deployed on Google Cloud Run for scalability.
                </p>
              </Quote>

              <Quote>
                <h3 className="mb-2 font-semibold">Data Management</h3>
                <p>
                  Firestore provides a flexible NoSQL database for storing
                  circle data, user preferences, and cached Spotify information.
                  This ensures fast queries and reliable data persistence.
                </p>
              </Quote>
            </div>

            <p>
              The development process emphasized clean code, proper testing, and
              production-ready deployment practices.
            </p>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="Spotify API Integration"
            >
              Spotify API Integration: The Heart of Music Circle
            </h1>

            <p>
              The Spotify API integration is the core of Music Circle's
              functionality, providing authentic music data from users'
              listening history.
            </p>

            <div className="space-y-4">
              <Quote>
                <h3 className="mb-2 font-semibold">OAuth Flow</h3>
                <p>
                  Users authenticate with Spotify using OAuth 2.0, granting
                  Music Circle access to their top artists and tracks. This
                  ensures data privacy and user control over their information.
                </p>
              </Quote>

              <Quote>
                <h3 className="mb-2 font-semibold">Data Fetching</h3>
                <p>
                  The app fetches each user's top 100 artists and tracks from
                  Spotify's API, providing a comprehensive view of their music
                  taste. This data is then processed and aggregated with other
                  users' data.
                </p>
              </Quote>

              <Quote>
                <h3 className="mb-2 font-semibold">Caching Strategy</h3>
                <p>
                  To optimize performance and respect API limits, Music Circle
                  implements intelligent caching of Spotify data, reducing API
                  calls while ensuring fresh data when needed.
                </p>
              </Quote>
            </div>

            <p>
              The Spotify integration makes Music Circle unique by providing
              real, personalized music data rather than generic recommendations.
            </p>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="Results & Impact"
            >
              Results & Impact: Connecting People Through Music
            </h1>

            <p>
              Music Circle has successfully achieved its goal of connecting
              people through shared musical interests, with positive reception
              from users and the developer community.
            </p>

            <div className="my-4 grid gap-4 md:grid-cols-2">
              <Quote>
                <h3 className="mb-2 font-semibold">Technical Achievements</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    ✅ <strong>3 GitHub stars</strong> from the community
                  </li>
                  <li>
                    ✅ <strong>Full-stack TypeScript</strong> implementation
                  </li>
                  <li>
                    ✅ <strong>Cloud-native deployment</strong> on Google Cloud
                  </li>
                  <li>
                    ✅ <strong>Spotify API integration</strong> with OAuth
                  </li>
                  <li>
                    ✅ <strong>Interactive visualizations</strong> with Framer
                    Motion
                  </li>
                </ul>
              </Quote>

              <Quote>
                <h3 className="mb-2 font-semibold">User Impact</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    🎵 <strong>Music discovery</strong> among colleagues
                  </li>
                  <li>
                    🎵 <strong>Social connection</strong> through shared
                    interests
                  </li>
                  <li>
                    🎵 <strong>Conversation starter</strong> for team building
                  </li>
                  <li>
                    🎵 <strong>Data-driven insights</strong> into group
                    preferences
                  </li>
                </ul>
              </Quote>
            </div>

            <p>
              The project demonstrates how technology can facilitate human
              connection and create meaningful social experiences through data
              and design.
            </p>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="Technical Learnings"
            >
              Technical Learnings: Skills Gained
            </h1>

            <p>
              Music Circle provided valuable learning opportunities across
              multiple technical domains and development practices.
            </p>

            <div className="space-y-4">
              <Quote>
                <h3 className="mb-2 font-semibold">Frontend Development</h3>
                <ul className="list-inside list-disc space-y-1">
                  <li>
                    <strong>React with TypeScript:</strong> Type-safe component
                    development
                  </li>
                  <li>
                    <strong>Framer Motion:</strong> Advanced animations and
                    interactions
                  </li>
                  <li>
                    <strong>Tailwind CSS:</strong> Utility-first styling
                    approach
                  </li>
                  <li>
                    <strong>State Management:</strong> Efficient data flow and
                    updates
                  </li>
                </ul>
              </Quote>

              <Quote>
                <h3 className="mb-2 font-semibold">Backend & Infrastructure</h3>
                <ul className="list-inside list-disc space-y-1">
                  <li>
                    <strong>Express.js API:</strong> RESTful service development
                  </li>
                  <li>
                    <strong>Google Cloud Run:</strong> Serverless deployment
                  </li>
                  <li>
                    <strong>Docker:</strong> Containerization and deployment
                  </li>
                  <li>
                    <strong>Firestore:</strong> NoSQL database design
                  </li>
                </ul>
              </Quote>

              <Quote>
                <h3 className="mb-2 font-semibold">API Integration</h3>
                <ul className="list-inside list-disc space-y-1">
                  <li>
                    <strong>OAuth 2.0:</strong> Secure authentication flows
                  </li>
                  <li>
                    <strong>Rate Limiting:</strong> API optimization strategies
                  </li>
                  <li>
                    <strong>Data Caching:</strong> Performance optimization
                  </li>
                  <li>
                    <strong>Error Handling:</strong> Robust API integration
                  </li>
                </ul>
              </Quote>
            </div>

            <p>
              The project reinforced the importance of clean architecture,
              proper testing, and user-centered design in building successful
              applications.
            </p>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="Future Possibilities"
            >
              Future Possibilities: Expanding Music Discovery
            </h1>

            <p>
              Music Circle has potential for expansion and new features that
              could enhance the music discovery experience.
            </p>

            <ul className="marker:text-accent list-inside list-disc *:mb-1">
              <li>
                <strong>Playlist Generation:</strong> Create collaborative
                playlists based on shared interests
              </li>
              <li>
                <strong>Music Recommendations:</strong> Suggest new artists and
                tracks based on circle preferences
              </li>
              <li>
                <strong>Event Integration:</strong> Connect with music events
                and concerts based on group taste
              </li>
              <li>
                <strong>Social Features:</strong> Add comments, reactions, and
                discussion threads
              </li>
              <li>
                <strong>Historical Data:</strong> Detailed insights into
                listening patterns and trends over time
              </li>
            </ul>

            <p>
              The platform's architecture is designed to be extensible, allowing
              for new features and integrations while maintaining the core focus
              on connecting people through music.
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
              Music Circle represents the power of using technology to
              facilitate human connection. What started as a simple solution to
              an interpersonal problem evolved into a full-featured platform
              that brings people together through shared musical interests.
            </p>

            <p>
              The project demonstrates that great applications don't need to
              solve complex technical problems - sometimes the most impactful
              solutions address simple human needs with elegant technical
              implementation. Music Circle shows how data, design, and
              technology can create meaningful social experiences.
            </p>

            <p>
              The technical challenges - from API integration to real-time
              updates - provided valuable learning opportunities in modern web
              development. The positive reception from users and the developer
              community validates the approach of building tools that solve real
              problems with thoughtful design.
            </p>

            <p>
              Most importantly, Music Circle succeeded in its original goal:
              making it easy for people to discover shared musical interests and
              connect through music. In a world where technology often isolates
              us, it's rewarding to build something that brings people together.
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
                <strong>My Internship Colleagues:</strong> For being the
                inspiration behind Music Circle and providing valuable feedback
                during development
              </li>
              <li>
                <strong>Spotify Developer Team:</strong> For providing a
                comprehensive and well-documented API that made this project
                possible
              </li>
              <li>
                <strong>The React Community:</strong> For the excellent tools
                and libraries that power the frontend
              </li>
              <li>
                <strong>Google Cloud Team:</strong> For the reliable and
                scalable infrastructure that hosts the application
              </li>
              <li>
                <strong>The Open Source Community:</strong> For the countless
                tools and libraries that made development efficient and
                enjoyable
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default MusicCircleBlog;
