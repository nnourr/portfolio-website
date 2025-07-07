import Background from '../../components/Background';
import TopBar from '../../components/TopBar';
import BottomBar from '../../components/BottomBar';
import { useShowTopBar } from '../../hooks/useShowTopBar';
import Skills from '../../components/Home/Skills';
import { Separator } from '../../components/ui/separator';
import Intro from '../../components/Home/Intro';
import HomeNavBar from '../../components/Home/HomeNavBar';
import MobileIntro from '../../components/Home/MobileIntro';
import AboutMe from '../../components/Home/AboutMe';
import WorkExperience from '../../components/Home/WorkExperience';
import Education from '../../components/Home/Education';
import PassionProjects from '../../components/Home/PassionProjects';

function Home() {
  useShowTopBar();

  return (
    <Background className={`font-courier text-contrast`}>
      <HomeNavBar />
      <TopBar />
      <BottomBar />
      <Intro />
      <div className="text-contrast bg-secondary/40 dark:bg-secondary/20 dark:inset-shadow-glow/20 mx-auto my-2 flex h-fit min-h-screen w-[95%] flex-col gap-4 rounded-xl px-4 pt-28 pb-4 backdrop-blur-xs md:mt-8 md:w-2xl md:bg-transparent! md:px-0 md:py-0 md:shadow-none md:inset-shadow-none! md:backdrop-blur-none!">
        <MobileIntro />
        <AboutMe />
        <Separator className="mx-auto w-3/4!" />
        <WorkExperience />
        <Separator className="mx-auto w-3/4!" />
        <Education />
        <Separator className="mx-auto w-3/4!" />
        <Skills />
        <Separator className="mx-auto w-3/4!" />
        <PassionProjects />
      </div>
    </Background>
  );
}

export default Home;
