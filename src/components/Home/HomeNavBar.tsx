import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faHome,
  faRocket,
  faNewspaper,
} from '@fortawesome/free-solid-svg-icons';
import type { BarItem } from '../../models/BarItem';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar';
import Button from '../Button';
import { CyclingIcon } from '../CyclingIcon';

// Work experience cycling icons (company SVGs)
const workExperienceIcons = [
  '/ecobee.svg',
  '/rbc.svg',
  '/lmai.svg',
  '/system1.svg',
  '/ebc.svg',
];

const homeNavLinks: BarItem[] = [
  {
    href: '#root',
    icon: faHome,
    key: 'home',
    label: 'Home',
    sectionId: 'root',
  },
  {
    href: '#work-exp',
    icon: faRocket,
    key: 'work-exp',
    label: 'Work Experience',
    sectionId: 'work-exp',
  },
  {
    href: '#education',
    icon: faGraduationCap,
    key: 'education',
    label: 'Education',
    sectionId: 'education',
  },
  {
    href: '#passion-proj',
    icon: faRocket,
    key: 'passion-proj',
    label: 'Passion Projects',
    sectionId: 'passion-proj',
  },
  {
    href: '#/blog',
    icon: faNewspaper,
    key: 'blog',
    label: 'Blog',
    route: '/blog',
  },
];

export default function HomeNavBar() {
  const navigate = useNavigate();

  const handleNavigation = (link: BarItem) => {
    if (link.route) {
      navigate(link.route);
    } else if (link.sectionId) {
      const element = document.getElementById(link.sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <NavBar>
      {({ hide }: { hide: boolean }) => (
        <>
          {homeNavLinks.map(link => (
            <Button
              variant="ghost"
              key={link.key}
              onClick={() => !hide && handleNavigation(link)}
              className={`group z-20 flex flex-col items-center gap-1 transition-all duration-150 ease-in-out md:hover:scale-120 md:hover:rounded-md md:hover:py-2 ${
                !hide ? 'flex-col' : 'flex-row-reverse'
              }`}
            >
              {link.key === 'work-exp' ? (
                <CyclingIcon
                  icons={workExperienceIcons}
                  intervalMs={2000}
                  animationType="fade"
                  className="aspect-square h-[20px] object-contain md:h-[25px] dark:invert"
                />
              ) : (
                <FontAwesomeIcon icon={link.icon} />
              )}
              <div
                className={`bg-accent rounded-full opacity-50 md:group-hover:opacity-90 ${
                  !hide ? 'h-1 w-4/5' : 'h-3/4 w-1'
                }`}
              />
            </Button>
          ))}
        </>
      )}
    </NavBar>
  );
}
