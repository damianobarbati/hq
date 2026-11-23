import { ThemeSelector } from "nano-ux";
import type { ReactNode } from "react";
import { Link } from "wouter";
import { projects } from "../data/projects";
import { name, path, profiles } from "../data/site";
import { IArrowUpRight } from "../icons";

type LayoutProps = {
	className?: string;
	section?: "experience" | "projects";
	children: ReactNode;
};

const headerProjects = projects.filter(
	(project) =>
		project.category === "SaaS" ||
		project.id === "nano-ux" ||
		project.id === "nano-fw",
);

export const Layout = ({ className, section, children }: LayoutProps) => {
	const result = (
		<>
			<a className="skip-link" href="#main">
				Skip to content
			</a>
			<header className="site-header shell">
				<Link className="wordmark" href="/" aria-label="Damiano Barbati, home">
					{name}
				</Link>
				<nav className="site-nav" aria-label="Main">
					{headerProjects.map((project) => (
						<a
							key={project.id}
							href={project.links[0].url}
							target="_blank"
							rel="noopener"
						>
							{project.name}
							<IArrowUpRight aria-hidden="true" />
						</a>
					))}
					<Link
						href="/experience/"
						aria-current={section === "experience" ? "page" : undefined}
					>
						Experience
					</Link>
					<Link
						href="/projects/"
						aria-current={section === "projects" ? "page" : undefined}
					>
						Projects
					</Link>
					<a href={path("#contact")}>Contact me</a>
				</nav>
				<div
					id="theme-control"
					className="theme-control"
					ref={(element) => {
						const button = element && element.querySelector("button");
						if (button) button.setAttribute("aria-label", "Change color theme");
					}}
				>
					<ThemeSelector className="theme-selector" tooltipPlacement="bottom" />
				</div>
			</header>
			<main id="main" className={className ?? "shell"} tabIndex={-1}>
				{children}
			</main>
			<footer className="site-footer shell">
				<div>
					<p className="footer-name">{name}</p>
					<a
						className="built-with"
						href="https://damianobarbati.github.io/nano-ux/"
						target="_blank"
						rel="noopener"
					>
						Built with nano-ux
					</a>
				</div>
				<nav className="contact-links" aria-label="Contact">
					{profiles.map((profile) => (
						<a
							key={profile.label}
							href={profile.url}
							target="_blank"
							rel="noopener"
						>
							{profile.label}
							<IArrowUpRight aria-hidden="true" />
						</a>
					))}
				</nav>
			</footer>
		</>
	);

	return result;
};
