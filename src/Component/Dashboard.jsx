import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiBookOpen, FiCalendar, FiPlay } from "react-icons/fi";
import { liveSessions, getNextDate } from "./liveSessions";
import { courseGroups } from "./coursesData";
import { supabase } from "../supabaseClient";
import "./Dashboard.css";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
  }, []);

  const firstName = user?.user_metadata?.name?.split(" ")[0] || "Learner";
  const nextSession = liveSessions[0];
  const registeredAge = Number(user?.user_metadata?.age);
  const ageGroup = courseGroups.find((group) => {
    const ages = group.age.match(/\d+/g)?.map(Number) || [];
    return registeredAge >= ages[0] && registeredAge <= ages[1];
  }) || courseGroups[0];
  const recommendedCourse = ageGroup.courses[0];

  return (
    <main className="dashboard-page">
      <section className="dashboard-header">
        <div>
          <p className="dashboard-label">YOUR EVORA SPACE</p>
          <h1>Welcome back, {firstName}.</h1>
          <p>Your next step is ready: {recommendedCourse.title} for {ageGroup.age.toLowerCase()}.</p>
        </div>
        <Link className="dashboard-header-link" to={`/courses/${recommendedCourse.slug}`}>
          Start your course <FiArrowRight aria-hidden="true" />
        </Link>
      </section>

      <section className="dashboard-stats" aria-label="Learning summary">
        <div>
          <span>Learning paths</span>
          <strong>3</strong>
          <small>Choose an age-based path</small>
        </div>
        <div>
          <span>Live sessions</span>
          <strong>6</strong>
          <small>Learn with an educator</small>
        </div>
        <div>
          <span>Age range</span>
          <strong>7–16</strong>
          <small>Built for young creators</small>
        </div>
      </section>

      <section className="dashboard-grid">
        <article className="dashboard-panel dashboard-progress-panel">
          <div className="dashboard-panel-heading">
            <div>
              <p className="dashboard-label">START LEARNING</p>
              <h2>{ageGroup.age} learning</h2>
            </div>
            <FiBookOpen aria-hidden="true" />
          </div>
          <div className="dashboard-course-preview">
            <img src={recommendedCourse.image} alt="" />
            <div>
              <span>{ageGroup.age}</span>
              <h3>{recommendedCourse.title}</h3>
              <p>{recommendedCourse.description}</p>
            </div>
          </div>
          <div className="dashboard-progress-track" aria-label="No course started yet">
            <span />
          </div>
          <div className="dashboard-progress-meta">
            <span>Getting started</span>
            <strong>0%</strong>
          </div>
          <Link className="dashboard-panel-link" to={`/courses/${recommendedCourse.slug}`}>
            Start {recommendedCourse.title} <FiArrowRight aria-hidden="true" />
          </Link>
        </article>

        <article className="dashboard-panel dashboard-session-panel">
          <div className="dashboard-panel-heading">
            <div>
              <p className="dashboard-label">NEXT LIVE SESSION</p>
              <h2>{nextSession.title}</h2>
            </div>
            <FiCalendar aria-hidden="true" />
          </div>
          <p className="dashboard-muted">{nextSession.instructor}</p>
          <div className="dashboard-session-detail">
            <strong>{getNextDate(nextSession.day)}</strong>
            <span>{nextSession.times[0]} WAT</span>
          </div>
          <Link className="dashboard-panel-link" to={`/session/${nextSession.id}`}>
            View session <FiArrowRight aria-hidden="true" />
          </Link>
        </article>
      </section>

      <section className="dashboard-quick-links">
        <div>
          <FiPlay aria-hidden="true" />
          <span>Ready to learn by doing?</span>
        </div>
        <Link to="/courses">See all courses <FiArrowRight aria-hidden="true" /></Link>
      </section>
    </main>
  );
}

export default Dashboard;
