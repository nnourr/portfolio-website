import Section from '../Section';
import Project from './Project';
import { faGithub, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt, faGlobe } from '@fortawesome/free-solid-svg-icons';

function PassionProjects() {
  return (
    <Section title="passion projects" id="passion-proj">
      <span className="md:px-4">this is my favorite section :)</span>
      <div className="mt-4 flex flex-col gap-6 md:mt-2 md:flex-row md:flex-wrap md:gap-5">
        <Project
          title="Plant Together"
          startDate="Jan 2025"
          endDate="May 2025"
          imageSrc="/planttogether.webp"
          imageAlt="Plant Together application interface"
          techStack={[
            'React',
            'ExpressJS',
            'PostgreSQL',
            'Redis',
            'Docker',
            'Yjs',
            'Tailwind',
          ]}
          links={[
            {
              label: 'github',
              url: 'https://github.com/nnourr/plant-together',
              icon: faGithub,
            },
            {
              label: 'blog',
              url: '/blog/plant-together',
              icon: faFileAlt,
            },
            {
              label: 'website',
              url: 'https://plant-together.nnourr.tech',
              icon: faGlobe,
            },
          ]}
        >
          <p>
            The Google Docs of Software Design. Collaboratively create UML
            diagrams using PlantUML, in real-time.
          </p>
          <p>
            Used by <strong>50+</strong> students for <strong>300+</strong>{' '}
            designs.
          </p>
        </Project>
        <Project
          title="Music Circle"
          startDate="May 2024"
          endDate="Aug 2024"
          imageSrc="/musiccircle.webp"
          imageAlt="Music Circle"
          reverse
          techStack={[
            'React',
            'ExpressJS',
            'GCP Run',
            'Docker',
            'Firebase',
            'Tailwind',
            'Spotify API',
          ]}
          links={[
            {
              label: 'github',
              url: 'https://github.com/nnourr/plant-together',
              icon: faGithub,
            },
            {
              label: 'blog',
              url: '/blog/music-circle',
              icon: faFileAlt,
            },
            {
              label: 'website',
              url: 'https://plant-together.nnourr.tech',
              icon: faGlobe,
            },
          ]}
        >
          <p>
            Curious what your friends actually listen to? Music Circle extracts
            everyone's music taste to reveal what you really have in common.
          </p>
        </Project>
        <Project
          title="ML Content Pipeline"
          startDate="Mar 2021"
          endDate="Jun 2021"
          imageSrc="/rocketleagueimg.webp"
          imageAlt="Rocket League"
          techStack={[
            'Python Flask',
            'Google Cloud',
            'Docker',
            'Firebase',
            'Pandas',
            'OpenCV',
            'Selenium',
            'Reddit API',
          ]}
          links={[
            {
              label: 'github',
              url: 'https://github.com/nnourr/RLTikTok_EditVideo',
              icon: faGithub,
            },
            {
              label: 'blog',
              url: '/blog/ml-content-pipeline',
              icon: faFileAlt,
            },
            {
              label: 'tiktok',
              url: 'https://www.tiktok.com/@supersonic__legend',
              icon: faTiktok,
            },
          ]}
        >
          <p>
            Automated, 24/7 TikTok content creation pipeline. Uses ML to
            transform Rocket League replays into engaging, viral clips.
          </p>
        </Project>
        <Project
          title="Explore NASA"
          startDate="Jan 2022"
          imageSrc="/explorenasa.webp"
          reverse
          imageAlt="Explore NASA"
          techStack={['React', 'Netlify', 'NASA API']}
          links={[
            {
              label: 'github',
              url: 'https://github.com/nnourr/Explore-NASA',
              icon: faGithub,
            },
            {
              label: 'website',
              url: 'https://explore-nasa.netlify.app/',
              icon: faGlobe,
            },
          ]}
        >
          <p>Explore NASA's vast collection of images and videos.</p>
        </Project>
      </div>
    </Section>
  );
}

export default PassionProjects;
