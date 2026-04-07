import { useEffect, useState } from 'react';

export default function Hero() {
  const [animated, setAnimated] = useState({ badge: false, h1: false, sub: false, btns: false, scroll: false });

  useEffect(() => {
    const delays = { badge: 200, h1: 320, sub: 440, btns: 560, scroll: 750 };
    const t1 = setTimeout(() => setAnimated(a => ({ ...a, badge: true })), delays.badge);
    const t2 = setTimeout(() => setAnimated(a => ({ ...a, h1: true })), delays.h1);
    const t3 = setTimeout(() => setAnimated(a => ({ ...a, sub: true })), delays.sub);
    const t4 = setTimeout(() => setAnimated(a => ({ ...a, btns: true })), delays.btns);
    const t5 = setTimeout(() => setAnimated(a => ({ ...a, scroll: true })), delays.scroll);
    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-noise" />
      <div className="hero-grid" />
      <div className="hero-glow g1" />
      <div className="hero-glow g2" />
      <div className="hero-content">
        <div className={`hero-badge ${animated.badge ? 'in' : ''}`} style={animated.badge ? {} : { opacity: 0, transform: 'translateY(26px)' }}>
          <div className="badge-dot">
            <div className="badge-dot-inner" />
          </div>
          Admissions Open — 2025/26
        </div>
        <h1 className={animated.h1 ? 'in' : ''} style={animated.h1 ? {} : { opacity: 0, transform: 'translateY(26px)' }}>
          Let the <span className="accent">light of education</span> be spread.
        </h1>
        <p className={`hero-sub ${animated.sub ? 'in' : ''}`} style={animated.sub ? {} : { opacity: 0, transform: 'translateY(16px)' }}>
          Valley Public High School, Budhanilkantha — nurturing academically proficient and empathetic future leaders since 1993.
        </p>
        <div className={`hero-btns ${animated.btns ? 'in' : ''}`} style={animated.btns ? {} : { opacity: 0, transform: 'translateY(16px)' }}>
          <a href="#admission" className="btn-solid">
            Apply for Admission
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#about" className="btn-text">
            Explore the school
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* New Visual Enhancement */}
      <div className="hero-visual">
        <div className="liquid-wrap">
          <div className="liquid-blob b1" />
          <div className="liquid-blob b2" />
          <div className="liquid-blob b3" />
        </div>
        
        <div className="visual-stage">
          <div className="building-frame">
            <img src="/building.png" alt="Valley Public School Building" className="hero-building" />
            <div className="glass-shine" />
          </div>

          {/* Floating Metric Cards */}
          <div className="stat-card sc-1">
            <div className="sc-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div className="sc-info">
              <div className="sc-val">2,000+</div>
              <div className="sc-lab">Students</div>
            </div>
          </div>

          <div className="stat-card sc-2">
            <div className="sc-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <div className="sc-info">
              <div className="sc-val">98%</div>
              <div className="sc-lab">Pass Rate</div>
            </div>
          </div>

          <div className="info-pill ip-1">
            <span className="pill-dot" />
            Est. 1993
          </div>

          {/* Detail Card */}
          <div className="detail-card">
            <div className="dc-row">
              <span className="dc-lab">Programs</span>
              <span className="dc-val">Nursery – XII</span>
            </div>
            <div className="dc-row">
              <span className="dc-lab">Community</span>
              <span className="dc-val">14,000+</span>
            </div>
            <div className="dc-row">
              <span className="dc-lab">Reach</span>
              <span className="dc-val">Global</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`hero-scroll ${animated.scroll ? 'in' : ''}`} style={animated.scroll ? {} : { opacity: 0 }}>
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}