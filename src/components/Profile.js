import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import profilePic from "../assets/profile pic.png";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import leetcodeIcon from "../assets/leetcode.png";
import resumePdf from "../assets/Palak Mishra resume.pdf";

export default function Profile() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Palak Mishra", " Developer", "Programmer", "Coder"],
      typeSpeed: 120,
      backSpeed: 80,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  const styles = {
    section: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      color: "#2c3e50",
      textAlign: "center",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    picContainer: {
      flex: 1,
      textAlign: "center",
    },
    profilePic: {
      width: "250px",
      borderRadius: "50%",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
      transition: "transform 0.3s ease-in-out",
    },
    textContainer: {
      flex: 1,
      maxWidth: "600px",
      marginTop: "2rem",
    },
    greeting: {
      fontSize: "1.2rem",
      marginBottom: "0.5rem",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#34495e",
      marginBottom: "1rem",
    },
    btnContainer: {
      marginTop: "1.5rem",
    },
    button: {
      padding: "0.7rem 1.5rem",
      fontSize: "1rem",
      borderRadius: "30px",
      border: "2px solid #2c3e50",
      backgroundColor: "#fff",
      color: "#2c3e50",
      cursor: "pointer",
      transition: "all 0.3s ease-in-out",
    },
    buttonHover: {
      backgroundColor: "#2c3e50",
      color: "#fff",
    },
    socials: {
      marginTop: "2rem",
      display: "flex",
      justifyContent: "center",
      gap: "1.5rem",
    },
    icon: {
      width: "40px",
      height: "40px",
      cursor: "pointer",
      transition: "transform 0.2s ease",
    },
  };

  return (
    <section id="profile" style={styles.section}>
      <div style={styles.picContainer}>
        <img
          src={profilePic}
          alt="Palak Mishra"
          style={styles.profilePic}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>

      <div style={styles.textContainer}>
        <p style={styles.greeting}>Hello 👋, I'm</p>
        <h1 style={styles.title}>
          <span ref={typedElement}></span>
        </h1>
        <p>Welcome to my portfolio! I’m a full-stack developer with a passion for creating innovative and efficient web solutions. With expertise in both front-end and back-end technologies, I craft seamless, user-centric applications that solve real-world problems. Whether building responsive websites, developing scalable applications, or optimizing system performance, my goal is to deliver exceptional results. Explore my work and let’s collaborate on your next project!.</p>

        <div style={styles.btnContainer}>
          <a href={resumePdf} download>
            <button
              style={styles.button}
              onMouseOver={(e) => Object.assign(e.target.style, styles.buttonHover)}
              onMouseOut={(e) => Object.assign(e.target.style, styles.button)}
            >
              Resume
            </button>
          </a>
        </div>

        <div style={styles.socials}>
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            style={styles.icon}
            onClick={() => window.open("https://www.linkedin.com/in/palakmishra632001/", "_blank")}
          />
          <img
            src={githubIcon}
            alt="GitHub"
            style={styles.icon}
            onClick={() => window.open("https://github.com/PalakMishra06/", "_blank")}
          />
          <img
            src={leetcodeIcon}
            alt="LeetCode"
            style={styles.icon}
            onClick={() => window.open("https://leetcode.com/u/Palakmishra06/", "_blank")}
          />
        </div>
      </div>
    </section>
  );
}