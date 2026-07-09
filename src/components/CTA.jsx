import { useState } from "react";
import "./CTA.css";

export default function CTA() {
  const [status, setStatus] = useState("idle");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sent");
  }

  return (
    <section className="cta" id="contact">
      <div className="wrap cta__panel">
        <div className="cta__copy">
          <span className="eyebrow eyebrow--light">Get in touch</span>
          <h2 className="cta__title">Ready to build your narrative?</h2>
          <p className="cta__sub">
            Reach out for internship queries, project enquiries, or a conversation about
            your next campaign.
          </p>
          <div className="cta__contact">
            <a href="https://www.voxinary.com" target="_blank" rel="noreferrer">www.voxinary.com</a>
            <span>Gaurav Nagar, Chopan, Sonbhadra, Robertsganj, UP – 231205</span>
          </div>
        </div>

        <form className="cta__form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@college.edu" required />
          </label>
          <label>
            Message
            <textarea name="brief" rows={4} placeholder="Tell us what you're reaching out about" required />
          </label>
          <button type="submit" className="btn btn-primary">
            {status === "sent" ? "Message sent" : "Send message"}
          </button>
          {status === "sent" && (
            <p className="cta__confirm">Thanks — we'll be in touch shortly.</p>
          )}
        </form>
      </div>
    </section>
  );
}
