import { useState } from "react";
import {
  ArrowUpRight,
  Github,
  Mail,
  Menu,
  X,
  GraduationCap,
  Award,
  Code2,
  ExternalLink,
} from "lucide-react";
import profileImage from "./Copilot_20260926_193200.png";
const skills = [
  "React.js",
  "JavaScript ES6+",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",
  "Git & GitHub",
];

const projects = [
  {
    title: "Adasa",
    type: "React Photography Website",
    description:
      "A modern Arabic photography website with responsive UI, React components, routing, categories, blog pages and reusable cards.",
    technologies: ["React", "React Router", "JavaScript", "CSS"],
    github: "https://github.com/faresabrahyim",
  },
  {
    title: "ShopZone",
    type: "React E-Commerce",
    description:
      "A shopping interface with products, categories, filtering, cart state and total price calculation using React.",
    technologies: ["React", "useState", "map", "filter", "reduce"],
    github: "https://github.com/faresabrahyim",
  },
  {
    title: "React Routing Projects",
    type: "Front-End Practice",
    description:
      "React projects focused on routing, reusable components, navigation and building multi-page experiences.",
    technologies: ["React", "React Router", "Components"],
    github: "https://github.com/faresabrahyim",
  },
];

const courses = [
  {
    title: "Front-End Development",
    provider: "Route",
    description:
      "Front-End development training focused on building modern web interfaces and practical projects.",
  },
  {
    title: "AI by Python",
    provider: "Training Certificate",
    description:
      "Training focused on Artificial Intelligence fundamentals using Python.",
  },
  {
    title: "Raspberry Pi",
    provider: "Borg El Arab Technological University",
    description:
      "Practical training and certificate related to Raspberry Pi technology.",
  },
];

function App() {
  const [menu, setMenu] = useState(false);

  function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenu(false);
  }

  return (
    <div className="app">
      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <div className="container nav-container">
          <button className="logo" onClick={() => scrollToSection("home")}>
            <span>F</span>
            Fares<span className="orange">.</span>
          </button>

          <nav className={menu ? "nav-links show" : "nav-links"}>
            <button onClick={() => scrollToSection("home")}>Home</button>

            <button onClick={() => scrollToSection("about")}>About</button>

            <button onClick={() => scrollToSection("skills")}>Skills</button>

            <button onClick={() => scrollToSection("projects")}>
              Projects
            </button>

            <button onClick={() => scrollToSection("courses")}>
              Certificates
            </button>

            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </nav>

          <button className="menu-button" onClick={() => setMenu(!menu)}>
            {menu ? <X /> : <Menu />}
          </button>

          <button
            className="nav-contact"
            onClick={() => scrollToSection("contact")}
          >
            Let's Talk
            <ArrowUpRight size={17} />
          </button>
        </div>
      </header>

      {/* ================= HERO ================= */}

      <section className="hero" id="home">
        <div className="hero-container">
          <div className="hero-text">
            <span className="hero-small">JUNIOR FRONT-END DEVELOPER</span>

            <h1>
              Fares Abrahyim
              <br />
              <span>Mohamed Mohamed</span>
            </h1>

            <p className="hero-description">
              I build modern, responsive and user-friendly web interfaces using
              React.js and modern front-end technologies.
            </p>

            <div className="hero-skills">
              <span>React.js</span>
              <span>JavaScript</span>
              <span>TypeScript</span>
            </div>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View My Projects
                <ArrowUpRight size={18} />
              </a>

              <a
                href="https://github.com/faresabrahyim"
                target="_blank"
                rel="noreferrer"
                className="outline-button"
              >
                GitHub
                <ExternalLink size={18} />
              </a>
            </div>

            <div className="hero-contact">
              <Mail size={17} />
              <span>faresabrahyim@gmail.com</span>
            </div>
          </div>

          <div className="hero-image-container">
            <div className="hero-image-glow"></div>

            <div className="hero-image">
              <img src={profileImage} alt="Fares Abrahyim" />
            </div>

            <div className="hero-image-badge">
              <Code2 size={20} />
              <div>
                <strong>Front-End</strong>
                <span>Developer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section id="about" className="section">
        <div className="container about-grid">
          <div>
            <p className="section-label">ABOUT ME</p>

            <h2>
              Focused on building
              <span> clean interfaces.</span>
            </h2>
          </div>

          <div className="about-text">
            <p>
              I am an Information Technology student at Borg El Arab
              Technological University with a strong interest in Front-End
              development.
            </p>

            <p>
              My main focus is React.js. I enjoy converting ideas and designs
              into responsive interfaces and building reusable components.
            </p>

            <div className="about-stats">
              <div>
                <strong>React</strong>
                <span>Main Focus</span>
              </div>

              <div>
                <strong>Front-End</strong>
                <span>Career Goal</span>
              </div>

              <div>
                <strong>English</strong>
                <span>Good</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}

      <section id="skills" className="section dark-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-label">TECH STACK</p>

              <h2>
                Technologies I<span> work with.</span>
              </h2>
            </div>

            <p>
              My main focus is building responsive and maintainable Front-End
              applications.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-box" key={skill}>
                <div className="skill-number">0{index + 1}</div>

                <Code2 size={22} />

                <h3>{skill}</h3>

                <div className="skill-line">
                  <span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}

      <section id="projects" className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-label">MY WORK</p>

              <h2>
                Selected
                <span> projects.</span>
              </h2>
            </div>

            <a
              className="github-link"
              href="https://github.com/faresabrahyim"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article
                className={
                  index === 0 ? "project-card featured-project" : "project-card"
                }
                key={project.title}
              >
                <div className="project-preview">
                  <div className="browser">
                    <div className="browser-top">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="browser-content">
                      <div className="preview-title"></div>

                      <div className="preview-grid">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <span className="project-type">{project.type}</span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    GitHub
                    <ExternalLink size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EDUCATION ================= */}

      <section className="section education-section">
        <div className="container">
          <p className="section-label">EDUCATION</p>

          <h2>
            My academic
            <span> background.</span>
          </h2>

          <div className="education-card">
            <div className="education-icon">
              <GraduationCap size={30} />
            </div>

            <div>
              <span className="card-label">EDUCATION</span>

              <h3>Borg El Arab Technological University</h3>

              <p>Information Technology</p>

              <span className="location">Egypt</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COURSES ================= */}

      <section id="courses" className="section dark-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-label">COURSES & CERTIFICATES</p>

              <h2>
                What I've
                <span> learned.</span>
              </h2>
            </div>

            <Award size={38} className="award-icon" />
          </div>

          <div className="courses-grid">
            {courses.map((course) => (
              <div className="course-card" key={course.title}>
                <div className="course-icon">
                  <Award size={24} />
                </div>

                <span className="course-provider">{course.provider}</span>

                <h3>{course.title}</h3>

                <p>{course.description}</p>

                <div className="certificate">
                  <span>Certificate</span>
                  <GraduationCap size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact" className="section contact-section">
        <div className="container contact-card">
          <div>
            <p className="section-label">CONTACT</p>

            <h2>
              Let's build something
              <span> great.</span>
            </h2>

            <p className="contact-text">
              I'm open to Junior Front-End opportunities, internships and
              practical projects.
            </p>
          </div>

          <div className="contact-buttons">
            <a href="mailto:faresabrahyim@gmail.com" className="main-button">
              <Mail size={18} />
              Send Email
            </a>

            <a
              href="https://github.com/faresabrahyim"
              target="_blank"
              rel="noreferrer"
              className="outline-button"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer>
        <div className="container footer-content">
          <span>© 2026 Fares Abrahyim</span>

          <span>Built with React ⚛</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
