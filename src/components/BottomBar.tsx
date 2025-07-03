import {
  faEnvelope,
  faGraduationCap,
  faHome,
  faMoon,
  faRocket,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';
import Glass from './Glass';
import { useScrollStore } from '../stores/scrollStore';
import { useDarkMode } from '../hooks/useDarkMode';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import type { BarItem } from '../models/BarItem';
import { useBarHideStore } from '../stores/barHideStore';

export const socialLinks: BarItem[] = [
  {
    href: 'https://github.com/nnourr',
    icon: faGithub,
    key: 'github',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/nnourr/',
    icon: faLinkedin,
    key: 'linkedin',
    label: 'LinkedIn',
  },
  {
    href: 'mailto:nnourr@nnourr.me',
    icon: faEnvelope,
    key: 'mail',
    label: 'Email',
  },
];
export default function BottomBar() {
  const { hide, setOpen } = useBarHideStore();
  const { toggle: toggleDarkMode } = useDarkMode();
  return (
    <div
      className={`fixed bottom-0 z-50 mx-auto flex w-full justify-center rounded-3xl transition-all duration-150`}
      onClick={() => setTimeout(setOpen, 10)}
    >
      <div
        className={`mb-12 flex w-fit items-end justify-center gap-4 text-xl`}
      >
        <Glass layered={true} className={`${!hide ? 'h-full' : 'h-3'}`}>
          <div
            className={`text-contrast z-20 flex flex-row gap-5 px-5 ${
              !hide ? 'items-center py-2.5' : 'items-end py-1'
            }`}
          >
            {socialLinks.map(link => (
              <a
                key={link.key}
                href={hide ? undefined : link.href}
                target="_blank"
                className="z-20 flex flex-col items-center gap-1"
              >
                <FontAwesomeIcon className="aspect-square" icon={link.icon} />
                <div className="bg-accent h-1 w-4/5 rounded-full opacity-50" />
              </a>
            ))}
          </div>
        </Glass>
        <Glass layered={true} className={`${!hide ? 'h-full' : 'h-3'} `}>
          <div
            className={`text-contrast z-20 flex flex-row gap-5 px-3 ${
              !hide ? 'items-center py-2.5' : 'items-end py-1'
            }`}
          >
            <Button
              onClick={() => {
                !hide && toggleDarkMode();
              }}
              variant="ghost"
              className="text-contrast flex flex-col items-center gap-1"
            >
              <FontAwesomeIcon
                icon={faMoon}
                key="moon"
                className="z-50 aspect-square dark:hidden!"
              />
              <FontAwesomeIcon
                icon={faSun}
                key="sun"
                className="z-50 hidden! aspect-square dark:block!"
              />
              <div className="bg-accent h-1 w-4/5 rounded-full opacity-50" />
            </Button>
          </div>
        </Glass>
      </div>
      <div className="bg-secondary absolute -bottom-16 left-0 h-24 w-full blur-xl" />
    </div>
  );
}
