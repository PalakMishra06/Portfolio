import React, { useState } from "react";

const skills = [
  { name: "Java", level: 92, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring Boot", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "HTML", level: 99, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "React JS", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "MySQL", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "JavaScript", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Hibernate", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-plain.svg" },
  { name: "Angular", level: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Spring", level: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "MongoDB", level: 65, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Oracle", level: 60, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
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
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                style={{
                  ...styles.logo,
                  transform: isHovered ? "scale(1.2)" : "scale(1)",
                  transition: "transform 0.3s ease",
                }}
              />

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
                  style={{
                    transition: "stroke-dashoffset 0.5s ease, stroke 0.3s",
                  }}
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
    padding: "50px 1px",
    textAlign: "center",
 
    fontFamily: "'Segoe UI', sans-serif",
   
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
    width: "30px",
    height: "30px",
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
