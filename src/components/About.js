import React, { useState, useEffect } from "react";
import aboutPic from "../assets/about pic.png";

export default function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <style>{`
        .about-section {
          padding: 2rem 1rem;
          background-color: #fdfefe;
          color: #333;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .about-title {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 1.5rem;
          color: #2c3e50;
          border-bottom: 2px solid #ddd;
          padding-bottom: 0.5rem;
        }

        .about-subtitle {
          text-align: center;
          font-size: 1rem;
          margin-bottom: 1.5rem;
          padding: 0 1rem;
        }

        .about-container {
          display: flex;
          flex-direction: ${isMobile ? "column" : "row"};
          justify-content: center;
          align-items: flex-start;
          gap: 1.5rem;
        }

        .about-image {
          max-width: 280px;
          width: 90%;
          border-radius: 20px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
          margin: 0 auto;
        }

        .about-info {
          background-color: #ffffff;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          max-width: 500px;
          margin: 0 auto;
        }

        .about-role {
          font-size: 1.5rem;
          font-weight: 700;
          color: #d32f2f;
          margin-bottom: 0.5rem;
          text-align: center;
        }

        .about-info-title {
          font-size: 1.1rem;
          font-style: italic;
          color: #333;
          margin-bottom: 1rem;
          text-align: center;
          border-bottom: 1px solid #ddd;
          padding-bottom: 0.5rem;
        }

        .about-info-item {
          font-size: 0.95rem;
          margin-bottom: 0.6rem;
          line-height: 1.5;
        }

        .about-label {
          font-weight: 600;
          color: #ff6f61;
          margin-right: 0.5rem;
        }

        @media (max-width: 768px) {
          .about-container {
            flex-direction: column;
            align-items: center;
          }

          .about-image {
            margin-bottom: 1rem;
          }

          .about-info {
            padding: 1rem;
          }
        }
      `}</style>

      <section id="about" className="about-section">
        <h1 className="about-title">About</h1>
        <p className="about-subtitle">
          As a full-stack developer, I thrive on turning ideas into functional and engaging digital experiences.
          With expertise spanning both front-end and back-end technologies, I focus on building scalable,
          responsive, and intuitive applications.
        </p>

        <div className="about-container">
          <img src={aboutPic} alt="Profile" className="about-image" />

          <div className="about-info">
            <div className="about-role">Full-Stack Developer</div>
            <div className="about-info-title">Information</div>

            <div className="about-info-item">
              <span className="about-label">Phone:</span> +91 6232435955
            </div>
            <div className="about-info-item">
              <span className="about-label">City:</span> Pimpri-Chinchwad, Pune
            </div>
            <div className="about-info-item">
              <span className="about-label">Age:</span> 24
            </div>
            <div className="about-info-item">
              <span className="about-label">Post Graduate:</span> Master Of Computer Applications
            </div>
            <div className="about-info-item">
              <span className="about-label">Email:</span>
              <a href="mailto:palakmishra632001@gmail.com">palakmishra632001@gmail.com</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
