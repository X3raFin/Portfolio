const technologies = {
  "Front-end": [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "DaisyUI",
  ],
  "Back-end (.NET)": [
    "ASP .NET Core",
    "Entity Framework Core",
    "LINQ",
    "REST API",
    "Dependency Injection",
  ],
  "Bazy danych": ["MySQL", "PostgreSQL", "SQLite"],
  "Języki programowania": ["C++", "Java", "C#"],
  "Narzędzia i inne": ["Git", "GitHub", "Vite", "Figma"],
};

const Technologies = () => {
  return (
    <div id="technologies" className="card bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold mb-4">Technologie</h2>

        {Object.entries(technologies).map(([category, techList]) => (
          <div key={category} className="mb-6">
            <h3 className="text-xl font-semibold mb-3">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {techList.map((tech) => (
                <div key={tech} className="badge badge-lg badge-primary">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        ))}

        <p className="text-base-content/70 mt-4">
          Chętnie uczę się nowych rzeczy i regularnie poszerzam swój stack
          technologiczny.
        </p>
      </div>
    </div>
  );
};

export default Technologies;
