import React, { useState } from "react";
import '../../src/index.css'
import solarVideo from '../image/solarbg.mp4'; // Adjust the path as needed
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on clicking a nav link + smooth scroll
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header className="main-header">
      <div className="logo">SolarCo</div>

      <nav>
        <ul className={`ul-list ${menuOpen ? "open" : ""}`}>
            <li>
             <p>Phone: <a href="tel:+918200552865">+91 8200552865</a></p>
            </li>
          <li>
            <a href="#home" onClick={(e) => handleNavClick(e, "#home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={(e) => handleNavClick(e, "#services")}>
              Services
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleNavClick(e, "#about")}>
              About
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
              Fact
            </a>
          </li>
        </ul>

        {/* Hamburger toggle */}
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setMenuOpen((prev) => !prev)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </header>
  );
};

const HeroSection = () => (
  <section className="hero-section" id="home">
    <div className="video-wrapper">
    <video
      className="bg-video"
      autoPlay
      loop
      muted
      playsInline
      src={solarVideo}
      type="video/mp4"
    />
    <div className="video-overlay"></div> {/* ← Overlay */}
  </div>

    <div className="hero-content">
      <h1>Power Your Future with Solar Energy</h1>
      <p>Lower your energy bills and help save the planet by switching to solar.</p>
      <button className="cta-btn">Get a Free Quote</button>
    </div>
  </section>
);

export default function App() {
  return (
    <>
      <Header />
      <HeroSection />
      {/* You can add other sections like Services, About, Contact here */}
      {/* <section id="services" style={{ height: "100vh", padding: "2rem" }}>
        <h2>Services</h2>
        <p>Details about services...</p>
      </section>
      <section id="about" style={{ height: "100vh", padding: "2rem" }}>
        <h2>About</h2>
        <p>About us content...</p>
      </section>
      <section id="contact" style={{ height: "100vh", padding: "2rem" }}>
        <h2>Contact</h2>
        <p>Contact form or details...</p>
      </section> */}
    </>
  );
}
