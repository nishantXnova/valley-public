export default function Footer() {
  return (
    <footer>
      <div className="foot-grid">
        <div className="foot-brand">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div className="nav-mark" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.3)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <span className="foot-brand-name">Valley Public High School</span>
          </div>
          <p>Let the light of education be spread. Nurturing leaders since 1993 in Budhanilkantha, Kathmandu.</p>
        </div>
        <div className="foot-col">
          <h4>School</h4>
          <a href="#">About Us</a>
          <a href="#">Academics</a>
          <a href="#">Admission</a>
          <a href="#">Facilities</a>
        </div>
        <div className="foot-col">
          <h4>Resources</h4>
          <a href="#">Notice Board</a>
          <a href="#">Downloads</a>
          <a href="#">Results</a>
          <a href="#">Gallery</a>
        </div>
        <div className="foot-col">
          <h4>Contact</h4>
          <a href="#">Budhanilkantha, Kathmandu</a>
          <a href="#">+977-01-XXXXXXX</a>
          <a href="#">info@valleypublic.edu.np</a>
        </div>
      </div>
      <div className="foot-bottom">
        <span>© 2026 Valley Public High School. All rights reserved.</span>
        <span>
          Designed by <a href="#">Nishant</a>
        </span>
      </div>
    </footer>
  );
}