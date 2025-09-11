import "../styles/Education.css";

const Education = () => {
  const education = [
    {
      degree: "Bachelor Of Technology",
      school: "Pranveer Singh Institute Of Technology, Kanpur",
      duration: "2022 - 2026",
      description:
        "Pursuing a B.Tech in Computer Science, focusing on software development. Developed strong programming skills and a solid understanding of computer systems.",
      achievements: [
        { label: "CGPA: 8.25", type: "highlight" },
        { label: "Subject: Computer Science", type: "highlight" },
      ],
      tags: [
        "C++",
        "Python",
        "Javascript",
        "Data Structures",
        "Algorithms",
        "DBMS",
        "Web Development",
        "OS",
        "CN",
        "OOPS",
        "Software Engineering",
      ],
      icon: "📘",
    },
    // ⬇️ New middle card

    {
      degree: "Senior Secondary Certificate (SSC)",
      school: "R.P.M Academy, Gorakhpur",
      duration: "2021 - 2022",
      description:
        "Completed my SSC with a focus on Science and Computer Science. Achieved a good percentage and developed a strong foundation in mathematics and science.",
      achievements: [
        { label: "Percentage: 80.25%", type: "highlight" },
        { label: "Subject: Science & CS", type: "highlight" },
      ],
      tags: ["Maths", "Physics", "Chemistry", "Computer Science", "English"],
      icon: "📗",
    },
        {
      degree: "High School Certificate (HSC)",
      school: "Oxford Public School, Gorakhpur",
      duration: "2020-2021",
      description:
        "Completed High School with strong academic performance, building a foundation in core subjects such as Mathematics, English, and Computer Science.",
      achievements: [
         { label: "Percentage: 83.12%", type: "highlight" },
        { label: "Subject: Mathematics, English, Computer Science", type: "highlight" },
      ],
      tags: ["Mathematics", "English", "Computer Science", "Academic Excellence"],
      icon: "📙",
    },
  ];

  return (
    <section className="education">
      <h2 className="section-title">Educational Journey</h2>
      <p className="section-subtitle">
        Discover how academic excellence shapes innovative thinking and
        professional growth.
      </p>

      <div className="education-cards">
        {education.map((edu, idx) => (
          <div key={idx} className="education-card">
            <div className="edu-header">
              <span className="edu-icon">{edu.icon}</span>
              <h3>{edu.degree}</h3>
            </div>
            <h4>{edu.school}</h4>
            <span className="duration">📅 {edu.duration}</span>
            <p className="edu-description">{edu.description}</p>

            <div className="edu-achievements">
              <span className="achievements-title">🏆 Key Achievements</span>
              <div className="achievements-list">
                {edu.achievements.map((a, i) => (
                  <span key={i} className="achievement">
                    {a.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="edu-tags">
              {edu.tags.map((tag, i) => (
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

export default Education;
