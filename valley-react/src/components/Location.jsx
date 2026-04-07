import { useEffect, useRef, useState } from 'react';

export default function Location() {
  const [lInView, setLInView] = useState(false);
  const [rInView, setRInView] = useState(false);
  const lRef = useRef(null);
  const rRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            if (e.target === lRef.current) setLInView(true);
            if (e.target === rRef.current) setRInView(true);
            e.target.classList.add('in');
          }
        });
      },
      { threshold: 0.15 }
    );
    if (lRef.current) {
      lRef.current.classList.add('reveal');
      observer.observe(lRef.current);
    }
    if (rRef.current) {
      rRef.current.classList.add('reveal');
      observer.observe(rRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="location" id="location">
      <div 
        ref={lRef} 
        className="location-l"
        style={lInView ? {} : { opacity: 0, transform: 'translateY(28px)', transition: 'opacity 0.85s cubic-bezier(0.16,1,0.3,1), transform 0.85s cubic-bezier(0.16,1,0.3,1)' }}
      >
        <div className="eyebrow">Find Us</div>
        <h2 className="section-title" style={{ color: 'var(--color-ink)' }}>
          Visit us in <span className="accent">Budhanilkantha.</span>
        </h2>
        <p style={{ fontFamily: 'var(--font-geist)', fontSize: 14.5, fontWeight: 300, color: 'var(--color-muted)', lineHeight: 1.85, letterSpacing: '-0.01em', marginBottom: 0 }}>
          Nestled at the foothills of the Shivapuri National Park, our campus is easily accessible from central Kathmandu.
        </p>
        <div className="contact-cards">
          <div className="contact-card">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <div className="contact-label">Address</div>
              <div className="contact-value">Budhanilkantha, Kathmandu</div>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6 6l1.27-.85a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z" />
              </svg>
            </div>
            <div>
              <div className="contact-label">Phone</div>
              <div className="contact-value">+977-01-XXXXXXX</div>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <div className="contact-label">Email</div>
              <div className="contact-value">info@valleypublic.edu.np</div>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <div className="contact-label">School Hours</div>
              <div className="contact-value">Sun – Fri, 10 AM – 4 PM</div>
            </div>
          </div>
        </div>
      </div>
      <div 
        ref={rRef} 
        className="location-r"
        style={rInView ? {} : { opacity: 0, transform: 'translateY(28px)', transition: 'opacity 0.85s cubic-bezier(0.16,1,0.3,1), transform 0.85s cubic-bezier(0.16,1,0.3,1)', transitionDelay: '0.15s' }}
      >
        <div className="map-wrap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.941550074239!2d85.35012851070152!3d27.749948776058783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1955adddbe11%3A0x1b2d462b9f11ae1a!2sValley%20Public%20High%20School!5e0!3m2!1sen!2snp!4v1775458363884!5m2!1sen!2snp"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}