import "./Positions.css";

const POSITIONS = [
  { icon: "</>", title: "Web Development Intern", desc: "Build modern, responsive and high-performing websites." },
  { icon: "✎", title: "UI/UX & Graphic Design Intern", desc: "Design engaging user experiences and stunning visual identity." },
  { icon: "✍", title: "Content Writing & SEO Intern", desc: "Write, research and optimise content that drives impact." },
  { icon: "📣", title: "Digital Media Intern", desc: "Manage campaigns, create content and support digital presence." },
  { icon: "📊", title: "Research & Analytics Intern", desc: "Analyse data, conduct research and support strategic decisions." },
];

const WORK_ON = [
  "Company website development",
  "Digital branding projects",
  "Media & communication campaigns",
  "Research & strategic communication",
  "Content creation & design",
  "SEO & digital presence building",
];

const BENEFITS = [
  "Practical industry exposure",
  "Certificate of internship",
  "Letter of recommendation (performance-based)",
  "Opportunity to work on real projects",
  "Potential long-term association",
];

export default function Positions() {
  return (
    <section className="positions" id="positions">
      <div className="wrap">
        <span className="eyebrow">Open internship positions</span>
        <h2 className="positions__title">Gain hands-on experience that counts</h2>

        <div className="positions__grid">
          {POSITIONS.map((p) => (
            <div className="positions__card" key={p.title}>
              <span className="positions__icon">{p.icon}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="positions__lists">
          <div className="positions__list">
            <h4>What you'll work on</h4>
            <ul>
              {WORK_ON.map((w) => <li key={w}>{w}</li>)}
            </ul>
          </div>
          <div className="positions__list">
            <h4>Internship benefits</h4>
            <ul>
              {BENEFITS.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
          <div className="positions__list positions__list--eligibility">
            <h4>Eligibility</h4>
            <p>Students from a CS/IT background with a passion for technology, creativity and strategy.</p>
            <div className="positions__meta">
              <span><strong>Mode:</strong> Remote / Hybrid</span>
              <span><strong>Duration:</strong> 2–3 months</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
