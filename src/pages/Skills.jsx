import "../styles/Skills.css";
import {
  FaJava,
  FaPython,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiC,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiVercel,
  SiVite,
  SiWebpack,
} from "react-icons/si";

const Skills = () => {
  const skills = {
    "Languages & Frameworks": ["Java", "C++", "C", "Python", "JavaScript", "SQL"],
    "Frontend Development": ["React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    "Backend Development": ["Node.js", "ExpressJS", "FastAPI", "PostgreSQL", "MongoDB", "REST APIs"],
    "Version Control": ["Git", "GitHub", "Linux"],
    "Tools & Technologies": ["VS Code", "Webpack", "Firebase", "Vercel", "Vite"],
  };

  const skillIcons = {
    Java: <FaJava />,
    "C++": <SiCplusplus />,
    C: <SiC />,
    Python: <FaPython />,
    JavaScript: <FaJsSquare />,
    SQL: "🗄️",
    React: <FaReact />,
    TypeScript: <SiTypescript />,
    "Tailwind CSS": <SiTailwindcss />,
    HTML5: <FaHtml5 />,
    CSS3: <FaCss3Alt />,
    "Node.js": <FaNodeJs />,
    ExpressJS: <SiExpress />,
    FastAPI: <SiFastapi />,
    PostgreSQL: <SiPostgresql />,
    MongoDB: <SiMongodb />,
    "REST APIs": "🔗",
    Git: <FaGitAlt />,
    GitHub: <FaGithub />,
    Linux: <FaLinux />,
    "VS Code": "📝",
    Webpack: <SiWebpack />,
    Firebase: <SiFirebase />,
    Vercel: <SiVercel />,
    Vite: <SiVite />,
  };

  return (
    <section className="skills-section">
      {/* 🔹 Static Circular Cluster */}
      <div className="skills-circle">
        {Object.values(skillIcons).map((icon, index) => (
          <div key={index} className="circle-icon">
            {icon}
          </div>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-card lightning-border">
            <h3>{category}</h3>
            <div className="skills-tags">
              {items.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skillIcons[skill] && (
                    <span className="skill-icon">{skillIcons[skill]}</span>
                  )}
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
