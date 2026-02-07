import AboutMe from "./AboutMe";
import Technologies from "./Technologies";

const SiteContent = () => {
  return (
    <div className="flex flex-col flex-1 h-full p-5 items-center overflow-y-auto space-y-[15px]">
      <AboutMe />
      <Technologies />
    </div>
  );
};

export default SiteContent;
