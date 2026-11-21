import { useId } from "react";
import Link from "next/link";
import ProjectVisual from "./ProjectVisual";
import styles from "./ProjectCard.module.css";

const coverSizes = [
  "(min-width: 1400px) 400px",
  "(min-width: 1280px) calc((100vw - 12.5rem) / 3)",
  "(min-width: 768px) calc((100vw - 7.25rem) / 2)",
  "calc(100vw - 3rem)",
].join(", ");

export default function ProjectCard({ project }) {
  const id = useId();
  const titleId = `${id}-title`;
  const descriptionId = `${id}-description`;
  const actionId = `${id}-action`;
  const technologies = project.tech.slice(0, 4);
  const remainingTechnologies = project.tech.length - technologies.length;

  return (
    <Link
      href={`/work/${project.slug}`}
      aria-labelledby={`${titleId} ${actionId}`}
      aria-describedby={descriptionId}
      className={styles.card}
    >
      <div className={styles.cover}>
        <ProjectVisual
          slug={project.slug}
          className={styles.image}
          animated={false}
          sizes={coverSizes}
        />
      </div>

      <div className={styles.summary}>
        <div className={styles.context}>
          <span>{project.context}</span>
          <span>{project.year}</span>
        </div>
        <h3 id={titleId} className={styles.title}>{project.title}</h3>
        <span className={styles.status}>{project.status}</span>
      </div>

      <div className={styles.details}>
        <p id={descriptionId} className={styles.description}>
          {project.shortDescription}
        </p>
        <ul className={styles.technologies} aria-label="Technologies" role="list">
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
          {remainingTechnologies > 0 && <li>+{remainingTechnologies} more</li>}
        </ul>
      </div>

      <span id={actionId} className={styles.action}>
        {project.ctaLabel || "View Project"}
        <svg
          className={styles.arrow}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </Link>
  );
}
