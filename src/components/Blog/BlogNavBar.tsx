import {
  faArrowUp,
  faChevronDown,
  faChevronUp,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import type { BarItem } from '../../models/BarItem';
import { useBlogNavigation } from '../../hooks/useBlogNavigation';
import NavBar from '../NavBar';
import Button from '../Button';

export default function BlogNavBar() {
  const navigate = useNavigate();
  const {
    showTopButton,
    scrollToTop,
    scrollToSection,
    currentSectionIndex,
    isLastSection,
    isFirstSection,
  } = useBlogNavigation();

  const blogNavLinks: BarItem[] = [
    {
      href: '/',
      icon: faHome,
      key: 'home',
      label: 'Home',
      onClick: () => navigate('/'),
    },
    ...(showTopButton
      ? [
          {
            href: '#',
            icon: faArrowUp,
            key: 'top',
            label: 'Top',
            onClick: scrollToTop,
          },
        ]
      : []),
    ...(!isFirstSection
      ? [
          {
            href: '#',
            icon: faChevronUp,
            key: 'prev',
            label: 'Previous Section',
            onClick: () => scrollToSection(currentSectionIndex - 1),
          },
        ]
      : []),
    ...(!isLastSection
      ? [
          {
            href: '#',
            icon: faChevronDown,
            key: 'next',
            label: 'Next Section',
            onClick: () => scrollToSection(currentSectionIndex + 1),
          },
        ]
      : []),
  ];

  return (
    <NavBar>
      {({ hide }: { hide: boolean }) => (
        <>
          {blogNavLinks.map(link => (
            <Button
              variant="ghost"
              key={link.key}
              onClick={() => !hide && link.onClick?.()}
              className={`group z-20 flex origin-right flex-col items-center gap-1 transition-all duration-150 ease-in-out md:hover:scale-120 md:hover:rounded-md md:hover:py-2 ${
                !hide ? 'flex-col' : 'flex-row-reverse'
              }`}
            >
              <FontAwesomeIcon icon={link.icon} />
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
