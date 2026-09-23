import { useNavigate } from "react-router-dom";
import BackButton from "../../pages/BackButton";
import { courseGroups } from "./coursesData";
import "./Courses.css";

function Courses() {
  const navigate = useNavigate();

  return (
    <main className="courses-page">
      <BackButton to="/" text="Back to Home" />
      <section className="courses-hero">
        <p className="courses-label">EVORA COURSES</p>
        <h1>Learn skills.<br />Create something amazing.</h1>
        <p className="courses-intro">
          Practical technology courses designed to help young minds explore,
          create, and build with confidence.
        </p>
      </section>
      <section className="course-list">
        {courseGroups.map((group) => (
          <div className="course-group" key={group.age}>
            <span className="age-tag">{group.age}</span>
            <div className="course-grid">
              {group.courses.map((course) => (
                <article className="course-card" key={course.slug}>
                  <div className="course-image"><img src={course.image} alt={course.title} /></div>
                  <div className="course-content">
                    <span className="course-category">{course.category}</span>
                    <h2>{course.title}</h2>
                    <p>{course.description}</p>
                    <button type="button" onClick={() => navigate(`/courses/${course.slug}`)} className="learn-btn">
                      View Course →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Courses;
