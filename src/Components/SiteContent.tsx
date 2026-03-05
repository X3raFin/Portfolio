import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Technologies from "./Technologies";
import Contact from "./Contact";

const SiteContent = () => {
  return (
    <div className="flex flex-col flex-1 h-full p-5 items-center md:overflow-y-auto space-y-[15px]">
      <AboutMe />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
};

export default SiteContent;
