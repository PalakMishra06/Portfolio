import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import emailIcon from "../assets/email.png";
import linkedinIcon from "../assets/linkedin.png";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xisl5rg",    // Replace with your EmailJS service ID
        "template_9oohh5w",   // Replace with your EmailJS template ID
        form.current,
        "SGjhJ-Xg2JSSKiAhq"     // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Try again later.");
          console.error(error.text);
        }
      );
  };

  const styles = {
    section: {
      padding: "4rem 2rem",
      backgroundColor: "#fdfefe",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: "#2c3e50",
      textAlign: "center",
    },
    title: {
      fontSize: "2.5rem",
      marginBottom: "2rem",
      borderBottom: "2px solid #ccc",
      display: "inline-block",
      paddingBottom: "0.5rem",
    },
    infoContainer: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "2rem",
      marginBottom: "3rem",
    },
    contactCard: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      backgroundColor: "#ffffff",
      padding: "1rem 1.5rem",
      borderRadius: "10px",
      boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
      minWidth: "280px",
    },
    icon: {
      width: "30px",
      height: "30px",
    },
    form: {
      maxWidth: "600px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    input: {
      padding: "0.75rem",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "1rem",
    },
    textarea: {
      padding: "0.75rem",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "1rem",
      resize: "vertical",
    },
    button: {
      padding: "0.75rem",
      borderRadius: "8px",
      border: "none",
      backgroundColor: "#3f51b5",
      color: "#fff",
      fontSize: "1rem",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#303f9f",
    },
    footer: {
      marginTop: "4rem",
      padding: "2rem",
      backgroundColor: "#2c3e50",
      color: "#fff",
      textAlign: "center",
    },
    navLinks: {
      listStyle: "none",
      display: "flex",
      justifyContent: "center",
      gap: "2rem",
      padding: 0,
      marginBottom: "1rem",
      flexWrap: "wrap",
    },
    navItem: {
      textDecoration: "none",
      color: "#fff",
      fontWeight: "500",
    },
  };

  return (
    <>
      <section id="contact" style={styles.section}>
        <h1 style={styles.title}>📬 Get in Touch</h1>

        {/* Contact Info */}
        <div style={styles.infoContainer}>
          <div style={styles.contactCard}>
            <img src={emailIcon} alt="Email" style={styles.icon} />
            <p>
              <a href="mailto:palakmishra632001@gmail.com">palakmishra632001@gmail.com</a>
            </p>
          </div>
          <div style={styles.contactCard}>
            <img src={linkedinIcon} alt="LinkedIn" style={styles.icon} />
            <p>
              <a
                href="https://www.linkedin.com/in/palakmishra632001"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} style={styles.form}>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            style={styles.input}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            style={styles.input}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            style={styles.textarea}
          />
          <button
            type="submit"
            style={styles.button}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#303f9f")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#3f51b5")}
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <nav>
          <ul style={styles.navLinks}>
            <li><a href="#about" style={styles.navItem}>About</a></li>
            <li><a href="#projects" style={styles.navItem}>Projects</a></li>
            <li><a href="#contact" style={styles.navItem}>Contact</a></li>

          </ul>
        </nav>
        <p>&copy; 2024 Palak Mishra. All Rights Reserved.</p>
      </footer>
    </>
  );
}