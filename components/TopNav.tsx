'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface TopNavProps {
  activeSection: string;
}

export default function TopNav({ activeSection }: TopNavProps) {
  const [isDarkSection, setIsDarkSection] = useState(false);

  useEffect(() => {
    // Determine if current section has dark background
    const darkSections = ['problem', 'process', 'ingredients'];
    setIsDarkSection(darkSections.includes(activeSection));
  }, [activeSection]);

  return (
    <nav className={`top-nav ${isDarkSection ? 'dark' : 'light'}`}>
      <div className="nav-content">
        <Image
          src="/athena-logo.png"
          alt="ATHENA'S BEST® Logo"
          width={40}
          height={40}
          priority
          className="logo-image"
        />
        <span className="logo-text">ATHENA'S BEST®</span>
      </div>
    </nav>
  );
}
