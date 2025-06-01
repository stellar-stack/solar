import '../../src/index.css'
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const solarFacts = [
  "Solar energy is renewable and abundant.",
  "Solar panels convert sunlight into electricity.",
  "Using solar reduces your carbon footprint.",
  "Solar power can save you money on bills.",
  "Solar panels have no moving parts, so they’re durable.",
];

const SolarPanel = ({ isActive, onClick, index }) => {
  const panelRef = useRef();

  useEffect(() => {
    gsap.to(panelRef.current, {
      duration: 0.5,
      scale: isActive ? 1.1 : 1,
      boxShadow: isActive
        ? "0 0 15px 4px #FFD700"
        : "0 0 8px 1px rgba(0,0,0,0.2)",
      backgroundColor: isActive ? "#f7e600" : "#ccc",
      ease: "power1.out",
    });
  }, [isActive]);

  return (
    <div
      ref={panelRef}
      className="solar-panel"
      onClick={() => onClick(index)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick(index)}
      aria-pressed={isActive}
      aria-label={`Solar panel ${index + 1} ${isActive ? "active" : "inactive"}`}
    >
      ☀️
    </div>
  );
};

const InteractiveSolar = () => {
  const [activePanels, setActivePanels] = useState([false, false, false, false, false]);
  const [factIndex, setFactIndex] = useState(null);

  const togglePanel = (index) => {
    const newActive = [...activePanels];
    newActive[index] = !newActive[index];
    setActivePanels(newActive);

    if (!newActive[index]) {
      // if turned off, clear fact
      setFactIndex(null);
    } else {
      // show fact related to the panel
      setFactIndex(index);
    }
  };

  return (
    <section className="interactive-solar section" id="contact">
      <h2>Learn About Solar Energy</h2>
      <p>Click on the solar panels to turn them on/off and discover facts!</p>

      <div className="solar-panel-container" aria-live="polite">
        {activePanels.map((active, idx) => (
          <SolarPanel key={idx} isActive={active} onClick={togglePanel} index={idx} />
        ))}
      </div>

      <div className="solar-fact" aria-live="polite" role="region" aria-atomic="true">
        {factIndex !== null ? solarFacts[factIndex] : "Click a panel to learn a fact!"}
      </div>
    </section>
  );
};

export default InteractiveSolar;
