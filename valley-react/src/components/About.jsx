import { useEffect, useRef, useState } from 'react';

export default function About() {
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
    <section className="about" id="about" ref={ref} style={inView ? {} : { opacity: 0, transform: 'translateY(32px)', transition: 'opacity 0.85s cubic-bezier(0.16,1,0.3,1), transform 0.85s cubic-bezier(0.16,1,0.3,1)' }}>
      <div className="about-l">
        <div className="eyebrow">About Valley Public</div>
        <h2 className="about-headline">
          Nurturing <span className="accent">academically proficient</span> and empathetic future leaders.
        </h2>
        <p className="about-quote">
          "We respect the dignity and merit of each child — believing all children can be nurtured to achieve their full potential within an environment that is both caring and challenging."
        </p>
        <p className="about-body">
          Founded in 1993 by Principal Krishna Prasad Adhikari, Valley Public High School embodies the motto "let the light of education be spread." Our faculty employs modern teaching methods, fostering academic excellence.
        </p>
        <p className="about-body">
          The school boasts top-notch facilities including an IT centre, a well-equipped science laboratory, and extensive library resources.
        </p>
        <a href="#" className="btn-outline">
          Our Full Story
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      <div className="about-r">
        <div className="about-img-wrap">
          <img src="https://api.valleypublic.edu.np/storage/images/valleypublic-high-school-photos-2024-16_1711955521.webp" alt="Valley Public School" />
          <div className="about-img-tag">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Budhanilkantha, Kathmandu
          </div>
        </div>
      </div>
    </section>
  );
}