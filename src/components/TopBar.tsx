import Glass from './Glass';

const TopBar = ({ showTopBar }: { showTopBar: boolean }) => {
  console.log(showTopBar);
  return (
    <div className="fixed top-0 left-0 z-50 mt-4 flex w-full justify-center">
      <h1
        className={`animate-in fade-in w-min ${showTopBar ? 'text-2xl' : 'text-5xl'} font-black duration-400`}
      >
        <span className="decoration-accent underline">Noureldeen</span>
        <div className="flex items-center gap-2">
          <h1 className={`decoration-accent w-fit underline`}>Ahmed</h1>
          <div className="bg-accent text-accent h-8 w-full rounded-full decoration-0">
            -
          </div>
        </div>
        <Glass
          className={`${showTopBar ? 'w-[80%] translate-y-0' : 'w-0 -translate-y-[200%]'} text-contrast !absolute top-0 left-0 h-full w-full rounded-2xl`}
          layered={true}
        />
      </h1>
      {/* <div className={`fixed top-0 left-0 z-50 w-full`}>
        <div
          className={`${showTopBar ? 'opacity-100' : 'opacity-0'} bg-pale-accent absolute -top-24 left-0 -z-10 h-24 w-full blur-2xl transition-opacity duration-150`}
        />
        <Glass
          className={`${showTopBar ? 'w-[80%] translate-y-0' : 'w-0 -translate-y-[200%]'} text-contrast m-auto my-4 h-fit rounded-2xl px-4 py-3`}
          layered={true}
        >
          <div
            className={`z-50 flex w-full items-center gap-2 duration-150 ${showTopBar ? 'opacity-100 delay-300' : 'opacity-0'}`}
          >
            <h1 className="decoration-accent w-min text-2xl font-black text-nowrap underline">
              Noureldeen Ahmed
            </h1>
            <div className="bg-accent text-accent h-6 w-full min-w-6 rounded-full decoration-0" />
          </div>
        </Glass>
      </div> */}
    </div>
  );
};

export default TopBar;
