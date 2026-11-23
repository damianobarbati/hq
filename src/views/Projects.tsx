import { ProjectCard } from "../components/ProjectCard";
import { openSourceWork, products } from "../data/projects";

export const Projects = () => {
	const result = (
		<>
			<header className="page-heading">
				<h1>Projects</h1>
				<p>SaaS products I build and open-source work for developers.</p>
			</header>
			<section className="project-group" aria-labelledby="saas">
				<h2 id="saas">SaaS products</h2>
				<div className="work-grid">
					{products.map((project) => (
						<ProjectCard key={project.id} project={project} showDetails />
					))}
				</div>
			</section>
			<section className="project-group" aria-labelledby="open-source">
				<h2 id="open-source">Open source</h2>
				<div className="work-grid open-source-grid">
					{openSourceWork.map((project) => (
						<ProjectCard key={project.id} project={project} showDetails />
					))}
				</div>
			</section>
		</>
	);

	return result;
};
