import { useRef, useEffect } from 'react';

const facilities = [
  { icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>, label: 'Library' },
  { icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6M9 3v9l-4.5 7.5A1 1 0 0 0 5.4 21h13.2a1 1 0 0 0 .9-1.5L15 12V3" /><path d="M8 15h8" /></svg>, label: 'Science Lab' },
  { icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>, label: 'IT Centre' },
  { icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h4M18 12h4M12 2v4M12 18v4" /></svg>, label: 'Sports Ground' },
  { icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.06 11.9l8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" /><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1 1 2.44.5 3.5.5 1.65 0 3-1.35 3-3.02 0-1.65-1.35-3.02-3-3.02" /></svg>, label: 'Art Studio' },
  { icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>, label: 'Hostel' },
];

function FacilityCard({ icon, label, delay = 0 }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setVisible(true), delay * 80);
            e.target.classList.add('in');
          }
        });
      },
      { threshold: 0.15 }
    );
    if (cardRef.current) {
      cardRef.current.classList.add('reveal');
      observer.observe(cardRef.current);
    }
    return () => observer.disconnect();
  }, [delay]);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `translateY(-8px) rotateY(${x * 16}deg) rotateX(${-y * 16}deg)`;
    card.style.transformStyle = 'preserve-3d';
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = '';
    card.style.transition = 'transform 0.6s cubic-bezier(0.23,1,0.32,1), background 0.3s, border-color 0.3s';
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transition = 'transform 0.15s, background 0.3s, border-color 0.3s';
  };

  return (
    <div 
      ref={cardRef} 
      className={`fac-card ${visible ? 'in' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{ 
        opacity: visible ? 1 : 0, 
        transform: visible ? 'translateY(0)' : 'translateY(26px)',
        transition: `opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1) ${delay * 0.04}s`,
        transitionDelay: `${delay * 0.04}s`
      }}
    >
      <div className="fac-icon">{icon}</div>
      <div className="fac-label">{label}</div>
    </div>
  );
}

import { useState } from 'react';

export default function Facilities() {
  return (
    <section className="facilities" id="facilities">
      <div className="fac-head">
        <div className="eyebrow">Facilities</div>
        <h2 className="fac-title">
          Everything a student needs <span className="accent">to thrive.</span>
        </h2>
        <p className="fac-sub">World-class infrastructure right in the heart of Kathmandu.</p>
      </div>
      <div className="fac-grid">
        {facilities.map((f, i) => (
          <FacilityCard key={i} icon={f.icon} label={f.label} delay={i} />
        ))}
      </div>
    </section>
  );
}