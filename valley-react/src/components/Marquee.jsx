const items = [
  'Academic Excellence',
  'Founded 1993',
  'Budhanilkantha, Kathmandu',
  'Let the light of education be spread',
  '2,400+ Students',
  '98% Pass Rate',
];

export default function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mq-item">
            {item}
            <div className="mq-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}