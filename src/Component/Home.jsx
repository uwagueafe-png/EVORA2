
import { useState, useEffect } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import {
  FiArrowRight,
  FiBookOpen,
  FiCheckCircle,
  FiCpu,
  FiLayers,
} from "react-icons/fi";
import heroimage from "../assets/Assest/KID.webp";
import AIimage from "../assets/Assest/AI.webp";
import GDimage from "../assets/Assest/GD.webp";
import Young from"../assets/Assest/young boy.webp";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  // HERO ANIMATION
  const [heroIndex, setHeroIndex] = useState(0);

  const heroWords = [
    "Create.",
    "Innovate.",
    "Build.",
    "Explore.",
  ];

  const heroImages = [
    heroimage,
    AIimage,
    Young,
    heroimage,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex(
        (current) => (current + 1) % heroWords.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [heroWords.length]);

  const courses = [
    {
      category: "Development",
      title: "Web Development",
      description:
        "Build full-stack applications with modern frameworks and deploy to production.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    },

    {
      category: "Design",
      title: "Creative Design",
      description:
        "Design beautiful, user-experience.",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=80",
    },

    {
      category: "AI",
      title: "AI-Automation",
      description:
        "Master AI tools and workflows reshaping every industry today.",
      image:
        "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const testimonials = [
    {
      name: "Amara",
      role: "Student",
      text:
        "Evora made learning technology simple and exciting. I enjoyed learning and creating things on my own.",
    },

    {
      name: "Daniel",
      role: "Student",
      text:
        "The courses helped me understand technology better and gave me the confidence to start creating.",
    },

    {
      name: "Mrs. Grace",
      role: "Parent",
      text:
        "I love how Evora makes technology learning engaging, practical, and easy for children to understand.",
    },
  ];
  const getNextDate = (dayName) => {
  const today = new Date();

  const days = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
  };

  const targetDay = days[dayName];
  const currentDay = today.getDay();

  let difference = targetDay - currentDay;

  if (difference < 0) {
    difference += 7;
  }

  const nextDate = new Date(today);

  nextDate.setDate(today.getDate() + difference);

  return nextDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
};

  return (
    <div>

      {/* =========================
          HERO
      ========================= */}

      <section className="hero">

        <div className="hero-content">

          <p className="hero-label">
            EVORA • AGES 7–16
          </p>

          <h1>
            Learn.{" "}
            <Swiper
              className="hero-word-swiper"
              modules={[Autoplay, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              aria-label="Evora learning themes"
            >
              {heroWords.map((word) => (
                <SwiperSlide key={word}>
                  <span className="changing-word">{word}</span>
                </SwiperSlide>
              ))}
            </Swiper>
          </h1>

          <p>
            Technology starts with curiosity. Empower the next
            generation with interactive coding, creative design,
            and digital literacy courses.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() => navigate("/signup")}
            >
              Start Learning <FiArrowRight aria-hidden="true" />
            </button>

            <button
              className="secondary-btn"
              onClick={() => navigate("/learningpaths")}
            >
              <FiBookOpen aria-hidden="true" /> View Curriculum
            </button>

          </div>

          <div className="hero-dots">

            {heroWords.map((_, index) => (
              <span
                key={index}
                className={
                  heroIndex === index
                    ? "hero-dot active"
                    : "hero-dot"
                }
              ></span>
            ))}

          </div>

          <div className="hero-proof" aria-label="Evora learning highlights">
            <span><strong>3</strong> learning paths</span>
            <span><strong>7–16</strong> age range</span>
            <span><strong>Live</strong> educator sessions</span>
          </div>

        </div>


        <div className="hero-image">

          <img
            src={heroImages[heroIndex]}
            alt="Students learning technology"
            className="hero-changing-image"
          />

          <div className="image-badge">

            <div className="badge-icon">
              <FiCheckCircle aria-hidden="true" />
            </div>

            <div>
              <strong>
                Learn. Create. Explore.
              </strong>

              <span>
                Build skills for the future.
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          LEARNING PATHS
      ========================= */}

      <section className="courses-section">

        <div className="section-heading">

          <div>

            <h2>
              Learning Paths
            </h2>

            <p>
              Structured Journey Tailored For Every Age Group.
            </p>

          </div>

        </div>


        <div className="course-grid">

          <div className="learning-card">

            <div className="course-top">

              <div className="course-icon">
                <FiBookOpen aria-hidden="true" />
              </div>

              <span className="course-level">
                Ages 7-9
              </span>

            </div>

            <h3>
              Little Tech Explorers
            </h3>

            <p>
              Introduction to logic, basic computer skills.
            </p>

            <div className="course-bottom">

              <Link to="/learningpaths">
                View path <FiArrowRight aria-hidden="true" />
              </Link>

              <span aria-hidden="true"></span>

            </div>

          </div>


          <div className="learning-card">

            <div className="course-top">

              <div className="course-icon">
                <FiLayers aria-hidden="true" />
              </div>

              <span className="course-level">
                Ages 10-12
              </span>

            </div>

            <h3>
              Young Creators
            </h3>

            <p>
              Scratch programming, basic web design and digital art creation.
            </p>

            <div className="course-bottom">

              <Link to="/learningpaths">
                View path <FiArrowRight aria-hidden="true" />
              </Link>

              <span aria-hidden="true"></span>

            </div>

          </div>


          <div className="learning-card">

            <div className="course-top">

              <div className="course-icon">
                <FiCpu aria-hidden="true" />
              </div>

              <span className="course-level">
                Ages 13-16
              </span>

            </div>

            <h3>
              Future Developers
            </h3>

            <p>
              HTML, CSS, Javascript Basic, AI automation.
            </p>

            <div className="course-bottom">

              <Link to="/learningpaths">
                View path <FiArrowRight aria-hidden="true" />
              </Link>

              <span aria-hidden="true"></span>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          FEATURED COURSES
      ========================= */}

      <section className="courses-section featured-section">

        <div className="courses-header">

          <div>

            <h2>
              Turn Curiosity{" "}
              <span>into creation</span>
            </h2>

            <p>
              Curated by industry practitioners, taught live.
            </p>

          </div>

          <button
            className="all-courses-btn"
            onClick={() => navigate("/courses")}
          >
            See all courses →
          </button>

        </div>


        <div className="courses-grid">

          {courses.map((course, index) => (

            <div
              className="course-card"
              key={index}
            >

              <img
                src={course.image}
                alt={course.title}
              />

              <div className="course-content">

                <span
                  className={`category category-${index}`}
                >
                  {course.category}
                </span>

                <h3>
                  {course.title}
                </h3>

                <p>
                  {course.description}
                </p>

                <Link to="/courses">
                  View course →
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>

{/* =========================
    LIVE SESSIONS
========================= */}

<section className="home-live">

  <div className="home-live-header">

    <div>
      <span className="home-live-label">
        LIVE SESSIONS
      </span>

      <h2>
        Learn together, live.
      </h2>

      <p>
        Join interactive sessions and learn directly from
        experienced educators.
      </p>
    </div>

    <NavLink
      to="/live"
      className="view-all-live"
    >
      View All Sessions →
    </NavLink>

  </div>


  <div className="home-live-grid">

    {/* =========================
        SESSION 1
    ========================= */}

    <article className="home-live-card">

      <div className="home-live-image">
        <img
          src={AIimage}
          alt="AI for Beginners"
        />
      </div>

      <div className="home-live-content">

        <span className="home-live-date">
          {getNextDate("Wednesday")}
        </span>

        <h3>
          AI for Beginners
        </h3>

        <p>
          Deborah Dominion
        </p>

        <span className="home-live-time">
          11:44 AM · 1:00 PM · 5:00 PM
        </span>

        <NavLink
          to="/live"
          className="home-live-button"
        >
          View Session →
        </NavLink>

      </div>

    </article>


    {/* =========================
        SESSION 2
    ========================= */}

    <article className="home-live-card">

      <div className="home-live-image">
        <img
          src={GDimage}
          alt="Graphic Design"
        />
      </div>

      <div className="home-live-content">

        <span className="home-live-date">
          {getNextDate("Friday")}
        </span>

        <h3>
          Graphic Design
        </h3>

        <p>
          James Oluwole
        </p>

        <span className="home-live-time">
          10:00 AM · 2:00 PM · 6:00 PM
        </span>

        <NavLink
          to="/live"
          className="home-live-button"
        >
          View Session →
        </NavLink>

      </div>

    </article>


    {/* =========================
        SESSION 3
    ========================= */}

    <article className="home-live-card">

      <div className="home-live-image">

        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="Introduction to Web Development"
        />

      </div>

      <div className="home-live-content">

        <span className="home-live-date">
          {getNextDate("Sunday")}
        </span>

        <h3>
          Introduction to Web Development
        </h3>

        <p>
          Ikponmwosa Ogiehor
        </p>

        <span className="home-live-time">
          11:30 AM · 3:30 PM · 5:30 PM
        </span>

        <NavLink
          to="/live"
          className="home-live-button"
        >
          View Session →
        </NavLink>

      </div>

    </article>

  </div>

</section>
      {/* =========================
          TESTIMONIALS
      ========================= */}

      <section className="testimonial-section">

        <div className="testimonial-heading">

          <h2>
            What our learners say
          </h2>

          <p>
            Real experiences from learners and parents growing with Evora.
          </p>

        </div>


        <div className="testimonial-grid">

          {testimonials.map((testimonial, index) => (

            <div
              className="testimonial-card"
              key={index}
            >

              <div className="stars">
                ★★★★★
              </div>

              <p>
                "{testimonial.text}"
              </p>

              <div className="testimonial-person">

                <div className="avatar">
                  {testimonial.name.charAt(0)}
                </div>

                <div>

                  <strong>
                    {testimonial.name}
                  </strong>

                  <span>
                    {testimonial.role}
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =========================
          FINAL SECTION
      ========================= */}

      <section className="final-section">

        <div className="final-content">

          <h2>
            Do you want to teach the next generation?
          </h2>

          <p>
            Share your knowledge, guide young creators, and help students
            build confidence with technology.
          </p>

          <NavLink
            to="/apply"
            className="primary-btn"
          >
            Apply Now <FiArrowRight aria-hidden="true" />
          </NavLink>

        </div>

      </section>

    </div>
  );
}

export default Home;
