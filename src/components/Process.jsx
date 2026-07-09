import "./Process.css";

const STEPS = [
  { no: "01", title: "Register", desc: "Register on our internship portal using your Scholar Number." },
  { no: "02", title: "Assignment", desc: "Assignment(s) will be posted by our team on the portal." },
  { no: "03", title: "Selection", desc: "Selection is based on your performance in the assignment(s)." },
];

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="wrap">
        <span className="eyebrow">Important updates</span>
        <h2 className="process__title">How the selection works</h2>

        <div className="process__track">
          <div className="process__line" />
          {STEPS.map((s) => (
            <div className="process__step" key={s.no}>
              <span className="process__dot">{s.no}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
