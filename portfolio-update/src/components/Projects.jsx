import "./Projects.css";

const Projects = () => {
  const projectList = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with React and styled-components.",
      link: "https://your-portfolio-link.com",
    },
    {
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform built with React and Node.js.",
      link: "https://your-ecommerce-link.com",
    },
    // Add more projects
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-heading">My Projects</h1>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
