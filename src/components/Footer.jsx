import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__row">
        <div className="footer__brand">
          <span className="footer__logo">VOXINARY</span>
          <span className="footer__legal">Voxinary Media Ventures LLP</span>
        </div>
        <nav className="footer__links">
          <a href="#services">Services</a>
          <a href="#positions">Internships</a>
          <a href="#process">How to Apply</a>
          <a href="#contact">Contact</a>
        </nav>
        <span className="footer__copy">© {new Date().getFullYear()} Voxinary Media Ventures LLP · Registered Office: Gaurav Nagar, Chopan, Sonbhadra, Robertsganj, UP</span>
      </div>
    </footer>
  );
}
