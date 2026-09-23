import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Learning.css";
import {
  FiArrowRight,
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiCode,
  FiCpu,
  FiLayers,
  FiPenTool,
  FiUser,
} from "react-icons/fi";

function Learningpaths() {
  const navigate = useNavigate();

  const [selectedAge, setSelectedAge] = useState("7–9");

  const learningPaths = {
    "7–9": {
      age: "AGES 7–9",
      title: "Little Tech Explorers",
      description:
        "A fun first step into technology. Children explore computers, creativity, and coding through playful activities and hands-on projects.",

      skills: [
        "Computer Confidence",
        "Problem Solving",
        "Digital Creativity",
        "Creative Thinking",
        "Introduction to Coding",
      ],

      nextPath: "Young Creators",

      courses: [
        {
          category: "CODING",
          title: "Creative Coding",
          description:
            "Learn the basics of coding through fun projects, games, and interactive activities.",
          duration: "8 weeks",
          schedule: "Saturdays, 10:00 AM – 11:30 AM",
          tutor: "Evora Learning Team",
          topics: [
            "Coding Basics",
            "Creative Projects",
            "Problem Solving",
          ],
        },

        {
          category: "DESIGN",
          title: "Digital Creativity",
          description:
            "Turn ideas into colourful digital designs while discovering the world of creative technology.",
          duration: "8 weeks",
          schedule: "Saturdays, 12:00 PM – 1:30 PM",
          tutor: "Evora Learning Team",
          topics: [
            "Digital Drawing",
            "Colour & Design",
            "Creative Projects",
            "Visual Storytelling",
          ],
        },

        {
          category: "TECH",
          title: "Tech Explorers",
          description:
            "Discover how technology works through exciting challenges, experiments, and hands-on projects.",
          duration: "8 weeks",
          schedule: "Sundays, 10:00 AM – 11:30 AM",
          tutor: "Evora Learning Team",
          topics: [
            "Computer Basics",
            "How Technology Works",
            "Fun Tech Experiments",
            "Problem Solving",
          ],
        },
      ],
    },

    "10–12": {
      age: "AGES 10–12",
      title: "Young Creators",
      description:
        "Build confidence with technology by creating websites, designs, and hands-on projects while learning how digital ideas come to life.",

      skills: [
        "Creative Problem Solving",
        "Web Development",
        "Digital Design",
        "Logical Thinking",
        "Project Building",
      ],

      nextPath: "Future Developers",

      courses: [
        {
          category: "DEVELOPMENT",
          title: "Web Development",
          description:
            "Build your first websites and learn how HTML, CSS, and JavaScript bring ideas to life.",
          duration: "10 weeks",
          schedule: "Saturdays, 10:00 AM – 11:30 AM",
          tutor: "Evora Learning Team",
          topics: [
            "HTML Basics",
            "CSS Styling",
            "JavaScript Fundamentals",
            "Building Mini Websites",
          ],
        },

        {
          category: "CREATIVE",
          title: "Graphic Design",
          description:
            "Learn the principles of design and create posters, graphics, and digital experiences.",
          duration: "8 weeks",
          schedule: "Saturdays, 12:00 PM – 1:30 PM",
          tutor: "Evora Learning Team",
          topics: [
            "Design Principles",
            "Colour & Typography",
            "Poster Design",
            "Creative Digital Projects",
          ],
        },

        {
          category: "ROBOTICS",
          title: "Robotics & Innovation",
          description:
            "Explore robotics, problem-solving, and the exciting process of building technology.",
          duration: "10 weeks",
          schedule: "Sundays, 12:00 PM – 1:30 PM",
          tutor: "Evora Learning Team",
          topics: [
            "Robotics Basics",
            "Sensors & Components",
            "Building Simple Robots",
            "Innovation & Problem Solving",
          ],
        },
      ],
    },

    "13–16": {
      age: "AGES 13–16",
      title: "Future Developers",
      description:
        "Develop practical technology skills and explore modern tools while building real digital projects and discovering where technology can take you.",

      skills: [
        "Web Development",
        "Programming",
        "Creative Technology",
        "Artificial Intelligence",
        "Digital Product Design",
      ],

      nextPath: "Advanced Learning",

      courses: [
        {
          category: "DEVELOPMENT",
          title: "Advanced Web Development",
          description:
            "Move beyond the basics and build responsive websites with modern development tools.",
          duration: "12 weeks",
          schedule: "Saturdays, 10:00 AM – 12:00 PM",
          tutor: "Evora Learning Team",
          topics: [
            "Responsive Web Design",
            "JavaScript Development",
            "React Fundamentals",
            "Building Real Projects",
          ],
        },

        {
          category: "AI",
          title: "AI & Automation",
          description:
            "Understand how AI works and learn how modern AI tools can solve real-world problems.",
          duration: "10 weeks",
          schedule: "Sundays, 10:00 AM – 12:00 PM",
          tutor: "Evora Learning Team",
          topics: [
            "Introduction to AI",
            "AI Tools & Applications",
            "Automation Basics",
            "Real-World AI Projects",
          ],
        },

        {
          category: "DESIGN",
          title: "UI/UX Design",
          description:
            "Learn how to design digital products that look great and are easy for people to use.",
          duration: "8 weeks",
          schedule: "Sundays, 12:00 PM – 2:00 PM",
          tutor: "Evora Learning Team",
          topics: [
            "Design Principles",
            "User Interface Design",
            "Wireframing & Prototyping",
            "User Experience",
          ],
        },
      ],
    },
  };

  const currentPath = learningPaths[selectedAge];

  const handleViewCourse = (course) => {
    const courseSlug = course.title
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    navigate(`/courses/${courseSlug}`);
  };

  const categoryIcons = {
    CODING: FiCode,
    DESIGN: FiPenTool,
    TECH: FiCpu,
    DEVELOPMENT: FiCode,
    CREATIVE: FiLayers,
    ROBOTICS: FiCpu,
    AI: FiCpu,
  };

  return (
    <main className="paths-page">

      {/* PAGE INTRO */}
      <section className="paths-hero">
        <p className="paths-label">EVORA LEARNING PATHS</p>

        <h1>Find Your Learning Path</h1>

        <p className="paths-intro">
          Choose your age group and discover what you can learn,
          build, and create with Evora.
        </p>
      </section>


      {/* AGE SELECTOR */}
      <section className="age-selector">
        {Object.keys(learningPaths).map((age) => (
          <button
            key={age}
            className={`age-option ${
              selectedAge === age ? "active" : ""
            }`}
            onClick={() => setSelectedAge(age)}
          >
            {age}
          </button>
        ))}
      </section>


      {/* PATH INTRODUCTION */}
      <section className="path-section">

        <span className="path-age">{currentPath.age}</span>

        <h2>{currentPath.title}</h2>

        <p className="path-description">
          {currentPath.description}
        </p>


        {/* SKILLS */}
        <div className="skills-section">

          <h3>What You'll Develop</h3>

          <div className="skills-list">
            {currentPath.skills.map((skill) => (
              <span className="skill-pill" key={skill}>
                <FiCheckCircle aria-hidden="true" />
                {skill}
              </span>
            ))}
          </div>

        </div>


        {/* COURSES */}
        <div className="path-courses">

          <div className="section-heading">
            <h3>Courses in This Path</h3>
            <p>
              Explore the courses designed for this stage of
              your learning journey.
            </p>
          </div>


          <div className="path-course-grid">

            {currentPath.courses.map((course) => (

              <article className="path-course-card" key={course.title}>

                {(() => {
                  const CategoryIcon = categoryIcons[course.category] || FiLayers;

                  return (
                    <span className="course-category">
                      <CategoryIcon aria-hidden="true" />
                      {course.category}
                    </span>
                  );
                })()}

                <h4>{course.title}</h4>

                <p className="course-description">
                  {course.description}
                </p>


                <div className="course-meta">

                  <span><FiClock aria-hidden="true" /> {course.duration}</span>

                  <span><FiCalendar aria-hidden="true" /> {course.schedule}</span>

                  <span><FiUser aria-hidden="true" /> {course.tutor}</span>

                </div>


                <div className="course-topics">

                  {course.topics.map((topic) => (
                    <span key={topic}>
                      {topic}
                    </span>
                  ))}

                </div>


                <button
                  className="path-course-btn"
                  onClick={() => handleViewCourse(course)}
                >
                  View Course <FiArrowRight aria-hidden="true" />
                </button>

              </article>

            ))}

          </div>

        </div>


        {/* NEXT PATH */}
        <div className="next-path">

          <p>WHAT COMES NEXT?</p>

          <h3>{currentPath.nextPath}</h3>

          <span>
            Continue your learning journey and take your
            technology skills to the next level.
          </span>

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="paths-cta">

        <h2>Ready to start learning?</h2>

        <p>
          Take the first step and start building your skills
          with Evora.
        </p>

        <button onClick={() => navigate("/signup")}>
          Start Learning <FiArrowRight aria-hidden="true" />
        </button>

      </section>

    </main>
  );
}

export default Learningpaths;