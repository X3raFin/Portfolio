const Navbar = () => {
  return (
    <div className=" h-fit md:h-full p-4 flex flex-row md:flex-col md:p-10">
      <h1 className="text-white text-2xl md:text-4xl font-bold md:mb-16">
        Kacper Jankowski
      </h1>
      <ul className="menu w-full hidden md:flex text-xl space-y-4 flex-1 pb-30 justify-center">
        <li>
          <a
            href="#about-me"
            className="hover:bg-white/10 active:bg-sky-500 rounded-lg"
          >
            O mnie
          </a>
        </li>
        <li>
          <a
            href="#technologies"
            className="hover:bg-white/10 active:bg-sky-500 rounded-lg"
          >
            Technologie
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="hover:bg-white/10 active:bg-sky-500 rounded-lg"
          >
            Projekty
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:bg-white/10 active:bg-sky-500 rounded-lg"
          >
            Kontakt
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
