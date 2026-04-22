import { useEffect, useState } from 'react';

const SECTION_IDS = ['home', 'about', 'projects', 'skills', 'contact'];

/**
 * Returns the ID of whichever section is currently
 * occupying the centre of the viewport.
 */
export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // A section becomes "active" when its middle crosses the centre of the screen
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0,
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return { activeSection, sectionIds: SECTION_IDS };
};
