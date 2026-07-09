import "./LogoStrip.css";

const PILLARS = ["Strategic Communication", "Public Affairs", "Media", "Digital Campaigns", "Research & Analytics"];

export default function LogoStrip() {
  return (
    <section className="logostrip">
      <div className="wrap logostrip__row">
        <span className="logostrip__label">What we work across</span>
        <div className="logostrip__names">
          {PILLARS.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
