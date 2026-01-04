'use client';

import { useEffect, useState } from 'react';
import { ICON_MAP } from './Icons';

interface SideNavProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'problem', label: 'Problem' },
  { id: 'process', label: 'Process' },
  { id: 'ingredients', label: 'Ingredients' },
  { id: 'why', label: 'Why' },
  { id: 'products', label: 'Shop' },
  { id: 'faq', label: 'FAQ' },
  { id: 'about', label: 'About' },
  { id: 'shop', label: 'Shop Cart' },
];

const DARK_SECTIONS = ['problem', 'process', 'ingredients'];

export default function SideNav({ activeSection, onSectionClick }: SideNavProps) {
  const [navStates, setNavStates] = useState<Record<string, 'active' | 'adjacent' | 'distant'>>({});
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  useEffect(() => {
    const activeIndex = SECTIONS.findIndex((s) => s.id === activeSection);
    const states: Record<string, 'active' | 'adjacent' | 'distant'> = {};

    SECTIONS.forEach((section, index) => {
      if (index === activeIndex) {
        states[section.id] = 'active';
      } else if (Math.abs(index - activeIndex) === 1) {
        states[section.id] = 'adjacent';
      } else {
        states[section.id] = 'distant';
      }
    });

    setNavStates(states);
    setIsDarkBackground(DARK_SECTIONS.includes(activeSection));
  }, [activeSection]);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const activeIndex = SECTIONS.findIndex((s) => s.id === activeSection);
    
    if (e.deltaY < 0) {
      // Scroll up - go to previous section
      if (activeIndex > 0) {
        onSectionClick(SECTIONS[activeIndex - 1].id);
      }
    } else {
      // Scroll down - go to next section
      if (activeIndex < SECTIONS.length - 1) {
        onSectionClick(SECTIONS[activeIndex + 1].id);
      }
    }
  };

  return (
    <nav className={`side-nav ${isDarkBackground ? 'dark' : 'light'}`} onWheel={handleWheel}>
      {SECTIONS.map((section) => {
        const Icon = ICON_MAP[section.id];
        const state = navStates[section.id] || 'distant';
        
        return (
          <button
            key={section.id}
            onClick={() => onSectionClick(section.id)}
            className={`nav-icon ${state}`}
            aria-label={section.label}
            tabIndex={0}
          >
            <span className="nav-label">{section.label}</span>
            <Icon size={20} strokeWidth={2} aria-hidden="true" />
          </button>
        );
      })}
    </nav>
  );
}
