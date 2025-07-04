import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Glass from './Glass';
import { CyclingIcon } from './CyclingIcon';
import {
  faGraduationCap,
  faHome,
  faRocket,
} from '@fortawesome/free-solid-svg-icons';
import type { BarItem } from '../models/BarItem';
import { useScrollStore } from '../stores/scrollStore';
import { useBarHideStore } from '../stores/barHideStore';

// Work experience cycling icons (company SVGs)
export const workExperienceIcons = [
  '/ecobee.svg',
  '/rbc.svg',
  '/lmai.svg',
  '/system1.svg',
  '/ebc.svg',
];

export const navLinks: BarItem[] = [
  {
    href: '#root',
    icon: faHome,
    key: 'home',
    label: 'Home',
  },
  {
    href: '#work-exp',
    icon: faRocket, // This will be overridden by cycling icons
    key: 'work-exp',
    label: 'Work Experience',
  },
  {
    href: '#education',
    icon: faGraduationCap,
    key: 'education',
    label: 'Education',
  },
  {
    href: '#passion-proj',
    icon: faRocket,
    key: 'passion-proj',
    label: 'Passion Projects',
  },
];

export default function NavBar() {
  const { hide, setOpen, keepOpen, close } = useBarHideStore();
  const { showTopBar } = useScrollStore();
  return (
    <div
      className={`pointer-events-none fixed top-0 right-0 z-50 h-full w-full transition-all duration-300 md:right-1/2 md:translate-x-1/2 xl:max-w-11/12 ${
        showTopBar ? 'lg:w-3xl' : 'xl:w-6xl'
      }`}
    >
      <div
        className="pointer-events-auto absolute top-[50svh] right-0 h-56 w-16 -translate-y-1/2 md:h-64 md:w-20"
        onMouseEnter={keepOpen}
        onMouseLeave={close}
        onClick={() => setTimeout(setOpen, 10)}
      />
      <div
        className={`pointer-events-auto absolute top-[50svh] right-2 -translate-y-1/2 transition-all duration-300 ${
          !hide ? 'w-11 md:w-14' : 'w-3'
        } ${!showTopBar && 'xl:right-8'} `}
        onMouseEnter={keepOpen}
        onMouseLeave={close}
        onClick={() => setTimeout(setOpen, 10)}
      >
        <Glass layered={true}>
          <div
            className={`text-contrast z-20 flex flex-col justify-center gap-5 py-3 text-xl transition-all duration-300 md:text-3xl ${
              !hide ? 'items-center px-2.5' : 'items-start px-1'
            }`}
          >
            {navLinks.map(link => (
              <a
                key={link.key}
                href={hide ? undefined : link.href}
                className={`group z-20 flex origin-right flex-col items-center gap-1 transition-all duration-150 ease-in-out md:hover:scale-120 md:hover:rounded-md md:hover:py-2 ${
                  !hide ? 'flex-col' : 'flex-row-reverse'
                }`}
              >
                {link.key === 'work-exp' ? (
                  <CyclingIcon
                    icons={workExperienceIcons}
                    intervalMs={2000}
                    animationType="fade"
                    className="aspect-square h-[20px] object-contain md:h-[30px] dark:invert"
                  />
                ) : (
                  <FontAwesomeIcon icon={link.icon} />
                )}
                <div
                  className={`bg-accent rounded-full opacity-50 md:group-hover:opacity-90 ${
                    !hide ? 'h-1 w-4/5' : 'h-3/4 w-1'
                  }`}
                />
              </a>
            ))}
          </div>
        </Glass>
      </div>
    </div>
  );
}
