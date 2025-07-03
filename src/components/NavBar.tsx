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
  const { hide, setOpen } = useBarHideStore();
  return (
    <div
      className={`fixed top-[50svh] right-2 z-50 h-fit -translate-y-1/2 transition-all duration-300 ${
        !hide ? 'w-11' : 'w-3'
      }`}
      onClick={() => setTimeout(setOpen, 10)}
    >
      <Glass layered={true}>
        <div
          className={`text-contrast z-20 flex flex-col justify-start gap-5 py-3 text-xl transition-all duration-300 ${
            !hide ? 'items-center px-2.5' : 'items-start px-1'
          }`}
        >
          {navLinks.map(link => (
            <a
              key={link.key}
              href={hide ? undefined : link.href}
              className={`flex items-center gap-1 ${
                !hide ? 'flex-col' : 'flex-row-reverse'
              }`}
            >
              {link.key === 'work-exp' ? (
                <CyclingIcon
                  icons={workExperienceIcons}
                  intervalMs={2000}
                  animationType="fade"
                  className="aspect-square h-[20px] object-contain dark:invert"
                />
              ) : (
                <FontAwesomeIcon icon={link.icon} />
              )}
              <div
                className={`bg-accent rounded-full opacity-50 ${
                  !hide ? 'h-1 w-4/5' : 'h-3/4 w-1'
                }`}
              />
            </a>
          ))}
        </div>
      </Glass>
    </div>
  );
}
