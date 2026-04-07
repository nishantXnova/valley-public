import { useState } from 'react';

const partners = [
  { 
    name: 'Bhadrakali English Medium School', 
    type: 'Sister School', 
    role: 'Shared management, younger grades',
    start: '~2000s', 
    reliability: 'High',
    image: 'https://i.ibb.co/5hv8SSPw/logo.png'
  },
  { 
    name: 'Valley Public Kindergarten', 
    type: 'Sister Institution', 
    role: 'Pre-school education on same campus',
    start: 'Unknown', 
    reliability: 'High',
    image: 'https://i.ibb.co/5g8ZwrFd/420949306-841314037798090-8824189275647336974-n.jpg'
  },
  { 
    name: 'Rotary Club of Himalayan Gurkhas', 
    type: 'NGO Partner', 
    role: 'Sponsors Interact Club & community projects',
    start: '~2018', 
    reliability: 'High',
    image: 'https://i.ibb.co/fzHZY1rP/rotary-club-logo.png'
  },
  { 
    name: 'Cambridge Assessment English', 
    type: 'International Partner', 
    role: 'English certification & exam preparation',
    start: '2023', 
    reliability: 'Medium',
    image: 'https://i.ibb.co/5hvhY9dj/cambridge-assessment-english.jpg'
  },
  { 
    name: 'Qualigiate Global Education Tutors', 
    type: 'NGO Partner', 
    role: 'VolFest 2026 co-host, student workshops',
    start: '2026', 
    reliability: 'Low',
    image: 'https://i.ibb.co/5hGDKvhr/logo-second-DG9d-DLue.png'
  },
  { 
    name: 'Sunaulo Sapana Nepal Foundation', 
    type: 'NGO Partner', 
    role: 'Social support & disability awareness',
    start: 'Unknown', 
    reliability: 'Low',
    image: 'https://i.ibb.co/21kjH82X/OIP.webp'
  },
  { 
    name: 'After School Nepal', 
    type: 'NGO Partner', 
    role: 'Supplemental education programs',
    start: '2021-2023', 
    reliability: 'Low',
    image: 'https://i.ibb.co/7dSHYrQK/logos-bg-remove.png'
  },
  { 
    name: 'C. E. Foundation Nepal', 
    type: 'NGO Partner', 
    role: 'Academic workshops & Math training',
    start: '~2022', 
    reliability: 'Low',
    image: 'https://i.ibb.co/qLcchPJQ/cef-logo.png'
  },
];

const allCards = [...partners, ...partners, ...partners];

export default function Partners() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="partners" id="partners">
      <div className="partners-head">
        <div className="eyebrow">Partners & Collaborators</div>
        <h2 className="partners-title">
          Trusted <span className="accent">partners</span> in education.
        </h2>
      </div>

      <div className="carousel-container">
        <div 
          className={`carousel-track-3d ${isPaused ? 'paused' : ''}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {allCards.map((p, i) => (
            <div key={i} className="partner-card">
              <div className="partner-logo">
                <img src={p.image} alt={p.name} />
              </div>
              <div className="partner-info">
                <div className="partner-name">{p.name}</div>
                <div className="partner-type">{p.type}</div>
                <div className="partner-role">{p.role}</div>
                <div className="partner-meta">
                  <span className="partner-start">Since {p.start}</span>
                  <span className={`reliability-badge ${p.reliability.toLowerCase()}`}>
                    {p.reliability}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}