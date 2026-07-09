import "./Services.css";

const SERVICES = [
  {
    no: "01",
    title: "Strategic Communication",
    desc: "Messaging, positioning and narrative frameworks built for organisations that need to be understood correctly, not just noticed.",
    tags: ["Messaging", "Brand narrative", "Crisis comms"],
  },
  {
    no: "02",
    title: "Public Affairs",
    desc: "Research-led engagement that connects institutions with policy, media and public conversation in modern India.",
    tags: ["Policy research", "Stakeholder mapping", "Advocacy"],
  },
  {
    no: "03",
    title: "Media",
    desc: "Content, design and digital campaigns that carry a narrative from a strategy deck to a screen people actually stop on.",
    tags: ["Content", "Design", "Digital campaigns"],
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <span className="eyebrow">What we do</span>
        <h2 className="services__title">Three disciplines, one narrative</h2>

        <div className="services__grid">
          {SERVICES.map((s) => (
            <div className="services__card" key={s.no}>
              <span className="services__no">{s.no}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="services__tags">
                {s.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
