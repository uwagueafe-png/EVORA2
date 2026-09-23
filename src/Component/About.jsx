
import { useEffect, useState } from "react";
import { FiCompass, FiLayers, FiTrendingUp } from "react-icons/fi";
import aboutImage from "../assets/Assest/teaching.webp";
import robotics from "../assets/Assest/robototics.webp"
import laptop from "../assets/Assest/laptop.webp"
import "./About.css";

const aboutSections = [
  {
    title: "Our Story",
    text: "Evora was created from a simple idea: children should have the opportunity to explore technology from an early age. We wanted to create a space where learning technology feels exciting, simple, and enjoyable rather than complicated or overwhelming.",
  },
  {
    title: "Our Mission",
    text: "Our mission is to help children build the confidence and skills they need to understand and create with technology. Through age-based learning, practical projects, and engaging lessons, Evora makes technology education accessible and meaningful for young learners.",
  },
];

const principles = [
  {
    icon: FiCompass,
    title: "Explore",
    text: "Start with curiosity and make technology feel approachable.",
  },
  {
    icon: FiLayers,
    title: "Create",
    text: "Turn new ideas into practical projects children can be proud of.",
  },
  {
    icon: FiTrendingUp,
    title: "Grow",
    text: "Build confidence through steady progress and real support.",
  },
];

function About() {
  const [aboutImageIndex, setAboutImageIndex] = useState(0);

  const aboutImages = [aboutImage, robotics, laptop];

  useEffect(() => {
    const interval = setInterval(() => {
      setAboutImageIndex((current) => (current + 1) % aboutImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [aboutImages.length]);

  return (
    <div className="about-page">
      <section className="about-intro">
        <div className="about-intro-copy">
          <p className="about-label">ABOUT EVORA</p>
          <h1>Technology should feel possible.</h1>
          <p className="about-description">
            Evora helps children ages 7–16 explore technology, make things,
            and grow the confidence to keep going.
          </p>
        </div>

        <div className="about-intro-image">
          <img
            src={aboutImages[aboutImageIndex]}
            alt="Young learner exploring technology"
            className="about-changing-image"
          />
          <span>Learn. Create. Explore.</span>
        </div>
      </section>

      <section className="principles-section" aria-labelledby="principles-heading">
        <div className="principles-heading">
          <p className="about-label">THE EVORA APPROACH</p>
          <h2 id="principles-heading">A place to begin, build, and belong.</h2>
        </div>
        <div className="principles-grid">
          {principles.map(({ icon: Icon, title, text }) => (
            <article className="principle-card" key={title}>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-sections">
        {aboutSections.map((section, index) => (
          <div className="about-section" key={index}>
            <span className="section-number">
              0{index + 1}
            </span>

            <div className="section-content">
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default About;

