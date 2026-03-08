import myPhoto from "../Images/ZdjecieDoPortfolio.jpg";

const AboutMe = () => {
  return (
    <div id="about-me" className="hero bg-base-200 rounded-lg w-full">
      <div className="hero-content flex-col lg:flex-row w-full text-center lg:text-left">
        <img
          src={myPhoto}
          alt="Kacper Jankowski"
          className="w-full max-w-[250px] md:max-w-xs rounded-lg shadow-2xl"
        />
        <div className="w-full">
          <h1 className="text-3xl md:text-5xl font-bold">About me</h1>
          <p className="py-6 text-sm md:text-base break-words whitespace-normal">
            Hi, I'm Kacper Jankowski, a third-year Computer Science student at
            Gdańsk University of Technology. I am deeply passionate about
            software development, with a strong focus on building modern,
            responsive web applications. I've been consistently honing my
            technical skills since my technical school days, blending academic
            knowledge with hands-on experience through personal projects.
            Outside of coding, I'm a big enthusiast of an active lifestyle. I am
            currently seeking my first commercial role in web development. Being
            highly adaptable, I am eager to take on new challenges across the
            entire stack-whether in Front-End, Back-End, or Full-Stack
            positions-to further expand my technical expertise.
          </p>
          <button className="btn btn-primary">Download CV</button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
