import { useEffect, useRef, useState } from 'react';

const notices = [
  { day: 14, mon: 'Apr', title: 'Class 10 Pre-Board Examination Schedule Released', desc: "Pre-board exams begin April 22nd. Collect admit cards from the admin office.", pill: 'Exam' },
  { day: 10, mon: 'Apr', title: 'Annual Science Exhibition — Registrations Open', desc: "All students Grade 6–12 can submit project proposals by April 18th.", pill: 'Event' },
  { day: 6, mon: 'Apr', title: 'Admissions Open for Academic Year 2025/26', desc: "Applications for Grade 1, 6, 9 and 11 are now being accepted.", pill: 'Admission' },
  { day: 1, mon: 'Apr', title: 'Parent-Teacher Meeting — Saturday, April 12th', desc: "PTM for Grades 7–10 from 10 AM to 1 PM. Attendance is mandatory.", pill: 'Meeting' },
];

function useScrollReveal(threshold = 0.15) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            e.target.classList.add('in');
          }
        });
      },
      { threshold }
    );
    if (ref.current) {
      ref.current.classList.add('reveal');
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

export default function Notices() {
  const [lRef, lInView] = useScrollReveal();
  const [rRef, rInView] = useScrollReveal();

  return (
    <section className="notices" id="notices">
      <div 
        ref={lRef} 
        className="notices-l"
        style={lInView ? {} : { opacity: 0, transform: 'translateY(26px)', transition: 'opacity 0.85s cubic-bezier(0.16,1,0.3,1), transform 0.85s cubic-bezier(0.16,1,0.3,1)' }}
      >
        <div className="eyebrow">Notice Board</div>
        <h2 className="section-title">
          Stay <span className="accent">informed,</span> stay ahead.
        </h2>
        <p style={{ color: 'var(--color-muted)', fontWeight: 300, fontSize: 14, lineHeight: 1.85, marginTop: 14, marginBottom: 28, fontFamily: 'var(--font-geist)', letterSpacing: '-0.01em' }}>
          Important announcements, exam schedules and school events — always up to date.
        </p>
        <a href="#" className="btn-outline">
          View All Notices
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      <div 
        ref={rRef} 
        className="notices-r"
        style={rInView ? {} : { opacity: 0, transform: 'translateY(26px)', transition: 'opacity 0.85s cubic-bezier(0.16,1,0.3,1), transform 0.85s cubic-bezier(0.16,1,0.3,1)', transitionDelay: '0.15s' }}
      >
        <ul className="notice-list">
          {notices.map((n, i) => (
            <li key={i} className="n-item">
              <div className="n-date">
                <div className="n-day">{n.day}</div>
                <div className="n-mon">{n.mon}</div>
              </div>
              <div className="n-body">
                <h4>{n.title}</h4>
                <p>{n.desc}</p>
                <span className="n-pill">{n.pill}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}