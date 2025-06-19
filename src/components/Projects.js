import React from "react";
import projectImg from "../assets/project-1.png"; // update path if needed
import arrowIcon from "../assets/arrow.png";     // update path if needed

export default function Projects() {
  const styles = {
    section: {
      padding: "4rem 2rem",
      backgroundColor: "#f4f6f8",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      textAlign: "left",
    },
    title: {
      fontSize: "2.0rem",
      marginBottom: "3rem",
      color: "#2c3e50",
      borderBottom: "2px solid #ccc",
      display: "inline-block",
      paddingBottom: "0.5rem",
    },
    container: {
      display: "flex",
      justifyContent: "left",
      flexWrap: "wrap",
      gap: "2rem",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "15px",
      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
      padding: "1.5rem",
      width: "300px",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    cardHover: {
      transform: "scale(1.05)",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
    },
    image: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
      borderRadius: "10px",
      marginBottom: "1rem",
    },
    titleText: {
      fontSize: "1.5rem",
      color: "#34495e",
      marginBottom: "1rem",
    },
    btnContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "1rem",
    },
    btn: {
      padding: "0.5rem 1rem",
      backgroundColor: "#3f51b5",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "0.9rem",
      transition: "background-color 0.3s ease",
    },
    btnHover: {
      backgroundColor: "#303f9f",
    },
    arrow: {
      width: "35px",
      marginTop: "3rem",
      cursor: "pointer",
    },
  };

  // optional hover effects using React state
  const [hovered, setHovered] = React.useState(false);

  return (
    <section id="projects" style={styles.section}>
      <h1 style={styles.title}>🚀 Browse My Projects</h1>

      <div style={styles.container}>
        <div
          style={{
            ...styles.card,
            ...(hovered ? styles.cardHover : {}),
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img src={projectImg} alt="Project 1" style={styles.image} />
          <h3 style={styles.titleText}>M.R.S. (Medicine Recommendation System)</h3>
          <div style={styles.btnContainer}>
            <button
              style={styles.btn}
              onClick={() =>
                window.open(
                  "https://github.com/PalakMishra06/Disease-Prediction-and-Medicine-Recommendation",
                  "_blank"
                )
              }
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#303f9f")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#3f51b5")}
            >
              GitHub
            </button>
            {/* Add live demo if available */}
            {/* <button
              style={styles.btn}
              onClick={() => window.open("LIVE_DEMO_URL", "_blank")}
            >
              Live Demo
            </button> */}
          </div>
        </div>
      </div>

      <img
        src={arrowIcon}
        alt="Scroll to Contact"
        style={styles.arrow}
        onClick={() => (window.location.href = "#contact")}
      />
    </section>
  );
}