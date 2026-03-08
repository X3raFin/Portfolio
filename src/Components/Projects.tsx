import EFProj from "../Images/EFProj.png";
import NaKolach from "../Images/NaKolach.png";
import BP from "../Images/B-Productive.png";
import DW from "../Images/DW.png";
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
  {
    image: DW,
    name: "Digital_World",
    description:
      "The purpose of this project is to create a digital world, which is a small game inhabited by animals and plants. In this world, animals can fight with other species and multiply within their own. Various plants can provide buffs or debuffs to the animals that consume them. This project was created entirely in Java and served as my first introduction to both the language and the concepts of object-oriented programming. A key feature is the ability for the user to save the current state of the world—including all animal statistics and positions—to a text file, allowing them to resume their simulation at a later time.",
    link: "https://github.com/X3raFin/Digital_World",
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
