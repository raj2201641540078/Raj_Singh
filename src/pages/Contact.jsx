import "../styles/Contact.css";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fru7uvo",   // Your EmailJS Service ID
        "template_orlzmgw",  // Your EmailJS Template ID
        formRef.current,     // ✅ FIXED: use formRef.current
        "XVwSgM2KUvU8Ta_bg"  // Your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          alert("❌ Failed to send message. Try again later.");
        }
      );
  };

  return (
    <section className="contact">
      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-info">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-subtitle">
            Have a question or want to work together? Drop me a message!
          </p>

          <div className="contact-details">
            <div className="detail">
              <div className="icon-box">
                <FaEnvelope />
              </div>
              <div className="detail-text">
                <h4>Email</h4>
                <p>raajjsingh8179@gmail.com</p>
              </div>
            </div>

            <div className="detail">
              <div className="icon-box">
                <FaMapMarkerAlt />
              </div>
              <div className="detail-text">
                <h4>Location</h4>
                <p>Kanpur, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">
            Send Message <FaPaperPlane className="send-icon" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
