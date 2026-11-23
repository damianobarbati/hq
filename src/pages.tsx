import type { ReactNode } from "react";
import { projects } from "./data/projects";
import { bio, name, path } from "./data/site";
import { Experience } from "./views/Experience";
import { Home } from "./views/Home";
import { ProjectDetail } from "./views/ProjectDetail";
import { Projects } from "./views/Projects";

type Page = {
	title?: string;
	description?: string;
	section?: "experience" | "projects";
	content: ReactNode;
};

export const pages = new Map<string, Page>([
	["", { content: <Home /> }],
	[
		"experience/",
		{ title: "Experience", section: "experience", content: <Experience /> },
	],
	[
		"projects/",
		{ title: "Projects", section: "projects", content: <Projects /> },
	],
]);

for (const project of projects) {
	pages.set(`projects/${project.id}/`, {
		title: project.name,
		description: project.summary,
		section: "projects",
		content: <ProjectDetail project={project} />,
	});
}

type PageMetadataInput = {
	route: string;
	page: Page;
};

export const getPageMetadata = ({ route, page }: PageMetadataInput) => {
	const result = {
		title: page.title
			? `${page.title} · ${name}`
			: `${name} · Founder & Tech Lead`,
		description: page.description ?? bio,
		canonical: new URL(path(route), "https://damianobarbati.github.io").href,
	};

	return result;
};
