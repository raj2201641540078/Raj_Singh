import { FaUserTie, FaMedal, FaTrophy, FaGlobe, FaCode, FaUniversity, FaRobot, FaRocket, FaGithub } from "react-icons/fa";
import "../styles/Achievements.css";

const Achievements = () => {
  const achievements = [
    {
      title: "Team Lead - MERN Project",
      description:
        "Led a 5-member team to build and deploy a MERN stack application with real-time features, delivering 100+ user interactions and a polished UI.",
      tags: ["Leadership", "MERN", "Teamwork"],
      icon: <FaUserTie />,
    },
    {
      title: "Project Mentor",
      description:
        "Guided juniors in MERN stack projects, helping them with debugging and best coding practices.",
      tags: ["Mentorship"],
      icon: <FaMedal />,
    },
    {
      title: "Institute Rank 139",
      description: "GeeksforGeeks Rating 1200+ & 500+ Problems Solved",
      tags: ["GeeksforGeeks"],
      icon: <FaGlobe />,
    },
    {
      title: "5 ⭐ Problem Solver & C++ Programmer",
      description: "Achieved 5⭐ Problem Solving badge and advanced C++ coding skills on Hackerrank.",
      tags: ["Hackerrank"],
      icon: <FaCode />,
    },
    {
      title: "Open Source Contributor",
      description:
        "Contributed to GitHub repositories, fixing bugs and adding new features in community-driven projects.",
      tags: ["Collaboration", "Development"],
      icon: <FaUniversity />,
    },
    {
      title: "Google Gen AI Study Sept 2025",
      description: "Certified by Oracle University for excellence in Generative AI fundamentals and applied practices.",
      tags: ["Oracle", "Gen AI"],
      icon: <FaRobot />,
    },
  ];

  return (
    <section className="achievements">
      <h2 className="section-title">Achievements & Extracurricular</h2>

      <div className="achievements-grid">
        {achievements.map((ach, idx) => (
          <div key={idx} className="achievement-card">
            <div className="card-header">
              <span className="card-icon">{ach.icon}</span>
              <h3 dangerouslySetInnerHTML={{ __html: highlightTitle(ach.title) }} />
            </div>
            <p className="description">{ach.description}</p>
            <div className="tags">
              {ach.tags.map((tag, i) => (
                <span key={i} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ✅ Universal Title Highlight Fix
function highlightTitle(title) {
  const words = title.split(" ");

  if (words.length > 1) {
    return `<strong>${words[0]}</strong> ${words.slice(1).join(" ")}`;
  }

  return `<strong>${title}</strong>`;
}

export default Achievements;
