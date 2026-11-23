import { Badge } from "nano-ux";
import { Link } from "wouter";
import type { Project } from "../data/projects";
import { IArrowUpRight } from "../icons";

type ProjectCardProps = { project: Project; showDetails?: boolean };

export const ProjectCard = ({ project, showDetails }: ProjectCardProps) => {
	const href = showDetails ? `/projects/${project.id}/` : project.links[0].url;
	const ProjectLink = showDetails ? Link : "a";

	const result = (
		<ProjectLink
			className="project-card"
			href={href}
			target={showDetails ? undefined : "_blank"}
			rel={showDetails ? undefined : "noopener"}
		>
			<div className="project-card-heading">
				<h3>{project.name}</h3>
				<IArrowUpRight className="project-outbound" aria-hidden="true" />
			</div>
			<p>{project.summary}</p>
			<div className="tag-list">
				{project.tags.map((tag) => (
					<Badge size="sm" className="hq-tag" key={tag}>
						{tag}
					</Badge>
				))}
			</div>
		</ProjectLink>
	);

	return result;
};
