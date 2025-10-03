import React, { useState } from "react";

import projectImg1 from "../assets/mrs.png";
import projectImg2 from "../assets/sms.png";
import projectImg3 from "../assets/tt.png";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const styles = {
    section: {
       padding: "4rem",
     
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      textAlign: "center",
    },
    title: {
      fontSize: "2rem",
      marginBottom: "2rem",
      color: "#2c3e50",
      borderBottom: "3px solid rgb(6, 6, 7)",
      display: "inline-block",
      paddingBottom: "0.3rem",
    },
    container: {
      display: "flex",
      justifyContent: "left",

      flexWrap: "wrap",
      gap: "1.2rem",
      maxWidth: "800px",
     
    },
    card: {
      backgroundColor: "#ffffff",
      borderRadius: "16px",
      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
      padding: "1rem",
      width: "200px",
      height: "350px",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    cardHover: {
      transform: "translateY(-8px)",
      boxShadow: "0 12px 28px rgba(0, 0, 0, 0.15)",
    },
    image: {
      width: "100%",
      height: "250px",
      objectFit: "cover",
      borderRadius: "10px",
      marginBottom: "0.8rem",
    },
    titleText: {
      fontSize: "1rem",
      color: "#2c3e50",
      fontWeight: "600",
      marginBottom: "0.6rem",
      textAlign: "center",
      lineHeight: "1.2",
    },
    btnContainer: {
      display: "flex",
      justifyContent: "center",
    },
    btn: {
      padding: "0.4rem 1rem",
      backgroundColor: "#3f51b5",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "0.85rem",
      fontWeight: "500",
      transition: "background-color 0.3s ease",
    },
  };

  const handleHover = (e, enter) => {
    e.target.style.backgroundColor = enter ? "#303f9f" : "#3f51b5";
  };

  const projects = [
    {
      title: "M.R.S. (Medicine Recommendation System)",
      image: projectImg1,
      github: "https://github.com/PalakMishra06/Disease-Prediction-and-Medicine-Recommendation",
    },
    {
      title: "Student Management System",
      image: projectImg2,
      github: "https://github.com/PalakMishra06/Student-Management-System",
    },
    {
      title: "Tour & Travels Website",
      image: projectImg3,
      github: "https://github.com/PalakMishra06/Tour-Travel",
    },
  ];

  return (
    <section id="projects" style={styles.section}>
      <h1 style={styles.title}>🚀 Browse My Projects</h1>

      <div style={styles.container}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              ...(hoveredIndex === index ? styles.cardHover : {}),
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={project.image} alt={project.title} style={styles.image} />
            <h3 style={styles.titleText}>{project.title}</h3>
            <div style={styles.btnContainer}>
              <button
                style={styles.btn}
                onClick={() => window.open(project.github, "_blank")}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
              >
                GitHub
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
