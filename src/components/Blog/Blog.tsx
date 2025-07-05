import { Outlet } from 'react-router-dom';
import Background from '../Background';
import BottomBar from '../BottomBar';
import { useScrollHandler } from '../../hooks/useScrollHandler';
import BlogNavBar from './BlogNavBar';

interface BlogProps {
  className?: string;
}

function Blog({ className = '' }: BlogProps) {
  useScrollHandler();

  return (
    <Background className={`font-courier text-contrast ${className}`}>
      <BlogNavBar />
      <BottomBar />
      <div className="text-contrast bg-secondary/40 dark:bg-secondary/20 dark:inset-shadow-glow/20 mx-auto my-2 flex h-fit min-h-screen w-[95%] flex-col gap-4 rounded-xl px-4 pt-4 pb-4 backdrop-blur-xs md:mt-8 md:w-2xl md:bg-transparent! md:px-0 md:py-0 md:shadow-none md:inset-shadow-none! md:backdrop-blur-none!">
        <Outlet />
      </div>
    </Background>
  );
}

export default Blog;
