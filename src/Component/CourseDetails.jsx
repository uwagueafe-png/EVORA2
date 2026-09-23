import { Link, useParams } from "react-router-dom";
import { courses } from "./coursesData";
import "./CourseDetails.css";

function CourseDetails() {
  const { courseSlug } = useParams();
  const course = courses.find((item) => item.slug === courseSlug);

  if (!course) {
    return (
      <main className="course-details-page">
        <section className="course-details-empty">
          <h1>Course details unavailable</h1>
          <p>Choose a course from the Courses page to view its details.</p>
          <Link className="course-back-link" to="/courses">
            ← Back to Courses
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="course-details-page">

      <Link className="course-back-link" to="/courses">
        ← Back to Courses
      </Link>

      {/* Course Hero */}
      <section className="course-details-hero">

        <div className="course-details-image">
          <img src={course.image} alt={course.title} />
        </div>

        <div className="course-details-content">

          <span className="course-category">
            {course.category}
          </span>

          <h1>{course.title}</h1>

          <p className="course-description">
            {course.description}
          </p>

          <div className="course-info">

            <div className="info-item">
              <span>Duration</span>
              <strong>{course.duration}</strong>
            </div>

            <div className="info-item">
              <span>Schedule</span>
              <strong>{course.schedule}</strong>
            </div>

            <div className="info-item">
              <span>Tutor</span>
              <strong>{course.tutor}</strong>
            </div>

          </div>

          <Link className="start-learning-btn" to="/signup">
            Start Learning
          </Link>

        </div>

      </section>

      {/* What You'll Learn */}
      <section className="course-learning">

        <div className="learning-heading">
          <span>COURSE CONTENT</span>
          <h2>What you'll learn</h2>
          <p>
            Everything students will explore throughout this course.
          </p>
        </div>

        <div className="topics-grid">

          {course.topics.map((topic, index) => (
            <div className="topic-card" key={index}>
              <div className="topic-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>{topic}</h3>

              <p>
                Learn and practise {topic.toLowerCase()} through
                fun and practical activities.
              </p>
            </div>
          ))}

        </div>

      </section>

    </main>
  );
}

export default CourseDetails;
