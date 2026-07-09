import { useEffect, useState } from "react";
import "./Nav.css";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#positions", label: "Internships" },
  { href: "#process", label: "How to Apply" },
  { href: "#contact", label: "Contact" },
];

function WingMark() {
  return (
    <svg viewBox="0 0 100 100" className="nav__mark" aria-hidden="true">
      <path d="M20 68 L50 26 L58 40 L38 68 Z" fill="#F4801F" />
      <path d="M46 68 L72 30 L80 44 L58 68 Z" fill="#0B1F3D" opacity="0.85" />
    </svg>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="wrap nav__row">
        <a href="#top" className="nav__logo">
          <WingMark />
          <span className="nav__logo-text">
            VOXINARY
            <small>Narratives for Modern India</small>
          </span>
        </a>

        <nav className="nav__links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <a href="#positions" className="btn btn-primary nav__cta">View Internships</a>

        <button
          className="nav__burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className="nav__mobile">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#positions" className="btn btn-primary" onClick={() => setOpen(false)}>
            View Internships
          </a>
        </div>
      )}
    </header>
  );
}
