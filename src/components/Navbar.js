import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navStyle = {
    baseNav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0.8rem 1.5rem",
      backgroundColor: "#111",
      color: "#fff",
      position: "fixed",
      width: "100%",
      top: 0,
      zIndex: 1000,
    },
    logo: {
      fontSize: "1.4rem",
      fontWeight: "bold",
      color: "#f3ba2f",
      cursor: "pointer",
    },
    navLinks: {
      display: "flex",
      listStyle: "none",
      gap: "1.5rem",
      marginRight:"8%"
    },
    navLink: {
      color: "#fff",
      textDecoration: "none",
      fontSize: "1rem",
    },
    hamburgerIcon: {
      display: "flex",
      flexDirection: "column",
      cursor: "pointer",
      gap: "5px",
    },
    bar: {
      width: "24px",
      height: "3px",
      backgroundColor: "#fff",
    },
    menuLinks: {
      display: menuOpen ? "flex" : "none",
      flexDirection: "column",
      position: "absolute",
      top: "60px",
      right: "20px",
      backgroundColor: "#222",
      padding: "1rem",
      borderRadius: "8px",
      boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
      zIndex: 1001,
    },
    menuLink: {
      color: "#fff",
      textDecoration: "none",
      padding: "0.5rem 0",
    },
  };

  const links = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <>
      <nav style={navStyle.baseNav}>
        <div style={navStyle.logo}>PALAK MISHRA</div>

        {!isMobile ? (
          <ul style={navStyle.navLinks}>
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  style={navStyle.navLink}
                  onMouseEnter={(e) => (e.target.style.color = "#f3ba2f")}
                  onMouseLeave={(e) => (e.target.style.color = "#fff")}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div style={navStyle.hamburgerIcon} onClick={toggleMenu}>
            <div style={navStyle.bar}></div>
            <div style={navStyle.bar}></div>
            <div style={navStyle.bar}></div>
          </div>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMobile && (
        <div style={navStyle.menuLinks}>
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={navStyle.menuLink}
              onClick={toggleMenu}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
