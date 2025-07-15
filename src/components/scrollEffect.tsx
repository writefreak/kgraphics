// ScrollEffect.tsx (Client Component, only for scroll effect)

"use client";

import { useEffect } from "react";

const ScrollEffect = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header"); // Select the header element
      const hero = document.querySelector("section"); // Select the Hero section

      if (hero && header) {
        // Check if the hero section is out of view
        const heroBottom = hero.getBoundingClientRect().bottom;

        if (heroBottom <= 0) {
          header.classList.add("opacity-0", "pointer-events-none"); // Hide header
        } else {
          header.classList.remove("opacity-0", "pointer-events-none"); // Show header
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup scroll listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null; // This component doesn't render anything itself
};

export default ScrollEffect;
