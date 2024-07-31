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
        I'm Thomas Zeides, a passionate web developer specializing in modern
        JavaScript frameworks and technologies. My journey into web development
        began with a fascination for how websites work, and it has grown into a
        fulfilling career. I am excited about crafting dynamic and interactive
        web applications.
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
      <section className="about-education">
        <h2>Education & Learning</h2>
        <p>
          I have completed a comprehensive web development course at DCI, which
          provided me with a strong foundation in modern web technologies and
          best practices. I am committed to continuous learning and staying
          updated with the latest trends in web development.
        </p>
      </section>
      <section className="about-hobbies">
        <h2>Hobbies & Interests</h2>
        <p>
          Outside of web development, I enjoy exploring new technologies,
          contributing to open-source projects, and indulging in photography to
          capture beautiful moments during my travels.
        </p>
      </section>
    </div>
  );
};

export default About;
