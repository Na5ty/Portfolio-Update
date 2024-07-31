import "./About.css";

// Import SVGs
import cssIcon from "../assets/css-3.svg";
import gitIcon from "../assets/git-icon.svg";
import htmlIcon from "../assets/html-5.svg";
import javascriptIcon from "../assets/javascript.svg";
import nodejsIcon from "../assets/nodejs.svg";
import reactIcon from "../assets/react.svg";
import tailwindcssIcon from "../assets/tailwindcss-icon.svg";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-header">About Me</h1>
      <p className="about-description">
        I'm a web developer with expertise in modern JavaScript frameworks and
        technologies. Here are some of the tools and technologies I'm proficient
        with:
      </p>
      <section className="skills">
        <div className="skill-item">
          <img src={htmlIcon} alt="HTML5" className="skill-icon" />
          <p>HTML5</p>
        </div>
        <div className="skill-item">
          <img src={cssIcon} alt="CSS3" className="skill-icon" />
          <p>CSS3</p>
        </div>
        <div className="skill-item">
          <img src={javascriptIcon} alt="JavaScript" className="skill-icon" />
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          <img src={reactIcon} alt="React" className="skill-icon" />
          <p>React</p>
        </div>
        <div className="skill-item">
          <img src={nodejsIcon} alt="Node.js" className="skill-icon" />
          <p>Node.js</p>
        </div>
        <div className="skill-item">
          <img
            src={tailwindcssIcon}
            alt="Tailwind CSS"
            className="skill-icon"
          />
          <p>Tailwind CSS</p>
        </div>
        <div className="skill-item">
          <img src={gitIcon} alt="Git" className="skill-icon" />
          <p>Git</p>
        </div>
      </section>
    </div>
  );
};

export default About;
