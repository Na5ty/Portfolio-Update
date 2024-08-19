import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";
import MainImage from "../assets/Main.png";

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const projectList = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with React and styled-components.",
      link: "/",
      internal: true,
    },
    {
      title: "Burger Shop E-commerce Platform",
      description:
        "An e-commerce platform for a burger shop, built with React and Node.js.",
      link: "https://burger-shot-delta.vercel.app/",
      internal: false,
    },
    {
      title: "DVD & Blu-ray E-commerce Shop",
      description: "A MERN stack e-commerce platform for DVDs and Blu-rays.",
      link: "/",
      internal: false,
      image: MainImage,
    },
  ];

  const openModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage("");
  };

  return (
    <div className="projects-container">
      <h1 className="projects-heading">My Projects</h1>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
                onClick={() => openModal(project.image)}
                style={{ cursor: "pointer" }}
              />
            )}
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
      <Modal
        show={modalIsOpen}
        onHide={closeModal}
        centered
        dialogClassName="modal-dialog-centered"
        contentClassName="modal-content-custom"
      >
        <Modal.Body className="modal-body">
          <img src={currentImage} alt="Enlarged View" className="modal-image" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Projects;
