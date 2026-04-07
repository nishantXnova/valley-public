import { useState, useEffect, useRef } from 'react';

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const hatRef = useRef(null);
  const ringRef = useRef(null);
  const mxRef = useRef(-200);
  const myRef = useRef(-200);
  const rxRef = useRef(-200);
  const ryRef = useRef(-200);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mxRef.current = e.clientX;
      myRef.current = e.clientY;
      if (!visible) {
        setVisible(true);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let animationId;
    const tick = () => {
      if (hatRef.current) {
        hatRef.current.style.left = mxRef.current + 'px';
        hatRef.current.style.top = myRef.current + 'px';
      }
      rxRef.current += (mxRef.current - rxRef.current) * 0.1;
      ryRef.current += (myRef.current - ryRef.current) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.left = rxRef.current + 'px';
        ringRef.current.style.top = ryRef.current + 'px';
      }
      animationId = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [visible]);

  return (
    <>
      <div
        ref={hatRef}
        className={`cur-hat ${visible ? 'visible' : ''}`}
        style={{
          position: 'fixed',
          top: -100,
          left: -100,
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      >
        <svg viewBox="0 0 52 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="26,4 50,17 26,30 2,17" fill="#3D1FA3" />
          <polygon points="26,30 50,17 50,24 26,37" fill="#1a0a5e" />
          <polygon points="26,30 2,17 2,24 26,37" fill="#2d1490" />
          <polygon points="26,4 50,17 26,30 2,17" fill="none" stroke="rgba(196,181,253,0.3)" strokeWidth="1" />
          <rect x="23" y="29" width="6" height="10" rx="3" fill="#5b35d5" />
          <circle cx="26" cy="42" r="4" fill="#a78bfa" />
          <circle cx="25" cy="41" r="1.5" fill="rgba(255,255,255,0.35)" />
          <line x1="42" y1="17" x2="42" y2="32" stroke="#5b35d5" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="42" cy="33.5" r="3.2" fill="#c4b5fd" />
          <circle cx="41" cy="32.8" r="1.1" fill="rgba(255,255,255,0.5)" />
        </svg>
      </div>
      <div
        ref={ringRef}
        className={`cur-ring ${visible ? 'visible' : ''}`}
        style={{
          position: 'fixed',
          top: -100,
          left: -100,
          pointerEvents: 'none',
          zIndex: 9998,
          width: 50,
          height: 50,
          border: '1.5px solid rgba(61,31,163,0.35)',
          borderRadius: '50%',
        }}
      />
    </>
  );
}