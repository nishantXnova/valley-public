import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <a href="#" className="nav-logo">
        <div className="nav-mark">
          <svg viewBox="0 0 24 24" fill="none" stroke={scrolled ? '#3D1FA3' : '#fff'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        </div>
        <span className="nav-name">Valley Public High School</span>
      </a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#academics">Academics</a></li>
        <li><a href="#notices">Notices</a></li>
        <li><a href="#facilities">Facilities</a></li>
        <li><a href="#location">Location</a></li>
        <li><a href="#admission" className="nav-cta">Apply Now</a></li>
      </ul>
    </nav>
  );
}