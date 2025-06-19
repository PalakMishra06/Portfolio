import React, { useState } from "react";

const skills = [
  { name: "Java", level: 92, logo: "🧑‍💻" },
  { name: "SpringBoot", level: 80, logo: "🌱" },
  { name: "HTML", level: 99, logo: "📄" },
  { name: "CSS", level: 90, logo: "🎨" },
  { name: "React JS", level: 90, logo: "⚛️" },
  { name: "MySQL", level: 90, logo: "💾" },
  { name: "JavaScript", level: 85, logo: "📜" },
  { name: "Hibernate", level: 80, logo: "📘" },
  { name: "Angular", level: 75, logo: "🅰️" },
  { name: "Spring", level: 70, logo: "🌿" },
  { name: "Mongo DB", level: 65, logo: "🍃" },
  { name: "Oracle", level: 60, logo: "📀" },
];

const circleRadius = 30;
const strokeWidth = 4;
const circumference = 2 * Math.PI * circleRadius;

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="skills" style={styles.section}>
      <h1 style={styles.title}>🚀 My Skills</h1>
      <p style={styles.subtitle}>Technologies I've used to build real-world projects</p>

      <div style={styles.grid}>
        {skills.map((skill, index) => {
          const progress = (skill.level / 100) * circumference;
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={index}
              style={{
                ...styles.skillCard,
                transform: isHovered ? "scale(1.08)" : "scale(1)",
                boxShadow: isHovered
                  ? "0 10px 20px rgba(0, 123, 255, 0.2)"
                  : styles.skillCard.boxShadow,
                backgroundColor: isHovered ? "#f0faff" : "#ffffff",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                style={{
                  ...styles.logo,
                  transform: isHovered ? "scale(1.3)" : "scale(1)",
                  transition: "transform 0.3s ease",
                }}
              >
                {skill.logo}
              </div>

              <svg width="80" height="80">
                <circle
                  cx="40"
                  cy="40"
                  r={circleRadius}
                  fill="none"
                  stroke="#e0e0e0"
                  strokeWidth={strokeWidth}
                />
                <circle
                  cx="40"
                  cy="40"
                  r={circleRadius}
                  fill="none"
                  stroke={isHovered ? "#007bff" : "#4caf50"}
                  strokeWidth={strokeWidth}
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference - progress}
                  strokeLinecap="round"
                  transform="rotate(-90 40 40)"
                  style={{ transition: "stroke-dashoffset 0.5s ease, stroke 0.3s" }}
                />
                <text
                  x="50%"
                  y="54%"
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="bold"
                  fill={isHovered ? "#007bff" : "#000"}
                >
                  {skill.level}%
                </text>
              </svg>

              <div
                style={{
                  ...styles.skillName,
                  color: isHovered ? "#007bff" : "#2c3e50",
                }}
              >
                {skill.name}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "3rem 1rem",
    textAlign: "center",
    fontFamily: "'Segoe UI', sans-serif",
    background: "linear-gradient(to right, #fdfbfb, #ebedee)",
    minHeight: "100vh",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "0.5rem",
    fontWeight: "bold",
    color: "#2c3e50",
    letterSpacing: "1px",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#555",
    marginBottom: "2rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: "1.5rem",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  skillCard: {
    backgroundColor: "#f9f9f9",
    borderRadius: "50%",
    padding: "1rem",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  logo: {
    fontSize: "1.5rem",
    marginBottom: "0.5rem",
  },
  skillName: {
    fontWeight: "600",
    marginTop: "0.6rem",
    fontSize: "0.9rem",
    transition: "color 0.3s",
  },
};

export default Skills;
