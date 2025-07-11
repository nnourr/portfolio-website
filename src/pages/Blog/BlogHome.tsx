import { Link, useNavigate } from 'react-router-dom';
import Section from '../../components/Section';
import Button from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Separator } from '../../components/ui/separator';

function BlogHome() {
  const navigate = useNavigate();

  return (
    <Section title="Welcome, traveler" className="relative">
      <div className="flex flex-col gap-4 font-sans text-base md:px-4">
        <div className="mt-4 flex flex-col gap-4">
          <div className="space-y-2">
            <p>You've found my blog. Stick around.</p>
            <Separator className="my-4" />
            <h2 className="decoration-accent text-xl">Professional Work</h2>
            <Link
              to="/blog/ecobee"
              className="block transition-all duration-300 ease-in-out active:scale-95"
            >
              <div className="bg-secondary/30 hover:bg-secondary/60 rounded-lg p-4 shadow-md transition-colors">
                <h4 className="font-bold">ecobee</h4>
                <p className="text-contrast/70 text-sm">
                  I spent 8 months there, you'll be surprised just how little I
                  got done.
                </p>
              </div>
            </Link>
            <Link
              to="/blog/rbc"
              className="block transition-all duration-300 ease-in-out active:scale-95"
            >
              <div className="bg-secondary/30 hover:bg-secondary/60 rounded-lg p-4 shadow-md transition-colors">
                <h4 className="font-bold">RBC</h4>
                <p className="text-contrast/70 text-sm">
                  4 months of building surprisingly awesome solutions at
                  Canada's largest bank.
                </p>
              </div>
            </Link>
            <Link
              to="/blog/system1"
              className="block transition-all duration-300 ease-in-out active:scale-95"
            >
              <div className="bg-secondary/30 hover:bg-secondary/60 rounded-lg p-4 shadow-md transition-colors">
                <h4 className="font-bold">System1</h4>
                <p className="text-contrast/70 text-sm">
                  After 4 months I still couldn't explain what they do.
                </p>
              </div>
            </Link>
            <Link
              to="/blog/ebc"
              className="block transition-all duration-300 ease-in-out active:scale-95"
            >
              <div className="bg-secondary/30 hover:bg-secondary/60 rounded-lg p-4 shadow-md transition-colors">
                <h4 className="font-bold">Egyptian Banks Company</h4>
                <p className="text-contrast/70 text-sm">
                  4 months of building a pretend ACH system for Egypt's version
                  of NCR.
                </p>
              </div>
            </Link>
            <Separator className="my-4" />
            <h2 className="decoration-accent text-xl">Passion Projects</h2>
            <Link
              to="/blog/plant-together"
              className="block transition-all duration-300 ease-in-out active:scale-95"
            >
              <div className="bg-secondary/30 hover:bg-secondary/60 rounded-lg p-4 shadow-md transition-colors">
                <h4 className="font-bold">Plant Together</h4>
                <p className="text-contrast/70 text-sm">
                  The Google Docs of PlantUML diagrams.
                </p>
              </div>
            </Link>
            <Link
              to="/blog/music-circle"
              className="block transition-all duration-300 ease-in-out active:scale-95"
            >
              <div className="bg-secondary/30 hover:bg-secondary/60 rounded-lg p-4 shadow-md transition-colors">
                <h4 className="font-bold">Music Circle</h4>
                <p className="text-contrast/70 text-sm">
                  I was too introverted to ask people about their music tastes,
                  so I spent 4 months developing an app that does it for me.
                </p>
              </div>
            </Link>
            <Link
              to="/blog/ml-content-pipeline"
              className="block transition-all duration-300 ease-in-out active:scale-95"
            >
              <div className="bg-secondary/30 hover:bg-secondary/60 rounded-lg p-4 shadow-md transition-colors">
                <h4 className="font-bold">ML Content Pipeline</h4>
                <p className="text-contrast/70 text-sm">
                  I started this project not knowing how to use Python
                  libraries. I ended up with a crazy, distributed ML pipeline.
                </p>
              </div>
            </Link>
          </div>
        </div>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => navigate('/')}
          title="Return to home page"
          className="bg-secondary/30 md:bg-secondary/60 hover:bg-secondary -bottom-10 left-0 flex w-fit items-center overflow-hidden rounded-2xl md:shadow-md"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
          go back
          <div className="bg-accent absolute -bottom-1 left-0 h-1 w-full rounded-full opacity-50 md:group-hover:opacity-90" />
        </Button>
      </div>
    </Section>
  );
}

export default BlogHome;
