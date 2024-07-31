import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  const projectList = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with React and styled-components.",
      link: "/", // Link to the home page
      internal: true, // Indicates this link is internal
    },
    {
      title: "Burger Shop E-commerce Platform",
      description:
        "An e-commerce platform for a burger shop, featuring product listings, and a user-friendly interface built with React and Node.js.",
      link: "https://burger-shot-delta.vercel.app/",
      internal: false, // Indicates this link is external
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-heading">My Projects</h1>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            {project.internal ? (
              <Link to={project.link} className="project-link">
                View Project
              </Link>
            ) : (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
