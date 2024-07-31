import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Hi, I'm Thomas Zeides</h1>
        <p>I'm a web developer specializing in modern JavaScript frameworks.</p>
      </header>

      <section className="home-welcome">
        <h2>Welcome to My Portfolio</h2>
        <p>
          Explore my work, learn about my skills, and see what I’ve been up to.
          Feel free to browse through my projects and get to know more about me.
        </p>
      </section>

      <section className="home-links">
        <Link to="/projects">
          <button className="home-button primary">View Projects</button>
        </Link>
        <Link to="/about">
          <button className="home-button secondary">Learn About Me</button>
        </Link>
        <Link to="/contact">
          <button className="home-button secondary">Get in Touch</button>
        </Link>
      </section>

      <section className="home-social-media">
        <a
          href="https://www.linkedin.com/in/thomas-zeides-1b8437297/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/Na5ty"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaGithub size={30} />
        </a>
      </section>

      <footer className="home-footer">
        <p>
          &copy; {new Date().getFullYear()} Thomas Zeides. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
