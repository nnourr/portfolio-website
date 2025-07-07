import { faEnvelope, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';
import Glass from './Glass';
import { useDarkMode } from '../hooks/useDarkMode';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import type { BarItem } from '../models/BarItem';
import { useBarHideStore } from '../stores/barHideStore';

const socialLinks: BarItem[] = [
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
  const { hide, setOpen, keepOpen, close } = useBarHideStore();
  const { toggle: toggleDarkMode } = useDarkMode();
  return (
    <div
      className={`fixed bottom-0 z-50 mx-auto flex w-full justify-center rounded-3xl transition-all duration-150`}
      onClick={() => setTimeout(setOpen, 50)}
      onFocus={() => setTimeout(setOpen, 50)}
    >
      <div
        className="absolute right-1/2 bottom-4 h-16 w-52 translate-x-1/2 md:bottom-2 md:h-20 md:w-64"
        onMouseEnter={keepOpen}
        onMouseLeave={close}
        onClick={() => setTimeout(setOpen, 50)}
      />
      <div
        className={`mb-12 flex w-fit items-end justify-center gap-4 text-xl md:mb-8 md:text-2xl`}
        onMouseEnter={keepOpen}
        onMouseLeave={close}
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
                aria-label={link.label}
                className="md:hover:bg-secondary group z-20 flex origin-bottom flex-col items-center gap-1 transition-all duration-150 ease-in-out md:hover:scale-120 md:hover:rounded-md md:hover:px-2"
              >
                <FontAwesomeIcon className="aspect-square" icon={link.icon} />
                <div className="bg-accent h-1 w-4/5 rounded-full opacity-50 group-hover:opacity-90" />
              </a>
            ))}
          </div>
        </Glass>
        <Glass layered={true} className={`${!hide ? 'h-full' : 'h-3'} `}>
          <div
            className={`text-contrast z-20 flex flex-row gap-5 ${
              !hide ? 'items-center' : 'items-end'
            }`}
          >
            <Button
              onClick={() => {
                if (!hide) toggleDarkMode();
              }}
              variant="ghost"
              className={`md:hover:bg-contrast group z-20 flex flex-col items-center gap-1 px-3 transition-all duration-150 ease-in-out md:hover:scale-120 md:hover:rounded-lg ${
                !hide ? 'py-2.5' : 'py-1'
              }`}
            >
              <FontAwesomeIcon
                icon={faMoon}
                key="moon"
                className="z-50 aspect-square md:group-hover:invert dark:hidden!"
              />
              <FontAwesomeIcon
                icon={faSun}
                key="sun"
                className={`z-50 hidden! aspect-square md:group-hover:invert dark:block! ${
                  hide ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <div className="bg-accent h-1 w-4/5 rounded-full opacity-50 md:group-hover:opacity-90" />
            </Button>
          </div>
        </Glass>
      </div>
      <div className="bg-secondary absolute -bottom-16 left-0 h-24 w-full blur-xl md:h-20" />
    </div>
  );
}
