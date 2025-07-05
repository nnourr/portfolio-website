import { Link } from 'react-router-dom';
import Section from '../../components/Section';

function BlogHome() {
  return (
    <Section title="Welcome, traveler" className="mt-24">
      <div className="flex flex-col gap-4 font-sans text-base">
        <div className="mt-4 flex flex-col gap-4">
          <div className="space-y-2">
            <Link to="/blog/ecobee" className="block">
              <div className="bg-secondary/20 hover:bg-secondary/30 rounded-lg p-4 transition-colors">
                <h4 className="font-bold">ecobee</h4>
                <p className="text-contrast/70 text-sm">
                  I spent 8 months there, you'll be surprised just how little I
                  got done.
                </p>
              </div>
            </Link>
            <Link to="/blog/react-patterns" className="block">
              <div className="bg-secondary/20 hover:bg-secondary/30 rounded-lg p-4 transition-colors">
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
