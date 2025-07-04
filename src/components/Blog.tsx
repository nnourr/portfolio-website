import Background from './Background';
import NavBar from './NavBar';
import TopBar from './TopBar';
import BottomBar from './BottomBar';
import { useScrollHandler } from '../hooks/useScrollHandler';

interface BlogProps {
  children?: React.ReactNode;
  className?: string;
}

function Blog({ children, className = '' }: BlogProps) {
  useScrollHandler();

  return (
    <Background className={`font-courier text-contrast pb-24 ${className}`}>
      <NavBar />
      <TopBar />
      <BottomBar />
      <div className="text-contrast bg-secondary/40 dark:bg-secondary/20 dark:inset-shadow-glow/20 mx-auto my-2 flex h-fit min-h-screen w-[95%] flex-col gap-4 rounded-xl px-4 pt-28 pb-4 backdrop-blur-xs md:mt-8 md:w-2xl md:bg-transparent! md:px-0 md:py-0 md:shadow-none md:inset-shadow-none! md:backdrop-blur-none!">
        {children}
      </div>
    </Background>
  );
}

export default Blog;
