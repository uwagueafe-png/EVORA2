import { Link } from "react-router-dom";
import "./Projects.css";
import { projects } from "./projectsData";

function Projects() {
  return (
    <main className="projects-page">
      <section className="projects-intro">
        <p className="projects-label">STUDENT PROJECTS</p>
        <h1>See what our students have built.</h1>
        <p>
          Explore the ideas, creativity, and technology our students have
          brought to life at Evora.
        </p>
      </section>

      <section className="projects-grid" aria-label="Student projects">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              <h2>{project.title}</h2>
              <p className="project-description">{project.description}</p>

              <div className="project-info">
                <div>
                  <span className="info-label">BUILT WITH</span>
                  <div className="project-tags">
                    {project.technologies.map((technology) => (
                      <span className="tag" key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="info-label">BY</span>
                  <p className="creator">
                    {project.author} · Age {project.age}
                  </p>
                </div>
              </div>

              <Link
                className="project-view-link"
                to={`/projects/${project.id}`}
              >
                View Project <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Projects;
