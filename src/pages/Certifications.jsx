import "../styles/Certifications.css";
import { FaGoogleDrive, FaRegFileAlt, FaCode, FaDatabase, FaPython } from "react-icons/fa";
import { SiC, SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiMysql, SiCss3, SiHtml5 } from "react-icons/si";

const Certifications = () => {
  const certifications = [
    {
      title: "Introduction To Programming In C",
      provider: "Great Learning",
      tags: [
        { name: "C", icon: <SiC /> },
        { name: "DSA", icon: <FaCode /> },
      ],
      link: "https://drive.google.com/file/d/1D_ZJIoGusawt_B4oD-RUFlztRpYUYQ9y/view?usp=drive_link",
    },
    {
      title: "Full-Stack Web Development (MERN)",
      provider: "Coder Army",
      tags: [
        { name: "Frontend Development", icon: <FaCode /> },
    
        { name: "Database", icon: <FaDatabase /> },
        { name: "Backend Development", icon: <FaCode/> },
        { name: "WebRTC", icon: <FaCode /> },
        // { name: "ReactJS", icon: <SiReact /> },
        // { name: "Node.js", icon: <SiNodedotjs /> },
      ],
      link: "https://drive.google.com/file/d/1laC-j5aQdZTQQIyra3TdxEBWgNJel-_e/view?usp=drive_link",
    },
    {
      title: "Blockchain",
      provider: "Coder Army",
      tags: [
        // { name: "Node.js", icon: <FaDatabase /> },
        { name: "Ethereum", icon: <FaCode /> },
        { name: "Consensus Mechanisms", icon: <FaCode /> },
      ],
      link: "https://drive.google.com/file/d/1laC-j5aQdZTQQIyra3TdxEBWgNJel-_e/view?usp=drive_link",
    },
    {
      title: "SQL (Basic)",
      provider: "Hackerrank",
      tags: [
        { name: "SQL", icon: <FaDatabase /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
      link: "https://drive.google.com/file/d/1OHOYKPn7BCW72KNtBoiDSGo2gYUxboVU/view?usp=drive_link",
    },
    {
      title: "C++ & DSA",
      provider: "Code Help",
      tags: [
        { name: "C++", icon: <FaCode /> },
        { name: "Data Structure And Algorithum", icon: <FaCode /> },
      ],
      link: "https://drive.google.com/file/d/1oDXm7peu0JcBF0Bu6JXGtFEZT7y5XHCl/view?usp=drive_link",
    },
    {
      title: "Python",
      provider: "OneStop",
      tags: [
        { name: "Problem Solving", icon: <FaCode /> },
        { name: "Object Oriented Programming", icon: <FaCode /> },
        // { name: "Computational Theory", icon: <FaCode /> },
        { name: "Algorithmic Thinking", icon: <FaCode /> },
        // { name: "Critical Thinking", icon: <FaCode /> },
      ],
      link: "https://drive.google.com/file/d/118eprIcQ8GslPFdT7kW7AVgKNZYv70Dh/view?usp=drive_link",
    },
    {
      title: "AWS Cloud practitioner Essentials",
      provider: "AWS",
      tags: [
        { name: "Cloud Essentials", icon: <FaCode /> },
        { name: "AWS Architecture and Well-Architected Framework", icon: <FaCode /> },
        // { name: "Unsupervised Learning", icon: <FaCode /> },
        // { name: "Reinforcement Learning", icon: <FaCode /> },
        // { name: "Neural Networks", icon: <FaCode /> },
        // { name: "Deep Learning", icon: <FaCode /> },
      ],
      link: "https://drive.google.com/file/d/1BDfi8V7HIO-3jFg3CjHvUV--SL9-XlhW/view",
    },
    {
      title: "JavaScript",
      provider: "Infosys Springboard",
      tags: [
        { name: "Cross-Platform & Versatility", icon: <FaPython /> },
        { name: "Asynchronous & Event-Driven Nature", icon: <FaCode /> },
      ],
      link: "https://drive.google.com/file/d/1SGGCqC4SSfHo2yiCdI38mzYdZhZjh_gD/view?usp=drive_link",
    },
    {
      title: "Agentblazer Champion 2025",
      provider: "Salesforce Trailhead",
      tags: [
        { name: "Learned Foundational AI Concepts", icon: <FaCode /> },
        { name: "Hands-on Agentforce Experience", icon: <FaCode /> },
        // { name: "UI/UX", icon: <FaCode /> },
      ],
      link: "https://drive.google.com/file/d/1S6gbReEYzf7Jv4w8tMuhOip_-lTKOj0Q/view?usp=drive_link",
    },
  ];

  return (
    <section className="certifications">
      <h2 className="section-title">Certifications</h2>

      <div className="certifications-grid">
        {certifications.map((cert, idx) => (
          <a
            key={idx}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card"
          >
            {/* Header with icons */}
            <div className="card-header">
              <FaRegFileAlt className="cert-icon" />
              <FaGoogleDrive className="drive-icon" />
            </div>

            {/* Content */}
            <div className="card-content">
              <h3 dangerouslySetInnerHTML={{ __html: highlightTitle(cert.title) }} />
              <h4>{cert.provider}</h4>
            </div>

            {/* Tags */}
            <div className="tags">
              {cert.tags.map((tag, i) => (
                <span key={i} className="tag">
                  {tag.icon} {tag.name}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

// Highlight first word of the title
function highlightTitle(title) {
  const words = title.split(" ");
  if (words.length > 1) {
    return `<strong>${words[0]}</strong> ${words.slice(1).join(" ")}`;
  }
  return `<strong>${title}</strong>`;
}

export default Certifications;
