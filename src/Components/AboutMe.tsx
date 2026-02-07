const AboutMe = () => {
  return (
    <div id="about-me" className="hero bg-base-200 rounded-lg">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="src/Images/ZdjecieDoPortfolio.jpg"
          className="max-w-xs rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">O mnie</h1>
          <p className="py-6">
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
