import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiCalendar, FiCheck, FiClock, FiUser } from "react-icons/fi";
import { getNextDate, liveSessions } from "./liveSessions";
import "./SessionDetails.css";

function SessionDetails() {
  const { sessionId } = useParams();
  const [reserved, setReserved] = useState(false);
  const [reservationError, setReservationError] = useState("");
  const [reserving, setReserving] = useState(false);
  const session = liveSessions.find((item) => String(item.id) === sessionId);

  if (!session) {
    return (
      <main className="session-details-page">
        <section className="session-details-empty">
          <h1>Session not found</h1>
          <p>That live session is no longer available.</p>
          <Link className="session-back-link" to="/live">
            <FiArrowLeft /> Back to Live Sessions
          </Link>
        </section>
      </main>
    );
  }

  const sessionDate = session.day ? getNextDate(session.day) : session.date;
  const instructorInitials = session.instructor
    .split(" ")
    .map((name) => name[0])
    .join("");

  const handleReserve = async () => {
    setReservationError("");
    setReserving(true);
    try {
      const response = await fetch("http://localhost:3000/sessionReservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId: session.id,
          sessionTitle: session.title,
          instructor: session.instructor,
          reservedAt: new Date().toISOString(),
        }),
      });
      if (!response.ok) throw new Error("Reservation failed.");
      setReserved(true);
    } catch {
      setReservationError("Could not reserve your spot. Please try again.");
    } finally {
      setReserving(false);
    }
  };

  return (
    <main className="session-details-page">
      <div className="session-details-shell">
        <Link className="session-back-link" to="/live">
          <FiArrowLeft /> Back to Live Sessions
        </Link>

        <section className="session-details-card">
          <div className="session-modal-heading">
            <img src={session.image} alt="" className="session-modal-image" />
            <div>
              <span className="session-modal-eyebrow">LIVE WORKSHOP</span>
              <h1>{session.title}</h1>
              <p>
                A practical, instructor-led session designed to help students
                learn by building and asking questions.
              </p>
            </div>
          </div>

          <div className="session-modal-info">
            <div>
              <FiCalendar />
              <span>{sessionDate}</span>
            </div>
            <div>
              <FiClock />
              <span>{session.times.join("  |  ")} (WAT)</span>
            </div>
            <div>
              <FiUser />
              <span>Ages 7-16</span>
            </div>
          </div>

          <div className="session-modal-content">
            <div className="instructor-profile">
              <div className="instructor-avatar">{instructorInitials}</div>
              <div>
                <span className="session-modal-eyebrow">YOUR INSTRUCTOR</span>
                <h2>{session.instructor}</h2>
                <p>Evora learning facilitator and technology mentor.</p>
              </div>
            </div>

            <div className="session-learning-grid">
              <div>
                <h2>What students will learn</h2>
                <ul>
                  <li><FiCheck /> Follow a guided practical lesson</li>
                  <li><FiCheck /> Build confidence through hands-on work</li>
                  <li><FiCheck /> Ask questions and receive feedback</li>
                </ul>
              </div>
              <div>
                <h2>Before you join</h2>
                <p>
                  Bring a notebook, arrive five minutes early, and come ready
                  to participate.
                </p>
              </div>
            </div>
          </div>

          <div className="session-modal-actions">
            <span>Limited spaces available</span>
            <button
              type="button"
              className="reserve-button"
              onClick={handleReserve}
              disabled={reserving || reserved}
            >
              {reserving ? "Reserving..." : reserved ? "Spot Reserved" : "Reserve My Spot"}
            </button>
            {reservationError && <p className="reservation-error" role="alert">{reservationError}</p>}
          </div>
        </section>
      </div>
    </main>
  );
}

export default SessionDetails;
