import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faApple,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faMoon,
  faHome,
  faRocket,
} from '@fortawesome/free-solid-svg-icons';
import Glass from './Glass';
import Button from './Button';

export default function Nav({ hide }: { hide: boolean }) {
  const verticalIcons = [
    <FontAwesomeIcon icon={faHome} key="home" />,
    <FontAwesomeIcon icon={faApple} key="apple" />,
    <FontAwesomeIcon icon={faRocket} key="rocket" />,
  ];
  const horizontalIcons = [
    <FontAwesomeIcon className="aspect-square" icon={faGithub} key="github" />,
    <FontAwesomeIcon
      className="aspect-square"
      icon={faLinkedin}
      key="linkedin"
    />,
    <FontAwesomeIcon className="aspect-square" icon={faEnvelope} key="mail" />,
  ];
  return (
    <div
      className={`fixed bottom-0 z-50 mx-auto flex w-full justify-center transition-all duration-150`}
    >
      <div className="mb-10 flex w-full justify-center gap-4 text-3xl">
        <Glass
          layered={true}
          className={`${!hide ? 'w-[10.7rem] translate-y-0' : 'w-0 translate-y-[200%]'}`}
        >
          <div className="z-20 flex flex-row items-center gap-5 px-5 py-2">
            {horizontalIcons.map((icon, i) => (
              <div className="text-contrast flex flex-col items-center gap-0.5">
                {icon}
                <div className="bg-accent h-1 w-4/5 rounded-full" />
              </div>
            ))}
          </div>
        </Glass>
        <Glass
          layered={true}
          className={`${!hide ? 'w-13 translate-y-0' : 'w-0 translate-y-[200%]'}`}
        >
          <Button
            onClick={() => {
              document.documentElement.classList.toggle('dark');
            }}
            variant="ghost"
            className="z-20 flex flex-row items-center px-3"
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
      <div className="bg-accent absolute -bottom-24 left-0 h-24 w-full blur-2xl" />
    </div>
  );
}
