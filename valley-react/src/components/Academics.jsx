import { useEffect, useRef, useState } from 'react';

const programs = [
  { num: '01', title: 'Primary School', desc: 'Building strong foundations through inquiry-driven learning for our youngest students.', pill: 'Grade 1–5', img: 'https://api.valleypublic.edu.np/storage/images/valleypublic-high-school-photos-2024-27_1711956730.webp' },
  { num: '02', title: 'Middle School', desc: 'Bridging curiosity and discipline through specialised subjects and co-curricular activities.', pill: 'Grade 6–8', img: 'https://api.valleypublic.edu.np/storage/images/2_1715508288.jpg' },
  { num: '03', title: 'Secondary (SEE)', desc: 'Rigorous SEE exam preparation with dedicated subject faculty and regular assessments.', pill: 'Grade 9–10', img: 'https://api.valleypublic.edu.np/storage/images/3_1715508288.jpg' },
  { num: '04', title: 'Higher Secondary (+2)', desc: 'Science and Management streams designed to prepare students for university entrance exams.', pill: 'Grade 11–12', img: 'https://api.valleypublic.edu.np/storage/images/4_1715508288.jpg' },
];

export default function Academics() {
  const [cur, setCur] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const r = sectionRef.current.getBoundingClientRect();
      const total = sectionRef.current.offsetHeight - window.innerHeight;
      const prog = Math.max(0, Math.min(0.999, -r.top / total));
      setCur(Math.min(Math.floor(prog * programs.length), programs.length - 1));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="acad-wrap" id="academics" ref={sectionRef}>
      <div className="acad-sticky">
        <div className="acad-l">
          <div className="eyebrow">Academics</div>
          <h2 className="section-title">
            Programs built for <span className="accent">tomorrow.</span>
          </h2>
          <div className="acad-items">
            {programs.map((p, i) => (
              <div 
                key={i} 
                className={`acad-item ${i === cur ? 'on' : ''}`} 
                onMouseEnter={() => setCur(i)}
                style={{ transition: 'padding-left 0.3s' }}
              >
                <div className="acad-num">{p.num}</div>
                <h3>{p.title}</h3>
                <p style={{ 
                  maxHeight: i === cur ? '90px' : 0, 
                  opacity: i === cur ? 1 : 0, 
                  overflow: 'hidden',
                  transition: 'max-height 0.42s ease, opacity 0.35s' 
                }}>{p.desc}</p>
                <span className="acad-pill" style={{ opacity: i === cur ? 1 : 0, transition: 'opacity 0.3s' }}>{p.pill}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="acad-r">
          {programs.map((p, i) => (
            <div 
              key={i} 
              className={`acad-layer ${i === cur ? 'on' : ''}`} 
              id={`al${i}`}
              style={{ 
                opacity: i === cur ? 1 : 0, 
                transition: 'opacity 0.7s ease' 
              }}
            >
              <img src={p.img} alt={p.title} />
              <div className="acad-overlay" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}