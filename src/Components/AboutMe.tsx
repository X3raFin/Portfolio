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
          <h1 className="text-3xl md:text-5xl font-bold">O mnie</h1>
          <p className="py-6 text-sm md:text-base break-words">
            Cześć, nazywam się Kacper Jankowski i jestem studentem trzeciego
            roku informatyki na Politechnice Gdańskiej. Moją pasją jest
            programowanie, a szczególnie tworzenie nowoczesnych aplikacji
            webowych. Umiejętności w tym kierunku rozwijam konsekwentnie od
            czasów technikum, zarówno na studiach, jak i realizując własne
            projekty. Po godzinach jestem entuzjastą aktywnego trybu życia.
            Obecnie poszukuję możliwości zdobycia doświadczenia komercyjnego w
            tworzeniu aplikacji internetowych. Jestem elastyczny i chętnie
            podejmę się wyzwań zarówno w obszarze front-endu, back-endu, jak i
            na stanowisku full-stack, aby dalej rozwijać swoje wszechstronne
            umiejętności.
          </p>
          <button className="btn btn-primary">Pobierz CV</button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
