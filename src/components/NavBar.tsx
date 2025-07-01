import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Glass from './Glass';
import { CyclingIcon } from './CyclingIcon';
import { faHome, faRocket } from '@fortawesome/free-solid-svg-icons';
import type { BarItem } from '../models/BarItem';

// Work experience cycling icons (company SVGs)
export const workExperienceIcons = [
  '/ecobee.svg',
  '/rbc.svg',
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
    href: '#passion-proj',
    icon: faRocket,
    key: 'passion-proj',
    label: 'Passion Projects',
  },
];

export default function NavBar() {
  return (
    <div className="fixed top-[50svh] right-4 z-50 h-fit -translate-y-1/2">
      <Glass layered={true}>
        <div className="text-contrast z-20 flex flex-col items-center gap-5 px-3 py-4 text-3xl">
          {navLinks.map(link => (
            <a
              key={link.key}
              href={link.href}
              className="flex flex-col items-center gap-1"
            >
              {link.key === 'work-exp' ? (
                <CyclingIcon
                  icons={workExperienceIcons}
                  intervalMs={2000}
                  animationType="scale"
                  className="h-[30px] w-[30px] object-contain dark:invert"
                />
              ) : (
                <FontAwesomeIcon icon={link.icon} />
              )}
              <div className="bg-accent h-1 w-4/5 rounded-full" />
            </a>
          ))}
        </div>
      </Glass>
    </div>
  );
}
