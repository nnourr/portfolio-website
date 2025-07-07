import QuickButton from '../QuickButton';

function MobileIntro() {
  return (
    <div className="flex flex-col gap-4 md:hidden">
      <div className="after:inset-shadow-glow animate-in fade-in relative rounded-2xl opacity-90 shadow-md duration-400 ease-in-out after:absolute after:top-0 after:left-0 after:h-full after:w-full after:rounded-2xl active:scale-x-85 active:scale-y-95">
        <img
          src="/headshotcropped.webp"
          alt="me"
          className="h-44 w-full rounded-2xl object-cover"
        />
      </div>
      <p className="animate-in fade-in w-full font-sans text-xl font-bold duration-400">
        A Software Engineering graduate with 3 years of experience doing what I
        love.
      </p>
      <div className="group/button animate-in fade-in flex w-fit flex-col gap-2 duration-400">
        <QuickButton
          className="group-hover/button:opacity-60 hover:!opacity-100"
          onClick={() => {
            window.open('/Noureldeen_Ahmed_Resume.pdf', '_blank');
          }}
          title="Open resume in new tab"
        >
          view resume
        </QuickButton>
        <QuickButton
          className="group-hover/button:opacity-60 hover:!opacity-100"
          onClick={() => {
            const element = document.getElementById('work-exp');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
          title="Scroll to work experience section"
        >
          work experience
        </QuickButton>
        <QuickButton
          className="group-hover/button:opacity-60 hover:!opacity-100"
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
  );
}

export default MobileIntro;
