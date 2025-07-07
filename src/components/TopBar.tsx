import { useTopBarStore } from '../stores/topBarStore';
import Glass from './Glass';

const TopBar = () => {
  const { showTopBar } = useTopBarStore();
  return (
    <>
      <div
        className={`${showTopBar ? 'w-full translate-y-0 opacity-100' : 'w-0 -translate-y-[200%] opacity-0'} bg-secondary fixed -top-16 left-0 z-50 h-20 blur-2xl transition-all duration-500`}
      />
      <div className="fixed top-0 left-0 z-50 mt-4 flex w-full justify-center">
        <h1
          className={`animate-in fade-in decoration-accent z-50 underline ${showTopBar ? 'mt-4 flex w-[80%] px-4 py-2 text-2xl md:w-xs md:opacity-100' : 'w-min text-5xl md:flex md:w-[60%] md:-translate-y-[100%] md:text-2xl md:opacity-0'} text-contrast relative font-black duration-200 active:scale-x-85 active:scale-y-95`}
        >
          <span>Noureldeen</span>
          <span className={showTopBar ? 'text-inherit' : 'text-xs'}>
            {'\u00A0'}
          </span>
          <span className={`flex w-full items-center justify-center gap-2`}>
            Ahmed
            <div
              className={`bg-accent text-accent ${showTopBar ? 'h-4' : 'h-8 md:h-4'} w-full rounded-full decoration-0`}
            />
          </span>
          <div
            className={`absolute top-0 left-0 -z-10 h-full w-full ${showTopBar ? 'opacity-100' : 'opacity-0'}`}
          >
            <Glass
              className={`${showTopBar ? 'w-[80%] translate-y-0' : 'w-0 -translate-y-[200%]'} text-contrast h-full w-full rounded-2xl`}
              layered={true}
            />
          </div>
        </h1>
      </div>
    </>
  );
};

export default TopBar;
