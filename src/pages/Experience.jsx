import "../styles/Experience.css";

const Experience = () => {
  const experiences = [
    {
      role: "AI & Full-Stack Developer",
      company: "Final Year Major Project",
      duration: "2025",
      description:
        "Developed HackForge, an online coding platform using MERN stack, integrating OpenAI API for AI-powered code suggestions and explanations.",
      icon: "🌐",
    },
    {
      role: "Web Developer (Freelance)",
      company: "Direct Diverse InfoTech",
      duration: "2024 - 2025",
      description:
        "Led a team of developers to build scalable web applications for community events, boosting user engagement by 45% and improving attendee experience.",
      icon: "🗂️",
    },
    {
      role: "Backend Developer",
      company: "Cognifyz Technologies",
      duration: "2024",
      description:
        "Developed and optimized a bus routing system using Dijkstra’s algorithm, enhancing route efficiency and reducing travel time through advanced graph-based pathfinding.",
      icon: "</>",
    },
  ];

  return (
    <section className="experience">
      <h2 className="section-title">Professional Journey</h2>
      <p className="section-subtitle">
        "Explore my journey through innovative projects and impactful
        experiences that have shaped my skills and passion for technology."
      </p>

      <div className="experience-cards">
        {experiences.map((exp, idx) => (
          <div key={idx} className="experience-card">
            <div className="card-corner top-left"></div>
            <div className="card-corner top-right"></div>
            <div className="card-corner bottom-left"></div>
            <div className="card-corner bottom-right"></div>

            <div className="experience-icon">{exp.icon}</div>
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
            <span className="duration">{exp.duration}</span>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
