type Role = {
	id: string;
	organization: string;
	title: string;
	from: string;
	to?: string;
	location: string;
	work: string[];
	projects?: string[];
};

export const roles: Role[] = [
	{
		id: "voltom",
		organization: "Voltom",
		title: "Founder & Tech Lead",
		from: "2026-09",
		location: "Rome, Italy",
		work: [
			"Built a human verification platform for liveness checks, identity documents, and face matching.",
			"Optimized ONNX models and inference for mobile browsers, including quantization and hardware acceleration where available.",
			"Built asynchronous inference pipelines with Redis Streams and BullMQ.",
		],
		projects: ["voltom", "voltom-playground"],
	},
	{
		id: "applied-blockchain",
		organization: "Applied Blockchain",
		title: "Tech Lead & Full-Stack Developer",
		from: "2023-01",
		to: "2026-02",
		location: "London, UK · Remote",
		work: [
			"Led teams of four to eight engineers across enterprise engagements and owned architecture, delivery, and technical risk.",
			"Worked directly with clients to turn requirements into scoped roadmaps and delivered every contractual milestone for DHL’s Atlas Path project.",
			"Built developer tooling with OpenAPI and dedicated integration sandboxes.",
		],
	},
	{
		id: "translated",
		organization: "Translated",
		title: "Tech Lead & Full-Stack Developer",
		from: "2018-03",
		to: "2022-06",
		location: "Rome, Italy",
		work: [
			"Led a team of five and rebuilt the APIs behind Translated’s consumer quotation engine.",
			"Designed and delivered the TranslationOS API and dashboard for enterprise localization workflows.",
			"Led the migration from a legacy LAMP platform to a geo-distributed system of more than 60 services.",
		],
	},
	{
		id: "59-second-media",
		organization: "59 Second Media",
		title: "Full-Stack Developer & DevOps",
		from: "2017-10",
		to: "2017-12",
		location: "Rome, Italy",
		work: [
			"Built a real-time moderation platform for social video, with WebSocket updates, moderation queues, and live-stream theming.",
			"Integrated the YouTube API for live-video interactions.",
		],
	},
	{
		id: "rocket-capital",
		organization: "Rocket Capital Inv.",
		title: "Full-Stack Developer & DevOps",
		from: "2017-04",
		to: "2018-02",
		location: "Rome, Italy",
		work: [
			"Integrated Python forecasting models with a Node.js production platform.",
			"Streamed market signals to users as forecasts changed using Server-Sent Events.",
		],
	},
	{
		id: "liveneighborly",
		organization: "LiveNeighborly",
		title: "Backend Developer",
		from: "2016-05",
		to: "2016-10",
		location: "Mill Valley & San Rafael, CA",
		work: [
			"Built booking workflows and an SMS chatbot to reschedule or cancel gardening services.",
			"Integrated Google Maps into dispatch and route planning for gardeners.",
		],
	},
	{
		id: "mvpbld",
		organization: "MVPBLD LLC",
		title: "CTO",
		from: "2016-02",
		to: "2017-06",
		location: "Boston, MA, USA",
		work: [
			"Worked as a fractional CTO, defining launch-ready MVP architecture and guiding product and engineering decisions for early-stage teams.",
		],
	},
	{
		id: "seta-beauty",
		organization: "Seta Beauty",
		title: "Full-Stack Developer & DevOps",
		from: "2015-09",
		to: "2016-01",
		location: "Rome, Italy",
		work: [
			"Designed the architecture and built a CMS for appointments, customer communications, and franchise reporting.",
		],
	},
	{
		id: "centounopercento",
		organization: "Centounopercento Srl",
		title: "PHP Developer",
		from: "2015-03",
		to: "2015-06",
		location: "Rome, Italy",
		work: [
			"Customized a WordPress multisite installation for Cornetto across 14 countries, including PHP backend work and social integrations.",
		],
	},
	{
		id: "cloud-mining-biz",
		organization: "Cloud Mining Biz Srls",
		title: "Co-Founder & Full-Stack Developer",
		from: "2013-10",
		to: "2014-12",
		location: "Rome, Italy",
		work: [
			"Built a cloud-mining consultancy platform, integrated the GHash.io API, and managed the LAMP infrastructure and mining hardware.",
		],
	},
	{
		id: "giridavi",
		organization: "Giridavi Srl",
		title: "Full-Stack Developer & DevOps",
		from: "2012-07",
		to: "2013-06",
		location: "Rome, Italy",
		work: [
			"Built and maintained WinTickets, an online contest platform with social integrations, anti-cheating controls, and LAMP infrastructure.",
		],
	},
	{
		id: "mistermatic",
		organization: "Mistermatic",
		title: "Full-Stack Developer & DevOps",
		from: "2011-07",
		to: "2013-02",
		location: "Rome, Italy",
		work: [
			"Developed publishing workflows, crawlers, and XML/JSON feeds for car-dealer websites.",
		],
	},
];

export const education = [
	["University studies in Computer Science", "Sapienza University of Rome"],
	[
		"High School Diploma",
		"Liceo Scientifico e delle Scienze Umane Teresa Gullace Talotta, Rome",
	],
];

export const skills = [
	[
		"Engineering leadership",
		"Architecture, client discovery, delivery planning, code review, automated testing",
	],
	[
		"Application development",
		"TypeScript, Node.js, React, Next.js, PostgreSQL, ClickHouse, Redis, ONNX Runtime",
	],
	["Infrastructure", "Docker, Kubernetes, AWS, Azure, CI/CD, GitHub Actions"],
];

export const achievements = [
	"Turned a 20-page RFP into a product scope, architecture, budget, and roadmap through client workshops.",
	"Migrated a 15-year-old codebase to a geo-distributed cluster running over 60 services.",
	"Built real-time route planning and an SMS chatbot for gardening services in California.",
];
