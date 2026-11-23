export type Project = {
	id: string;
	name: string;
	category: "SaaS" | "Open source";
	summary: string;
	contribution: string;
	tags: string[];
	links: [ProjectLink, ...ProjectLink[]];
	preview?: { asset: string; alt: string };
	role?: string;
};

type ProjectLink = { label: string; url: string };

export const projects: Project[] = [
	{
		id: "tubu",
		name: "Tubu",
		category: "SaaS",
		summary: "TLS-secured HTTP and TCP tunnels to your local services.",
		contribution:
			"I founded Tubu and built a CLI and tunnel service that let developers reach a local service from the internet with a single command.",
		tags: ["Networking", "Developer tools"],
		links: [{ label: "Visit Tubu", url: "https://tubu.dev/" }],
		preview: {
			asset: "tubu.webp",
			alt: "Tubu terminal showing a command and the public URL it creates",
		},
	},
	{
		id: "voltom",
		name: "Voltom",
		category: "SaaS",
		summary:
			"Liveness checks, ID verification, and face matching for web apps.",
		contribution:
			"As founder and tech lead, I built the verification platform and optimized computer-vision inference for mobile browsers.",
		tags: ["Computer vision", "Identity"],
		links: [{ label: "Visit Voltom", url: "https://voltom.io/en" }],
		preview: {
			asset: "voltom.webp",
			alt: "Voltom’s public verification demo showing a successful identity check",
		},
		role: "voltom",
	},
	{
		id: "nano-ux",
		name: "nano-ux",
		category: "Open source",
		summary: "An opinionated UI kit for React and Tailwind CSS.",
		contribution:
			"I built the components and CSS-variable theme system. This portfolio uses the same package published to npm.",
		tags: ["React", "Tailwind CSS", "Design system"],
		links: [
			{ label: "Live demo", url: "https://damianobarbati.github.io/nano-ux/" },
			{
				label: "Source code",
				url: "https://github.com/damianobarbati/nano-ux",
			},
		],
	},
	{
		id: "nano-fw",
		name: "nano-fw",
		category: "Open source",
		summary: "A TypeScript micro-framework for typed HTTP APIs.",
		contribution:
			"I built a framework around Hono, Zod, and Knex that validates requests and responses and generates OpenAPI documentation from the same schemas.",
		tags: ["TypeScript", "Hono", "OpenAPI"],
		links: [
			{
				label: "Documentation",
				url: "https://damianobarbati.github.io/nano-fw/",
			},
			{
				label: "Source code",
				url: "https://github.com/damianobarbati/nano-fw",
			},
		],
	},
	{
		id: "oxlint-better",
		name: "oxlint-better",
		category: "Open source",
		summary: "Oxlint rules for JavaScript and TypeScript codebases.",
		contribution:
			"I built rules for package import aliases, statement spacing, and TypeScript patterns such as repeatedly copying a growing reducer accumulator.",
		tags: ["Oxlint", "TypeScript"],
		links: [
			{
				label: "Source code",
				url: "https://github.com/damianobarbati/oxlint-better",
			},
		],
	},
	{
		id: "get-browser-fingerprint",
		name: "get-browser-fingerprint",
		category: "Open source",
		summary:
			"A JavaScript utility that generates a fingerprint from browser signals.",
		contribution:
			"I built a single async function that returns the fingerprint and the signals used to compute it.",
		tags: ["JavaScript", "Browser APIs"],
		links: [
			{
				label: "Source code",
				url: "https://github.com/damianobarbati/get-browser-fingerprint",
			},
		],
	},
	{
		id: "voltom-playground",
		name: "Voltom playgrounds",
		category: "Open source",
		summary: "Runnable browser examples for Voltom’s verification products.",
		contribution:
			"I published framework-free examples showing client setup and the calls that belong on the backend for Verify, FaceKey, and FaceGate.",
		tags: ["Examples", "Identity"],
		links: [
			{
				label: "Source code",
				url: "https://github.com/damianobarbati/voltom-playground",
			},
		],
		role: "voltom",
	},
	{
		id: "contributing",
		name: "Contributing",
		category: "Open source",
		summary: "Shared engineering and contribution guidelines.",
		contribution:
			"I maintain reusable rules for TypeScript, testing, repositories, and delivery workflows.",
		tags: ["Engineering practices", "Documentation"],
		links: [
			{
				label: "Source code",
				url: "https://github.com/damianobarbati/contributing",
			},
		],
	},
	{
		id: "xyz",
		name: "xyz",
		category: "Open source",
		summary: "An ESM-first TypeScript monorepo prototype.",
		contribution:
			"I assembled a reference stack with Hono, Zod, Vite, Vitest, Playwright, and Oxc tooling.",
		tags: ["TypeScript", "Monorepo"],
		links: [
			{ label: "Source code", url: "https://github.com/damianobarbati/xyz" },
		],
	},
];

export const products = projects.filter(
	(project) => project.category === "SaaS",
);

export const openSourceWork = projects.filter(
	(project) => project.category === "Open source",
);

export const featuredWork = openSourceWork.filter((project) =>
	["nano-ux", "nano-fw", "oxlint-better", "get-browser-fingerprint"].includes(
		project.id,
	),
);
