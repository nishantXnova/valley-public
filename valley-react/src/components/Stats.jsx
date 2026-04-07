const stats = [
  { num: '1993', sup: '.', label: 'Established' },
  { num: '30', sup: '+', label: 'Years of Excellence' },
  { num: '2,400', sup: '+', label: 'Students Enrolled' },
  { num: '98', sup: '%', label: 'Pass Rate' },
];

export default function Stats() {
  return (
    <section className="stats">
      {stats.map((stat, i) => (
        <div key={i} className="stat">
          <div className="stat-num">
            {stat.num}
            <sup>{stat.sup}</sup>
          </div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </section>
  );
}