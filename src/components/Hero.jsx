import "./Hero.css";

const PILLARS = [
  { label: "Learn", icon: "◎" },
  { label: "Create", icon: "✦" },
  { label: "Impact", icon: "📣" },
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero__row">
        <div className="hero__copy">
          <span className="eyebrow eyebrow--light">Strategic Communication · Public Affairs · Media</span>
          <h1 className="hero__title">
            Narratives for
            <br />
            <span className="hero__title-accent">Modern India.</span>
          </h1>
          <p className="hero__sub">
            Voxinary Media Ventures LLP helps organisations shape public conversation —
            through strategic communication, public affairs and media that moves people to act.
          </p>
          <div className="hero__actions">
            <a href="#positions" className="btn btn-primary">Explore Internships</a>
            <a href="#contact" className="btn btn-ghost-light">Get in touch</a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__card">
            <div className="hero__card-top">Build Narratives. Create Impact.</div>
            <div className="hero__pillars">
              {PILLARS.map((p) => (
                <div className="hero__pillar" key={p.label}>
                  <span className="hero__pillar-icon">{p.icon}</span>
                  <span>{p.label}</span>
                </div>
              ))}
            </div>
            <div className="hero__card-bottom">
              <span>Registered Office</span>
              <span>Gaurav Nagar, Chopan, Sonbhadra, Robertsganj, UP (231205)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
