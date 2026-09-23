import React from "react";
import "./Live.css";
import { liveSessions, getNextDate } from "./liveSessions";
import { useNavigate } from "react-router-dom";

import {
  FiCalendar,
  FiClock,
  FiUser,
} from "react-icons/fi";

function Live() {
  const navigate = useNavigate();

  return (
    <main className="live-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="live-hero">

        <span className="live-label">EVORA LIVE</span>

        <h1>Learn together, live.</h1>

        <p className="live-intro">
          Join practical sessions led by experienced educators and build
          confidence by learning alongside other young creators.
        </p>

      </section>


      {/* =========================
          LIVE SESSIONS
      ========================= */}

      <section className="live-sessions-container">

        <div className="sessions-grid">

          {liveSessions.map((session) => (

            <article
              className="session-card"
              key={session.id}
            >

              {/* Date */}

              <div className="session-date">

                <FiCalendar />

                {session.day
                  ? getNextDate(session.day)
                  : session.date}

              </div>


              {/* Image */}

              <div className="session-image">

                <img
                  src={session.image}
                  alt={session.title}
                />

              </div>


              {/* Title */}

              <h2 className="session-title">
                {session.title}
              </h2>


              {/* Instructor */}

              <div className="session-instructor">

                <FiUser />

                <span>
                  {session.instructor}
                </span>

              </div>


              {/* Time */}

              <div className="session-time">

                <FiClock />

                <div className="time-list">

                  {session.times.map((time, index) => (

                    <React.Fragment key={time}>

                      <span className="time">
                        {time}
                      </span>

                      {index !== session.times.length - 1 && (
                        <span className="time-space"></span>
                      )}

                    </React.Fragment>

                  ))}

                  <span className="timezone">
                    (WAT)
                  </span>

                </div>

              </div>


              {/* Button */}

              <button
                className="join-button"
                onClick={() => navigate(`/session/${session.id}`)}
              >
                Join Session
              </button>

            </article>

          ))}

        </div>

      </section>

    </main>
  );
}

export default Live;