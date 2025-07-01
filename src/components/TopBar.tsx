import Glass from './Glass';
import { useScrollStore } from '../stores/scrollStore';

const TopBar = () => {
  const { showTopBar } = useScrollStore();
  return (
    <div className="fixed top-0 left-0 z-50 mt-4 flex w-full justify-center">
      <div
        className={`${showTopBar ? 'translate-y-0 opacity-100' : 'w-0 -translate-y-[200%] opacity-0'} bg-secondary absolute -top-[8rem] left-0 -z-10 h-24 w-full blur-2xl transition-all duration-150`}
      />
      <h1
        className={`animate-in fade-in decoration-accent z-50 underline ${showTopBar ? 'mt-4 flex w-[80%] px-4 py-2 text-2xl' : 'w-min text-5xl'} text-contrast relative font-black duration-200 active:scale-x-85 active:scale-y-95`}
      >
        <span>Noureldeen</span>
        <span className={showTopBar ? 'text-2xl' : 'text-xs'}>{'\u00A0'}</span>
        <span className={`flex w-full items-center justify-center gap-2`}>
          Ahmed
          <div
            className={`bg-accent text-accent ${showTopBar ? 'h-4' : 'h-8'} w-full rounded-full decoration-0`}
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
  );
};

export default TopBar;
