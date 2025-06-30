import Glass from './Glass';

export default function TopBar({ showTopBar }: { showTopBar: boolean }) {
  return (
    <div className={`fixed top-0 left-0 z-10 w-full`}>
      <Glass
        className={`${showTopBar ? 'w-[98%] translate-y-0' : 'w-0 -translate-y-[200%]'} text-contrast m-auto my-4 h-fit rounded-xl px-4 py-3`}
        layered={true}
      >
        <div
          className={`flex w-full items-center gap-2 duration-150 ${showTopBar ? 'opacity-100 delay-300' : 'opacity-0'}`}
        >
          <h1 className="decoration-accent w-min text-2xl font-black text-nowrap underline">
            Noureldeen Ahmed
          </h1>
          <div className="bg-accent text-accent h-6 w-full rounded-full decoration-0" />
        </div>
      </Glass>
    </div>
  );
}
