import { renderToStaticMarkup, renderToString } from "react-dom/server";
import { Router } from "wouter";
import { path } from "./data/site";
import { Portfolio } from "./Portfolio";
import { getPageMetadata, pages } from "./pages";

export const routes = [...pages.keys()];

export const render = (template: string, route: string) => {
	const page = pages.get(route);
	if (!page) throw new Error(`Unknown page: ${route}`);

	const { title, description, canonical } = getPageMetadata({ route, page });

	const head = renderToStaticMarkup(
		<>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<link rel="canonical" href={canonical} />
		</>,
	);

	const body = renderToString(
		<Router base={path().slice(0, -1)} ssrPath={path(route)}>
			<Portfolio />
		</Router>,
	);

	const result = template
		.replace("<!--page-head-->", () => head)
		.replace("<!--page-body-->", () => body);

	return result;
};
