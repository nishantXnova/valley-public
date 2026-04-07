import { useEffect, useRef, useState } from 'react';

export default function CTA() {
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
      { threshold: 0.15 }
    );
    if (ref.current) {
      ref.current.classList.add('reveal');
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="cta" id="admission" ref={ref} style={inView ? {} : { opacity: 0, transform: 'translateY(32px)', transition: 'opacity 0.85s cubic-bezier(0.16,1,0.3,1), transform 0.85s cubic-bezier(0.16,1,0.3,1)' }}>
      <div className="eyebrow" style={{ justifyContent: 'center' }}>Join Our School</div>
      <h2 className="cta-headline">
        Ready to begin your <span className="accent">journey?</span>
      </h2>
      <p className="cta-sub">
        Applications for the 2025/26 academic year are open. Limited seats available across all grades.
      </p>
      <a href="#" className="btn-primary">
        Apply for Admission
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </section>
  );
}