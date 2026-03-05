import EFProj from "../Images/EFProj.png";
import NaKolach from "../Images/NaKolach.png";
import BP from "../Images/B-Productive.png";
import type { IProject } from "../../Interfaces/IProject";
import Project from "./Project";

const projectsData: IProject[] = [
  {
    image: EFProj,
    name: "EntityFramework-project-with-console-UI",
    description:
      "My first project using Entity Framework Core, which connects to a database and allows data management from a console interface. A CRUD-style application designed to manage the resources of a bookstore.",
    link: "https://github.com/X3raFin/EntityFramework-project-with-console-UI",
  },
  {
    image: NaKolach,
    name: "NaKolach",
    description:
      "NaKolach is an interactive web application built with GIS functionalities, designed for cycling enthusiasts. It allows users to easily find bike routes and discover interesting Points of Interest (POIs) in their area. Each user has a personal account to save their favorite routes and customize map markers.",
    link: "https://github.com/NaKolach/NaKolachEnvironment",
  },
  {
    image: BP,
    name: "B-Productive",
    description:
      "My first Full-Stack project, connecting a server-side API with a client interface. A Kanban-style application designed for task organization and productivity enhancement.",
    link: "https://github.com/X3raFin/B-Productive",
  },
];

const Projects = () => {
  return (
    <div id="projects" className=" rounded-lg space-y-[15px] w-full">
      {projectsData.map((project) => (
        <Project
          key={project.name}
          image={project.image}
          name={project.name}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default Projects;
