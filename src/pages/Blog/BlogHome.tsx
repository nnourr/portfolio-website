import { Link, useNavigate } from 'react-router-dom';
import Section from '../../components/Section';
import Button from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function BlogHome() {
  const navigate = useNavigate();

  return (
    <Section title="Welcome, traveler" className="relative mt-24 md:mt-32">
      <Button
        variant="secondary"
        size="sm"
        onClick={() => navigate('/')}
        className="bg-secondary/30 md:bg-secondary/60 hover:bg-secondary absolute -bottom-10 left-0 flex items-center overflow-hidden rounded-2xl md:shadow-md"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
        go back
        <div className="bg-accent absolute -bottom-1 left-0 h-1 w-full rounded-full opacity-50 md:group-hover:opacity-90" />
      </Button>
      <div className="flex flex-col gap-4 font-sans text-base">
        <div className="mt-4 flex flex-col gap-4">
          <div className="space-y-2">
            <Link
              to="/blog/ecobee"
              className="block transition-all duration-300 ease-in-out active:scale-95"
            >
              <div className="bg-secondary/30 hover:bg-secondary/60 rounded-lg p-4 transition-colors">
                <h4 className="font-bold">ecobee</h4>
                <p className="text-contrast/70 text-sm">
                  I spent 8 months there, you'll be surprised just how little I
                  got done.
                </p>
              </div>
            </Link>
            <Link
              to="/blog/react-patterns"
              className="block transition-all duration-300 ease-in-out active:scale-95"
            >
              <div className="bg-secondary/30 hover:bg-secondary/60 rounded-lg p-4 transition-colors">
                <h4 className="font-bold">
                  Building Scalable React Applications
                </h4>
                <p className="text-contrast/70 text-sm">
                  Best practices and patterns for building maintainable React
                  applications.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default BlogHome;
