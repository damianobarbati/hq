import { Button } from "nano-ux";
import { Link } from "wouter";
import { achievements, education, roles, skills } from "../data/experience";
import { projects } from "../data/projects";
import { name, path, profiles } from "../data/site";
import { IArrowUpRight } from "../icons";

const years = [...new Set(roles.map((role) => role.from.slice(0, 4)))];

const formatter = new Intl.DateTimeFormat("en", {
	month: "short",
	year: "numeric",
	timeZone: "UTC",
});

const dateLabel = (date: string) =>
	formatter.format(new Date(date + "-01T00:00:00Z"));

export const Experience = () => {
	const result = (
		<div className="experience-sheet">
			<header className="page-heading">
				<p className="print-only print-name">{name}</p>
				<div className="flex flex-wrap items-center gap-x-3 gap-y-2">
					<h1 className="mb-0">Experience</h1>
					<Button
						className="screen-only ms-auto"
						as="a"
						href={path("damiano-barbati-cv.pdf")}
						download="Damiano-Barbati-CV.pdf"
					>
						Download CV (PDF)
					</Button>
				</div>
				<p>Engineering leadership and full-stack development since 2011.</p>
				<div className="print-only print-profiles">
					<a href="https://damianobarbati.github.io/hq/">Portfolio</a>
					{profiles.map((profile) => (
						<a key={profile.label} href={profile.url}>
							{profile.label}
						</a>
					))}
				</div>
			</header>
			<div className="experience-grid">
				<aside className="experience-index screen-only">
					<nav aria-label="Jump to year">
						<h2>Jump to year</h2>
						{years.map((year) => (
							<a key={year} href={`#year-${year}`}>
								{year}
							</a>
						))}
					</nav>
				</aside>
				<div className="timeline">
					{years.map((year) => (
						<section
							id={`year-${year}`}
							aria-labelledby={`label-${year}`}
							className="year-group"
							key={year}
						>
							<h2 id={`label-${year}`} className="year-label">
								{year}
							</h2>
							{roles
								.filter((role) => role.from.startsWith(year))
								.map((role) => {
									const projectIds = role.projects ?? [];

									const linkedProjects = projects.filter((project) =>
										projectIds.includes(project.id),
									);

									const result = (
										<article id={role.id} className="role" key={role.id}>
											<div className="role-header">
												<div>
													<h3>
														<a href={`#${role.id}`}>{role.organization}</a>
													</h3>
													<p className="role-title">{role.title}</p>
												</div>
												<div className="role-dates">
													<p>
														<time dateTime={role.from}>
															{dateLabel(role.from)}
														</time>{" "}
														–{" "}
														{role.to ? (
															<time dateTime={role.to}>
																{dateLabel(role.to)}
															</time>
														) : (
															"Present"
														)}
													</p>
													<p>{role.location}</p>
												</div>
											</div>
											<ul className="bullet-list">
												{role.work.map((item) => (
													<li key={item}>{item}</li>
												))}
											</ul>
											{linkedProjects.length > 0 && (
												<div className="role-links screen-only">
													{linkedProjects.map((project) => (
														<Link
															key={project.id}
															className="inline-link"
															href={`/projects/${project.id}/`}
														>
															{project.name}
															<IArrowUpRight aria-hidden="true" />
														</Link>
													))}
												</div>
											)}
										</article>
									);

									return result;
								})}
						</section>
					))}
					<section className="cv-section" aria-labelledby="education">
						<h2 id="education">Education</h2>
						<dl>
							{education.map(([label, value]) => (
								<div key={label}>
									<dt>{label}</dt>
									<dd>{value}</dd>
								</div>
							))}
						</dl>
					</section>
					<section className="cv-section" aria-labelledby="skills">
						<h2 id="skills">Skills</h2>
						<dl>
							{skills.map(([label, value]) => (
								<div key={label}>
									<dt>{label}</dt>
									<dd>{value}</dd>
								</div>
							))}
						</dl>
					</section>
					<section className="cv-section" aria-labelledby="achievements">
						<h2 id="achievements">Achievements</h2>
						<ul className="bullet-list">
							{achievements.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</section>
				</div>
			</div>
		</div>
	);

	return result;
};
