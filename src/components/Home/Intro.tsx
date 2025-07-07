import Glass from '../Glass';
import QuickButton from '../QuickButton';

export default function Intro() {
  return (
    <div className="mx-auto mt-24 hidden w-5xl max-w-11/12 transition-all duration-300 ease-in-out active:scale-x-85 active:scale-y-95 md:flex">
      <Glass
        className="z-10 w-3/5 rounded-e-none px-8 py-4 lg:w-1/2 lg:py-2"
        layered={true}
      >
        <div className="bg-accent/10 absolute -top-20 -left-14 -z-10 h-24 w-60 blur-2xl" />
        <div className="bg-accent/10 absolute -bottom-10 -left-4 -z-10 h-24 w-60 blur-2xl" />
        <div className="z-20 flex flex-col gap-2">
          <h1 className="decoration-accent w-min text-6xl font-bold underline decoration-[6px] underline-offset-4 lg:text-7xl">
            <span>Noureldeen</span>
            <span className={`flex w-full items-center justify-start gap-2`}>
              Ahmed
              <div
                className={`bg-accent mb-2 h-12 w-full origin-left rounded-full transition-all duration-300 ease-in-out active:h-10 active:w-32`}
              />
            </span>
          </h1>
          <p className="font-sans text-xl font-bold lg:text-2xl">
            A Software Engineering graduate with 3 years of experience doing
            what I love.
          </p>
          <div className="group/button animate-in fade-in flex w-fit flex-col gap-2">
            <QuickButton
              className="transition-all duration-400 group-hover/button:opacity-60 hover:!opacity-100"
              onClick={() => {
                window.open('/Noureldeen_Ahmed_Resume.pdf', '_blank');
              }}
              title="Open resume in new tab"
            >
              view resume
            </QuickButton>
            <QuickButton
              className="transition-all duration-400 group-hover/button:opacity-60 hover:!opacity-100"
              onClick={() => {
                const element = document.getElementById('work-exp');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              title="Scroll to work experience section"
            >
              work experience
            </QuickButton>
            <QuickButton
              className="transition-all duration-400 group-hover/button:opacity-60 hover:!opacity-100"
              onClick={() => {
                const element = document.getElementById('passion-proj');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              title="Scroll to passion projects section"
            >
              passion projects
            </QuickButton>
          </div>
        </div>
      </Glass>
      <div className="after:inset-shadow-glow animate-in fade-in shadow-glass relative h-[22rem] w-2/5 rounded-e-2xl object-bottom opacity-90 duration-400 ease-in-out lg:h-96 lg:w-1/2">
        <img
          src="/headshotcropped.webp"
          alt="me"
          className="h-full w-full rounded-e-2xl object-cover object-center"
        />
        <img
          src="/headshotcropped.webp"
          alt="me"
          className="absolute top-0 left-0 -z-10 h-full w-full object-cover object-center blur-2xl dark:opacity-50"
        />
      </div>
    </div>
  );
}
