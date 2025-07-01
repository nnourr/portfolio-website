import { faEnvelope, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';
import Glass from './Glass';
import { useScrollStore } from '../stores/scrollStore';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import type { BarItem } from '../models/BarItem';

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
  const { isScrolling: hide, setIsScrolling } = useScrollStore();
  return (
    <div
      className={`fixed bottom-0 z-50 mx-auto flex w-full justify-center transition-all duration-150`}
      onClick={() => setTimeout(() => setIsScrolling(false), 10)}
    >
      <div
        className={`flex w-full items-end justify-center gap-4 text-3xl transition-all duration-150 ${!hide ? 'mb-10 opacity-100' : 'mb-4 opacity-90'}`}
      >
        <Glass layered={true} className={`${!hide ? 'h-full' : 'h-1/4'}`}>
          <div className="text-contrast z-20 flex flex-row items-end gap-5 px-5 py-2">
            {socialLinks.map(link => (
              <a
                key={link.key}
                href={hide ? undefined : link.href}
                target="_blank"
                className="z-20 flex flex-col items-center gap-1"
              >
                <FontAwesomeIcon className="aspect-square" icon={link.icon} />
                <div className="bg-accent h-1 w-4/5 rounded-full" />
              </a>
            ))}
          </div>
        </Glass>
        <Glass layered={true} className={`${!hide ? 'h-full' : 'h-1/4'}`}>
          <Button
            onClick={() => {
              !hide && document.documentElement.classList.toggle('dark');
            }}
            variant="ghost"
            className="z-20 flex flex-row items-end px-3 py-2"
          >
            <div className="text-contrast flex flex-col items-center gap-0.5">
              <FontAwesomeIcon
                icon={faMoon}
                key="moon"
                className="z-50 aspect-square"
              />
              <div className="bg-accent h-1 w-4/5 rounded-full" />
            </div>
          </Button>
        </Glass>
      </div>
      <div className="bg-secondary absolute -bottom-16 left-0 h-24 w-full blur-xl" />
    </div>
  );
}
