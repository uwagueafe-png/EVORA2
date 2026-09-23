import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiCheck } from "react-icons/fi";
import { projects } from "./projectsData";
import "./ProjectDetails.css";

function ProjectDetails() {
  const { projectId } = useParams();
  const project = projects.find((item) => String(item.id) === projectId);

  if (!project) {
    return (
      <main className="project-details-page">
        <section className="project-details-empty">
          <h1>Project not found</h1>
          <p>That student project is no longer available.</p>
          <Link className="project-back-link" to="/projects">
            <FiArrowLeft /> Back to Projects
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="project-details-page">
      <div className="project-details-shell">
        <Link className="project-back-link" to="/projects">
          <FiArrowLeft /> Back to Projects
        </Link>

        <section className="project-details-card">
          <div className="project-details-hero">
            <img src={project.image} alt={project.title} />
            <div>
              <span className="projects-label">STUDENT PROJECT</span>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
            </div>
          </div>

          <div className="project-details-meta">
            <div>
              <span>CREATOR</span>
              <strong>{project.author}</strong>
            </div>
            <div>
              <span>AGE</span>
              <strong>{project.age}</strong>
            </div>
            <div>
              <span>BUILT WITH</span>
              <strong>{project.technologies.join(" · ")}</strong>
            </div>
          </div>

          <div className="project-details-learning">
            <div>
              <span className="projects-label">PROJECT OUTCOME</span>
              <h2>What this project teaches</h2>
              <p>{project.outcome}</p>
            </div>
            <ul>
              {project.technologies.map((technology) => (
                <li key={technology}>
                  <FiCheck /> {technology} in practice
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ProjectDetails;
