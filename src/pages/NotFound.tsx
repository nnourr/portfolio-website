import { useNavigate } from 'react-router-dom';
import Background from '../components/Background';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function NotFound() {
  const navigate = useNavigate();

  return (
    <Background className="font-courier text-contrast" showCTA={false}>
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="text-contrast bg-secondary/40 dark:bg-secondary/20 dark:inset-shadow-glow/20 mx-auto flex max-w-xl flex-col items-center gap-4 rounded-xl px-8 py-12 backdrop-blur-xs md:bg-transparent! md:px-0 md:py-0 md:shadow-none md:inset-shadow-none! md:backdrop-blur-none!">
          {/* 404 Number */}
          <div className="text-center">
            <h1 className="text-8xl font-bold md:text-9xl">404</h1>
            <h2 className="text-2xl font-semibold md:text-3xl">
              <span className="decoration-accent underline decoration-2">
                Page Not Found
              </span>
              <span className="ml-2 decoration-0">🤔</span>
            </h2>
          </div>

          {/* Error Message */}
          <div className="text-center">
            <p className="text-contrast/70 font-sans text-base md:text-lg">
              Oops! The page you're looking for doesn't exist. It might have
              been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => navigate('/')}
              title="Return to home page"
              className="bg-secondary/30 md:bg-secondary/60 hover:bg-secondary flex items-center gap-2 rounded-2xl md:shadow-md"
            >
              <FontAwesomeIcon icon={faHome} />
              Go Home
              <div className="bg-accent absolute -bottom-1 left-0 h-1 w-full rounded-full opacity-50 md:group-hover:opacity-90" />
            </Button>
          </div>
        </div>
      </div>
    </Background>
  );
}

export default NotFound;
