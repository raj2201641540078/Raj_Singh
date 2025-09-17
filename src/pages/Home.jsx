import React, { useEffect, useState } from "react";
import "../styles/Home.css";

const rawCode = `
<span class="keyword">const</span> profile = {
  <span class="property">name</span>: <span class="string">'Raj Singh'</span>,
  <span class="property">title</span>: <span class="string">'Software Developer | Mern Stack Enthusiast | Problem Solver'</span>,
  <span class="property">skills</span>: [
    <span class="string">'C++'</span>, <span class="string">'JavaScript'</span>, <span class="string">'Python'</span>, <span class="string">'Java'</span>,
    <span class="string">'HTML'</span>, <span class="string">'CSS'</span>, <span class="string">'C'</span>,
    <span class="string">'React'</span>, <span class="string">'NodeJS'</span>, <span class="string">'Express'</span>,
    <span class="string">'MongoDB'</span>, <span class="string">'PostgreSQL'</span>,
    <span class="string">'RESTful APIs'</span>, <span class="string">'Git'</span>, <span class="string">'Github'</span>, <span class="string">'GCP'</span>,
    <span class="string">'Data Structures'</span>, <span class="string">'Algorithms'</span>, <span class="string">'Competitive Programming'</span>,
    <span class="string">'Problem Solving'</span>, <span class="string">'System Design'</span>, <span class="string">'OOP'</span>, <span class="string">'DBMS'</span>, <span class="string">'OS'</span>
  ],
  <span class="property">hardWorker</span>: <span class="boolean">true</span>,
  <span class="property">quickLearner</span>: <span class="boolean">true</span>,
  <span class="property">problemSolver</span>: <span class="boolean">true</span>,
  <span class="property">yearsOfExperience</span>: <span class="string">'ForeverFreshman..'</span>,
  <span class="property">hireable</span>: <span class="keyword">function</span>() {
    <span class="keyword">return</span> (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= <span class="number">Infinity</span> &&
      this.yearsOfExperience >= <span class="string">'__'</span>
    );
  }
};`;

const Home = () => {
  const [typedCode, setTypedCode] = useState("");
  const [typedHeading, setTypedHeading] = useState("");

  const headingText = "Hello, I'm Raj Singh";

  // Typing for right-side code
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedCode(rawCode.slice(0, i));
      i++;
      if (i > rawCode.length) clearInterval(interval);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  // Typing for left-side heading
  useEffect(() => {
    let j = 0;
    const interval = setInterval(() => {
      setTypedHeading(headingText.slice(0, j));
      j++;
      if (j > headingText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home">
      {/* ⭐ Animated stars in background */}
      <div className="stars" />

      <div className="home-inner">
        {/* LEFT SIDE */}
        <div className="left">
          <div className="intro-badges">
            <span className="badge">Welcome to my universe</span>
            <span className="badge accent">Tech Magic</span>
          </div>

          {/* Typing animation */}
          <h1 className="hero typing">
            <span>{typedHeading}</span>
            <span className="cursor">|</span>
          </h1>

          <div className="role-badges">
            <span className="pill blue">Competitive Programmer</span>
            <span className="pill yellow">Innovation</span>
            <span className="pill purple">Robust Code</span>
          </div>

          <p className="sub-description">
            ⚙️ Forging next-gen tech with C++, JavaScript & Blockchain 🚀 <br />
            Transforming ideas into scalable & secure solutions 💻 🔐
          </p>

         <div className="buttons">
  <a
    className="btn primary"
    href="https://codolio.com/profile/Rajsingh"
    target="_blank"
    rel="noopener noreferrer"
  >
    About Me
  </a>
  <a
    className="btn secondary"
    href="https://drive.google.com/file/d/1FrDxOt_k-cVj0efjSiAyF2oh78C2tSKA/view"
    target="_blank"
    rel="noreferrer"
  >
    Get Resume
  </a>
  <a
    className="btn primary"
    href="https://github.com/raj2201641540078"
    target="_blank"
    rel="noreferrer"
  >
    Github
  </a>
</div>

          
        </div>
        

        {/* RIGHT SIDE */}
        <div className="right">
          <div className="code-window">
            <div className="code-toolbar">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
              <span className="file-title">developer.js</span>
            </div>
            <pre
              className="code-block"
              dangerouslySetInnerHTML={{ __html: typedCode }}
            />
          </div>
        </div>
      </div>

      <div className="scroll-hint">Scroll to explore</div>

      {/* WHO I AM Section */}
      {/* WHO I AM Section */}
<div className="whoiam">
  <div className="whoiam-text">
    <h2 className="whoiam-heading">WHO I AM?</h2>
    <p>
      I’m Raj Singh — a builder who turns coffee, code, and curiosity into
      scalable software. From coding platforms to experimenting with AI and
      Blockchain, I love pushing tech beyond limits.
      <br /> <br />
      I’m fluent in Java, C++, Python, and SQL, and enjoy building full-stack
      apps with React, Node.js, and MongoDB. Problem-solving is my fuel —
      whether it’s debugging at 2 AM or shipping features faster than expected.
      <br /> <br />
      When I’m not coding, I’m playing cricket, watching thrillers, or
      contributing to open-source. For me, tech isn’t just work — it’s craft,
      challenge, and creativity combined.
    </p>
  </div>

  <div className="whoiam-photo">
    <img src="/assets/profile.png" alt="Raj Singh" />
  </div>
</div>

    </section>
  );
};

export default Home;
