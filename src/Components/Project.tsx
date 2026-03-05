import type { IProject } from "../../Interfaces/IProject";

const Project = (props: IProject) => {
  return (
    <div
      className="card p-4 md:card-side bg-base-200 shadow-sm"
      key={props.name}
    >
      <figure>
        <img
          className="w-xs md:w-lg object-cover"
          src={props.image}
          alt="Album"
        />
      </figure>
      <div className="card-body md:w-1/3">
        <h2 className="card-title">{props.name}</h2>
        <p>{props.description}</p>
        <div className="card-actions justify-end">
          <a href={props.link} target="_blank" className="btn btn-primary">
            Zobacz więcej
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
