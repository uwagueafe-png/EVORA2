import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSubmitting(true);
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("http://localhost:3000/contactMessages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      if (!response.ok) throw new Error("Message could not be sent.");
      setSubmitted(true);
      form.reset();
    } catch {
      setError("We could not send your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-intro">
        <p className="contact-label">GET IN TOUCH</p>
        <h1>We are here to help.</h1>
        <p>
          Have a question about a course, live session, or learning path?
          Send us a message and the Evora team will get back to you.
        </p>
      </section>

      <section className="contact-layout">
        <div className="contact-info">
          <div>
            <span className="contact-eyebrow">EMAIL</span>
            <h2>Evora.edu@gmail.com</h2>
            <p>For course questions, support, and partnership enquiries.</p>
          </div>
          <div>
            <span className="contact-eyebrow">RESPONSE TIME</span>
            <h2>Within 2 school days</h2>
            <p>We are available Monday to Friday, 9:00 AM to 5:00 PM WAT.</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <label>
              Name
              <input type="text" name="name" required autoComplete="name" />
            </label>
            <label>
              Email
              <input type="email" name="email" required autoComplete="email" />
            </label>
          </div>

          <label>
            How can we help?
            <select name="topic" defaultValue="course">
              <option value="course">Course question</option>
              <option value="session">Live session</option>
              <option value="account">Account support</option>
              <option value="partnership">Partnership</option>
            </select>
          </label>

          <label>
            Message
            <textarea name="message" rows="6" required />
          </label>

          {submitted && (
            <p className="contact-success" role="status">
              Thanks for reaching out. We will be in touch soon.
            </p>
          )}

          {error && <p className="contact-error" role="alert">{error}</p>}

          <button type="submit" className="contact-submit" disabled={submitting}>
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
