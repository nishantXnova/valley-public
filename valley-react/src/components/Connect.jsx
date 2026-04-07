export default function Connect() {
  return (
    <section className="connect" id="connect" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Liquid Mesh Background */}
      <div className="liquid-mesh-bg">
        <div className="liquid-blob blob-1" />
        <div className="liquid-blob blob-2" />
      </div>

      <div className="connect-head">
        <div className="eyebrow">Stay Connected</div>
        <h2 className="connect-title">
          Your school, in<br /><span className="connect-accent">your pocket.</span>
        </h2>
      </div>

      <div style={{
        position: 'relative',
        maxWidth: '750px',
        margin: '0 auto',
        paddingTop: '90px',
        paddingBottom: '30px'
      }}>

        {/* Glass card with Trust Elements */}
        <div className="glass-panel liquid-shimmer" style={{
          borderRadius: '24px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '40px 44px',
          gap: '32px',
          overflow: 'visible',
          position: 'relative',
          willChange: 'transform'
        }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h2 style={{ fontSize: '34px', fontWeight: 600, lineHeight: 1.2, color: '#fff', margin: 0 }}>
              Your school, in<br />your pocket.
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
              <div className="trust-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                2,000+ Students
              </div>
              <div className="trust-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                Est. 1993 (2050 BS)
              </div>
              <div className="trust-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Kathmandu
              </div>
              <div className="trust-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                1k+ Downloads
              </div>
            </div>
          </div>

          <img
            src="https://i.ibb.co/0jWb4JFB/qr-code-2-1.png"
            alt="QR Code"
            style={{
              width: '110px',
              height: '110px',
              objectFit: 'contain',
              flexShrink: 0,
              position: 'relative',
              zIndex: 2,
              filter: 'invert(1) brightness(2)'
            }}
          />

          {/* Google Play Badge */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center', flexShrink: 0 }}>
            <a 
              href="https://play.google.com/store/apps/details?id=com.ingrails.valley_public_school&hl=en-US" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                transition: 'transform 0.3s ease',
                display: 'block'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img
                src="/googleplay.png"
                alt="Get it on Google Play"
                style={{
                  width: '180px',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </a>
          </div>
        </div>

      </div>

      <div className="connect-links">
        <a href="https://x.com/valleypublicnp" target="_blank" rel="noopener noreferrer" className="connect-link glass-link">
          <div className="link-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>
          <div className="link-info">
            <span className="link-label">Twitter / X</span>
            <span className="link-url">@valleypublicnp</span>
          </div>
          <svg className="link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        <a href="https://instagram.com/valleypublicschool" target="_blank" rel="noopener noreferrer" className="connect-link glass-link">
          <div className="link-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </div>
          <div className="link-info">
            <span className="link-label">Instagram</span>
            <span className="link-url">@valleypublicschool</span>
          </div>
          <svg className="link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        <a href="https://facebook.com/valleypublicnp" target="_blank" rel="noopener noreferrer" className="connect-link glass-link">
          <div className="link-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </div>
          <div className="link-info">
            <span className="link-label">Facebook</span>
            <span className="link-url">@valleypublicnp</span>
          </div>
          <svg className="link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        <a href="https://linkedin.com/school/valley-public-school" target="_blank" rel="noopener noreferrer" className="connect-link glass-link">
          <div className="link-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </div>
          <div className="link-info">
            <span className="link-label">LinkedIn</span>
            <span className="link-url">Valley Public School</span>
          </div>
          <svg className="link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}