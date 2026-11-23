export const name = "Damiano Barbati";
export const title = "Tech Lead & Full-Stack Developer";

export const bio =
	"I build SaaS products and lead engineering teams. At Voltom, I build AI for identity verification and optimize computer vision models to run in mobile browsers.";

export const profiles = [
	{ label: "GitHub", url: "https://github.com/damianobarbati" },
	{ label: "LinkedIn", url: "https://www.linkedin.com/in/damianobarbati/" },
];

export function path(segment = "") {
	return `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${segment}`;
}
