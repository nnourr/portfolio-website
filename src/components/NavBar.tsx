import Glass from './Glass';
import { useTopBarStore } from '../stores/topBarStore';
import { useBarHideStore } from '../stores/barHideStore';
import type { ReactNode } from 'react';

interface NavBarProps {
  children?: (props: { hide: boolean }) => ReactNode;
  className?: string;
}

export default function NavBar({ children, className }: NavBarProps) {
  const { hide, setOpen, keepOpen, close } = useBarHideStore();
  const { showTopBar } = useTopBarStore();

  return (
    <div
      className={`pointer-events-none fixed top-0 right-0 z-50 h-full w-full transition-all duration-300 md:right-1/2 md:translate-x-1/2 xl:max-w-11/12 ${className} ${
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
          !hide ? 'w-11 md:w-12' : 'w-3'
        } ${!showTopBar && 'xl:right-8'} `}
        onMouseEnter={keepOpen}
        onMouseLeave={close}
        onClick={() => setTimeout(setOpen, 10)}
      >
        <Glass layered={true}>
          <div
            className={`text-contrast z-20 flex flex-col justify-center gap-5 py-3 text-xl transition-all duration-300 md:text-2xl ${
              !hide ? 'items-center px-2.5' : 'items-start px-1'
            }`}
          >
            {children && children({ hide })}
          </div>
        </Glass>
      </div>
    </div>
  );
}
