import { Badge, Button } from "nano-ux";
import { Link } from "wouter";
import type { Project } from "../data/projects";
import { path } from "../data/site";
import { IArrowUpRight } from "../icons";

type ProjectDetailProps = { project: Project };

export const ProjectDetail = ({ project }: ProjectDetailProps) => {
	const result = (
		<article className="project-detail">
			<Link className="inline-link" href="/projects/">
				← All projects
			</Link>
			<header className="page-heading">
				<p className="eyebrow">{project.category}</p>
				<h1>{project.name}</h1>
				<p>{project.summary}</p>
			</header>
			<div className="detail-grid">
				<div>
					<h2>My contribution</h2>
					<p>{project.contribution}</p>
					<div className="tag-list">
						{project.tags.map((tag) => (
							<Badge size="sm" className="hq-tag" key={tag}>
								{tag}
							</Badge>
						))}
					</div>
					<div className="actions">
						{project.links.map((link, index) => (
							<Button
								as="a"
								key={link.url}
								href={link.url}
								variant={index === 0 ? "solid" : "outline"}
								rightIcon={IArrowUpRight}
							>
								{link.label}
							</Button>
						))}
					</div>
					{project.role && (
						<p className="detail-role">
							<a
								className="inline-link"
								href={path(`experience/#${project.role}`)}
							>
								Related experience <IArrowUpRight aria-hidden="true" />
							</a>
						</p>
					)}
				</div>
				{project.preview && (
					<figure className="detail-preview" data-project={project.id}>
						<img src={path(project.preview.asset)} alt={project.preview.alt} />
					</figure>
				)}
			</div>
		</article>
	);

	return result;
};
