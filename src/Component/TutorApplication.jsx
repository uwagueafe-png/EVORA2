import { useState } from "react";
import "./TutorApplication.css";

function TutorApplication() {
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
      const response = await fetch("http://localhost:3000/tutorApplications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      if (!response.ok) throw new Error("Application could not be sent.");
      setSubmitted(true);
      form.reset();
    } catch {
      setError("We could not submit your application. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="tutor-application-page">
      <section className="tutor-application-intro">
        <p className="tutor-application-label">TEACH WITH EVORA</p>
        <h1>Help the next generation build with technology.</h1>
        <p>
          We are looking for patient, curious mentors who can make technology
          feel practical, welcoming, and exciting for young learners.
        </p>
      </section>

      <section className="tutor-application-layout">
        <div className="tutor-application-details">
          <h2>What we look for</h2>
          <ul>
            <li>Strong knowledge of the subject you want to teach</li>
            <li>Clear communication and patience with young learners</li>
            <li>A practical, encouraging approach to teaching</li>
          </ul>
          <p>
            Tell us about your experience and the kind of learning experience
            you would like to create with Evora.
          </p>
        </div>

        <form className="tutor-application-form" onSubmit={handleSubmit}>
          <div className="tutor-form-row">
            <label>
              Full name
              <input name="name" type="text" required autoComplete="name" />
            </label>
            <label>
              Email
              <input name="email" type="email" required autoComplete="email" />
            </label>
          </div>

          <label>
            Area of expertise
            <input
              name="expertise"
              type="text"
              placeholder="e.g. Web development, design, robotics"
              required
            />
          </label>

          <label>
            Teaching experience
            <textarea name="experience" rows="5" required />
          </label>

          <label>
            Portfolio or LinkedIn link
            <input name="portfolio" type="url" placeholder="https://" />
          </label>

          {submitted && (
            <p className="tutor-application-success" role="status">
              Thanks for applying. Our team will review your information and
              get back to you soon.
            </p>
          )}

          {error && <p className="tutor-application-error" role="alert">{error}</p>}

          <button type="submit" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </section>
    </main>
  );
}

export default TutorApplication;
