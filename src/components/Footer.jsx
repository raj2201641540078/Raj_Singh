import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Raj Singh. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;   // ✅ this is important
