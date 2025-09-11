import "../styles/Projects.css";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      title: "HackForge: Online Coding Platform",
      description:
        "HackForge is an online coding platform where users can solve, test, and evaluate coding problems. It features an AI-powered chatbot acting as a personalized coding mentor, secure authentication with JWT and bcrypt, and role-based access control. The platform combines real-time coding evaluation with modern AI integration for an enhanced developer experience.",
      image:  "/assets/Hackforge.png", // replace with actual
      tags: [
        "MERN Stack",
         "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Daisy UI",
        "Judge0",
        "OpenAI",
      ],
      github: "https://github.com/raj2201641540078/HackForge-Coding-Platform",
      demo: "https://hackforge.dev/",
    },
    {
      title: "FinAura: Finance Management System",
      description:
        "FinAura is a finance management system featuring a dashboard for tracking and analyzing financial data. It integrates Inngest to automatically notify users via email when expenditure limits are exceeded, and implements JWT-based authentication with bcrypt for secure user logins.",
      image: "/assets/Finaura.png",
      tags: ["MERN Stack", "React.js", "Node.js", "Express.js","JWT","NongoDb","Inngest"],
      github: "https://github.com/raj2201641540078/FinAura-Finance-Management-System",
      demo: "https://fin-aura-finance-management-system.vercel.app/",
    },
    {
      title: "Bibliophile: A Literacy Haven",
      description:
        "Bibliophile is a book enthusiasts' platform where users can connect and explore content. It allows users to create and manage interactive reading lists, while offering secure authentication and personalized book collections powered by MongoDB.",
      image: "/assets/Biblio.png",
      tags: ["Web Development", "JavaScript", "UI/UX"],
      github: "https://github.com/raj2201641540078/Bibliophile-A-Literacy-Haven",
      demo: "https://github.com/raj2201641540078/Bibliophile-A-Literacy-Haven",
    },
  ];

  return (
    <section className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-list">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`project-card ${idx % 2 !== 0 ? "reverse" : ""}`}
          >
            {/* Image */}
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            {/* Content */}
            <div className="project-content">
              {/* Top bar */}
              <div className="card-header">
                <div className="dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FiGithub />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <FiExternalLink />
                  </a>
                </div>
              </div>

              <p className="featured-label">FEATURED PROJECT</p>
              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
