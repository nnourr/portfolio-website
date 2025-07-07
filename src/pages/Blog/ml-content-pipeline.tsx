import { useEffect } from 'react';
import Button from '../../components/Button';
import { useBarHideStore } from '../../stores/barHideStore';
import { useBlogNavigation } from '../../hooks/useBlogNavigation';
import Quote from '../../components/quote';

function MLContentPipelineBlog() {
  const { sections, scrollToSection } = useBlogNavigation();
  const { setOpen } = useBarHideStore();

  useEffect(() => {
    setOpen();
  }, [setOpen]);

  return (
    <div className="relative mt-6 pt-10 md:pt-22">
      <div className="fade-in animate-in absolute -top-24 -right-4 -left-4 -z-50 h-32 duration-1000 ease-in-out md:h-52">
        <img
          src="/rocketleagueimg.webp"
          alt="Rocket League ML Pipeline"
          className="h-full w-full rounded-2xl object-cover object-top opacity-90"
        />
        <img
          src="/rocketleagueimg.webp"
          alt="Rocket League ML Pipeline"
          className="absolute top-0 left-0 -z-10 h-2/3 w-full rounded-2xl object-cover blur-2xl md:opacity-70"
        />
      </div>
      <div className="md:bg-secondary/30 flex scroll-m-24 flex-col transition-all duration-700 ease-out md:rounded-2xl md:px-6 md:py-8 md:shadow-md md:backdrop-blur-xs">
        <div className="flex items-center gap-2">
          <h1
            className={`decoration-accent text-2xl font-bold underline decoration-2 md:text-4xl`}
          >
            ML Content Pipeline
          </h1>
          <div className="bg-accent h-4 w-4 rounded-full transition-all duration-300 ease-in-out active:h-3 active:w-12" />
        </div>
        <div className="flex flex-col gap-4 font-sans text-base [&>section]:flex [&>section]:flex-col [&>section]:gap-2 [&>section>h1]:scroll-m-24">
          <p>
            In early 2021, I embarked on an ambitious project that combined my
            love for Rocket League with my growing interest in machine learning
            and automation. The goal was simple yet audacious: create a fully
            automated pipeline that could transform Rocket League replays into
            engaging TikTok content. What started as a passion project became a
            deep dive into microservices, computer vision, and the art of viral
            content creation.
          </p>
          <p>
            There is something I want to make clear before we get into the
            weeds. Unfortunately, this just doesn't work anymore. This is
            because of a change TikTok made to it's auth tokens. Previously, I
            would authenticate by injecting cookies into the browser that
            already had my session. Now, TikTok creates that cookie with a
            location tag, meaning my sessions are invalidated. I could get
            around this by developing a cloud service that generates the cookie
            in roughly the same area as the rest of my system, but I decided
            that this was too much effort.
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
                Built a <strong>fully automated content pipeline</strong> that
                processes Rocket League replays 24/7
              </li>
              <li>
                Implemented <strong>computer vision</strong> to detect goals
                using OpenCV
              </li>
              <li>
                Designed <strong>microservice architecture</strong> on Google
                Cloud Run with Docker containerization
              </li>
              <li>
                Created <strong>web dashboard</strong> for manual video editing
                and parameter tuning
              </li>
              <li>
                Integrated <strong>Reddit API</strong> for content discovery and
                Selenium for automated TikTok uploads
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
              id="The Vision"
            >
              The Vision: Why This Project?
            </h1>

            <p>
              Honestly, I was bored and wanted to learn something new. My
              boredom turned into inspiration when I stumbled upon a youtube
              tutorial about automated content re-posting using Python. And I
              mean, this was simple. It would literally just download a video
              using an API, and then re-post it to another platform. As time
              went on, I kept thinking of new ways to expand on this idea to
              create something more dynamic and interesting.
            </p>

            <p>In the end, I ended up with these goals:</p>

            <ul className="marker:text-accent list-inside list-disc *:mb-1">
              <li>
                Learn <strong>microservice architecture</strong> in a real-world
                context
              </li>
              <li>
                Master <strong>computer vision</strong> techniques for video
                processing
              </li>
              <li>
                Explore <strong>document-oriented databases</strong> with
                Firebase
              </li>
              <li>
                Create a <strong>fully automated content pipeline</strong> that
                could run 24/7
              </li>
              <li>
                Build something that could potentially generate viral content
              </li>
            </ul>

            <p>
              The project would become my first serious foray into machine
              learning, automation, and cloud architecture.
            </p>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="Architecture Overview"
            >
              Architecture: The Pipeline Design
            </h1>

            <p>
              The system was designed as a series of microservices, each
              responsible for a specific part of the content creation process.
              Microservices came into play because of how necessary it was to
              scale different parts of the system independently. For example,
              editing the video was less computationally expensive but more
              time-consuming than searching for a goal using computer vision.
            </p>

            <h3 className="font-semibold">Pipeline Flow:</h3>
            <ol className="marker:text-accent list-inside list-decimal space-y-1">
              <li>
                <strong>Content Discovery:</strong> Reddit API scrapes
                r/RocketLeague for replay files
              </li>
              <li>
                <strong>Video Processing:</strong> OpenCV analyzes frames to
                find when a goal was scored
              </li>
              <li>
                <strong>Video Editing:</strong> MoviePy creates highlight clips
                with effects when a goal was scored
              </li>
              <li>
                <strong>Quality Control:</strong> Web dashboard for manual
                review and editing in case openCV got something wrong
              </li>
              <li>
                <strong>Content Distribution:</strong> Selenium automates TikTok
                uploads
              </li>
            </ol>

            <p>
              Each service was containerized with Docker and deployed on Google
              Cloud Run, making the system highly scalable and cost-effective.
              Firebase served as our document database, storing metadata about
              each video, processing status, and performance metrics.
            </p>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="Goal Detection Algorithm"
            >
              The Heart: Goal Detection Algorithm
            </h1>

            <p>
              The core innovation of this project was the goal detection
              algorithm. Rocket League's UI displays the score prominently, so I
              realized I could use computer vision to detect when the score
              changes - the moment a goal is scored.
            </p>

            <p>The algorithm worked by:</p>

            <ul className="marker:text-accent list-inside list-disc *:mb-1">
              <li>
                <strong>Frame Analysis:</strong> Processing each frame to
                extract the score display region
              </li>
              <li>
                <strong>OCR Processing:</strong> Using OpenCV to read the
                numerical score values
              </li>
              <li>
                <strong>Change Detection:</strong> Monitoring for score
                increases that indicate goals
              </li>
              <li>
                <strong>Side Detection:</strong> Distinguishing between player
                and opponent goals
              </li>
            </ul>

            <Quote>
              <h3 className="mb-2 font-semibold">Technical Challenge:</h3>
              <p>
                Initially, the algorithm was painfully slow - O(n) complexity
                with linear frame scanning. This was especially problematic
                because I needed to check both player and opponent sides
                simultaneously.
              </p>
            </Quote>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="Performance Optimizations"
            >
              Performance Breakthrough: 95% Speed Improvement
            </h1>

            <p>
              The initial implementation was too slow for practical use. I
              needed to process hours of gameplay footage efficiently. Here's
              how I achieved a 95% performance improvement:
            </p>

            <div className="space-y-4">
              <Quote>
                <h3 className="mb-2 font-semibold">1. Multithreading</h3>
                <p>
                  Instead of checking player and opponent sides sequentially, I
                  implemented parallel processing to analyze both sides
                  simultaneously. This effectively halved the processing time.
                </p>
              </Quote>

              <Quote>
                <h3 className="mb-2 font-semibold">2. Frame Sampling</h3>
                <p>
                  I reduced precision by checking every 2nd frame instead of
                  every frame. While this meant potentially missing some goals,
                  the trade-off was worth it for the massive speed improvement.
                </p>
              </Quote>

              <Quote>
                <h3 className="mb-2 font-semibold">
                  3. Binary Search Algorithm
                </h3>
                <p>
                  The breakthrough came when I realized this was essentially a
                  search problem. I refactored the algorithm to use binary
                  search, reducing time complexity from O(n) to O(log n). This
                  was the most significant optimization.
                </p>
              </Quote>
            </div>

            <p>
              The combination of these optimizations resulted in a 95% reduction
              in processing time, making the system practical for real-world
              use.
            </p>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="Web Dashboard"
            >
              Quality Control: The Web Dashboard
            </h1>

            <p>
              No automated system is perfect, especially when dealing with
              complex video content. I built a web dashboard to provide manual
              oversight and fine-tuning capabilities.
            </p>

            <p>The dashboard featured:</p>

            <ul className="marker:text-accent list-inside list-disc *:mb-1">
              <li>
                <strong>Video Review Interface:</strong> Browse and watch all
                processed videos
              </li>
              <li>
                <strong>Manual Editing Tools:</strong> Adjust clip start/end
                times for incorrectly detected goals
              </li>
              <li>
                <strong>Parameter Tuning:</strong> Fine-tune detection
                sensitivity for difficult cases
              </li>
            </ul>
          </section>
          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="Conclusion"
            >
              Conclusion
            </h1>

            <p>
              The ML Content Pipeline project was a perfect example of how
              passion projects can lead to significant technical growth. What
              started as a way to combine my interests became a comprehensive
              learning experience in microservices, computer vision, and
              automated content creation.
            </p>

            <p>
              The project taught me that the best learning comes from building
              real-world systems that solve actual problems. The challenges I
              faced - from performance optimization to handling edge cases -
              provided insights that I couldn't have gained from tutorials
              alone.
            </p>

            <p>
              Most importantly, this project reinforced my belief in the power
              of automation and the potential for AI/ML to transform content
              creation. While human creativity remains irreplaceable, the right
              automation can amplify our capabilities and open up new
              possibilities.
            </p>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="Demo"
            >
              Demo
            </h1>

            <Quote className="flex w-full flex-col-reverse gap-4 md:h-[30rem] md:flex-row">
              <video
                src="/rocketleaguevid.mp4"
                controls
                className="aspect-[9/16] h-full rounded-lg object-cover"
                poster="/rocketleagueimg.webp"
              >
                Your browser does not support the video tag.
              </video>
              <div className="flex flex-col gap-2">
                <p>
                  Here's an example of a video that was processed by the
                  pipeline. Notice how the algorithm detects the goal and adds
                  music and sound effects at the right time.
                </p>
                <p>
                  Fun fact: this video is live on TikTok right now! Check it out
                  at{' '}
                  <a
                    href="https://www.tiktok.com/@supersonic__legend/video/6961310582783888642"
                    className="text-accent underline"
                  >
                    @supersonic__legend
                  </a>
                  .
                </p>
              </div>
            </Quote>
          </section>

          <section>
            <h1
              className="decoration-accent text-2xl font-semibold underline decoration-2"
              id="Code Snippets"
            >
              Behind the Scenes: Key Code Snippets
            </h1>

            <p>
              Here are some of the most interesting parts of the implementation:
            </p>

            <div className="space-y-4">
              <Quote>
                <h3 className="mb-2 font-semibold">
                  Binary Search Goal Detection
                </h3>
                <pre className="overflow-x-auto text-sm">
                  {`def detect_goal_binary_search(frames, target_score):
    left, right = 0, len(frames) - 1
    
    while left <= right:
        mid = (left + right) // 2
        current_score = extract_score(frames[mid])
        
        if current_score == target_score:
            return mid
        elif current_score < target_score:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1  # Goal not found`}
                </pre>
              </Quote>

              <Quote>
                <h3 className="mb-2 font-semibold">Multithreaded Processing</h3>
                <pre className="overflow-x-auto text-sm">
                  {`def process_frame_parallel(frame):
    with ThreadPoolExecutor(max_workers=2) as executor:
        player_future = executor.submit(check_player_score, frame)
        opponent_future = executor.submit(check_opponent_score, frame)
        
        player_score = player_future.result()
        opponent_score = opponent_future.result()
        
        return player_score, opponent_score`}
                </pre>
              </Quote>
            </div>

            <p>
              These optimizations were crucial for making the system practical
              for real-world use. The binary search alone reduced processing
              time by orders of magnitude.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default MLContentPipelineBlog;
