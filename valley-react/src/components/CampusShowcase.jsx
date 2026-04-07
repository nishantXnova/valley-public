import { ContainerScroll } from "./ui/container-scroll-animation";

const galleryImages = [
  {
    src: "https://api.valleypublic.edu.np/storage/images/valleypublic-high-school-photos-2024-27_1711956730.webp",
    alt: "Valley Public School Campus",
    label: "Main Campus",
  },
  {
    src: "https://api.valleypublic.edu.np/storage/images/2_1715508288.jpg",
    alt: "Classrooms",
    label: "Modern Classrooms",
  },
  {
    src: "https://api.valleypublic.edu.np/storage/images/3_1715508288.jpg",
    alt: "Science Labs",
    label: "Science Labs",
  },
  {
    src: "https://api.valleypublic.edu.np/storage/images/4_1715508288.jpg",
    alt: "Sports Grounds",
    label: "Sports & Activities",
  },
];

export default function CampusShowcase() {
  return (
    <section className="campus-showcase">
      <ContainerScroll
        titleComponent={
          <div className="campus-showcase-header">
            <div className="eyebrow" style={{ justifyContent: "center", color: "#a78bfa", marginBottom: "16px" }}>
              Campus Life
            </div>
            <h2 className="campus-showcase-title">
              Where <span className="campus-accent">excellence</span> lives.
            </h2>
            <p className="campus-showcase-sub">
              A world-class campus nestled in the heart of Budhanilkantha — built to inspire every learner.
            </p>
          </div>
        }
      >
        <div className="campus-grid">
          {galleryImages.map((img, i) => (
            <div key={i} className="campus-grid-item">
              <img
                src={img.src}
                alt={img.alt}
                className="campus-grid-img"
              />
              <div className="campus-grid-label">
                <span>{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </ContainerScroll>
    </section>
  );
}
