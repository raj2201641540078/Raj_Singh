import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import {
  FaHome,
  FaUserTie,
  FaGraduationCap,
  FaTrophy,
  FaCertificate,
  FaCode,
  FaEnvelope,
  FaLaptopCode,
} from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa"; // hamburger + close icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false); // jab bhi link pe click ho, menu band ho jaye
  };

  return (
    <nav className="navbar">
      {/* Hamburger button */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Nav menu */}
      <div className={`nav-pill-container ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li>
            <NavLink to="/" end onClick={handleLinkClick}>
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" onClick={handleLinkClick}>
              <FaUserTie /> Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/experience" onClick={handleLinkClick}>
              <FaLaptopCode /> Experience
            </NavLink>
          </li>
          <li>
            <NavLink to="/education" onClick={handleLinkClick}>
              <FaGraduationCap /> Education
            </NavLink>
          </li>
          <li>
            <NavLink to="/achievements" onClick={handleLinkClick}>
              <FaTrophy /> Achievements
            </NavLink>
          </li>
          <li>
            <NavLink to="/certifications" onClick={handleLinkClick}>
              <FaCertificate /> Certifications
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={handleLinkClick}>
              <FaCode /> Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={handleLinkClick}>
              <FaEnvelope /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
