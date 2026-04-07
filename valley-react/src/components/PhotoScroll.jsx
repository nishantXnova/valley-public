import { useEffect, useState, useRef } from 'react';

const photos = [
  { id: 0, src: 'https://api.valleypublic.edu.np/storage/images/1_1715497593.jpg', eyebrow: 'Welcome', title: "Where tradition meets innovation in the heart of Kathmandu." },
  { id: 1, src: 'https://api.valleypublic.edu.np/storage/images/2_1715508288.jpg', eyebrow: 'Academic Excellence', title: "Students advancing to the most prestigious institutions in Nepal and beyond." },
  { id: 2, src: 'https://api.valleypublic.edu.np/storage/images/3_1715508288.jpg', eyebrow: 'Modern Facilities', title: "State-of-the-art IT centre, science labs, and extensive library resources." },
  { id: 3, src: 'https://api.valleypublic.edu.np/storage/images/4_1715508288.jpg', eyebrow: 'Community', title: "A diverse, caring community built on mutual respect and shared ambition." },
  { id: 4, src: 'https://api.valleypublic.edu.np/storage/images/5_1715508288.jpg', eyebrow: 'Our Campus', title: "Nestled in Budhanilkantha, at the foot of the Himalayas." },
];

export default function PhotoScroll() {
  const [cur, setCur] = useState(0);
  const prevRef = useRef(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const r = sectionRef.current.getBoundingClientRect();
      const total = sectionRef.current.offsetHeight - window.innerHeight;
      const prog = Math.max(0, Math.min(1, -r.top / total));
      const idx = Math.min(Math.floor(prog * photos.length), photos.length - 1);
      if (idx !== cur) {
        prevRef.current = cur;
        setCur(idx);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [cur]);

  const goSlide = (idx) => {
    if (idx === cur) return;
    prevRef.current = cur;
    setCur(idx);
  };

  return (
    <section className="photo-scroll" ref={sectionRef} id="photoScroll">
      <div className="photo-sticky">
        <div className="photo-wrap">
          {photos.map((photo, i) => {
            const isActive = i === cur;
            const isPrev = i === prevRef.current;
            return (
              <div 
                key={photo.id} 
                className={`photo-slide ${isActive ? 'active' : ''}`} 
                id={`s${i}`}
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive 
                    ? 'translateZ(0) rotateY(0deg)' 
                    : isPrev 
                      ? 'translateZ(-180px) rotateY(-12deg)' 
                      : 'translateZ(-450px) rotateY(22deg)',
                  transition: isActive 
                    ? 'opacity 0.95s cubic-bezier(0.16,1,0.3,1), transform 1.1s cubic-bezier(0.16,1,0.3,1)' 
                    : 'opacity 0.75s ease, transform 0.85s ease',
                }}
              >
                <div className="photo-frame">
                  <img 
                    src={photo.src} 
                    alt="Valley Public School" 
                    loading={i === 0 ? 'eager' : 'lazy'}
                    style={{
                      transform: isActive ? 'scale(1)' : 'scale(1.07)',
                      transition: 'transform 10s ease',
                    }}
                  />
                  <div className="photo-veil" />
                  <div className="photo-cap">
                    <div className="cap-eyebrow">{photo.eyebrow}</div>
                    <div className="cap-title">{photo.title}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="photo-pips">
          {photos.map((_, i) => (
            <div 
              key={i} 
              className={`pip ${i === cur ? 'on' : ''}`} 
              onClick={() => goSlide(i)} 
              data-i={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}