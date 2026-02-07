const Navbar = () => {
  return (
    <div className="h-full flex flex-col p-10">
      <h1 className="text-white text-4xl font-bold mb-16">Kacper Jankowski</h1>
      <ul className="menu w-full text-xl space-y-4 flex-1 pb-30 justify-center">
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
          <a className="hover:bg-white/10 active:bg-sky-500 rounded-lg">
            Projekty
          </a>
        </li>
        <li>
          <a className="hover:bg-white/10 active:bg-sky-500 rounded-lg">
            Kontakt
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
