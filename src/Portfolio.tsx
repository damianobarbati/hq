import * as React from "react";
import { useLocation } from "wouter";
import { getPageMetadata, pages } from "./pages";
import { Layout } from "./views/Layout";

type PortfolioProps = { className?: string };

export const Portfolio = ({ className }: PortfolioProps) => {
	const [location] = useLocation();
	const route = location.slice(1);
	const page = pages.get(route);
	const previousRoute = React.useRef(route);

	React.useEffect(() => {
		if (!page || previousRoute.current === route) return;

		previousRoute.current = route;

		const metadata = getPageMetadata({ route, page });

		document.title = metadata.title;

		for (const [selector, attribute, value] of [
			['meta[name="description"]', "content", metadata.description],
			['meta[property="og:title"]', "content", metadata.title],
			['meta[property="og:description"]', "content", metadata.description],
			['link[rel="canonical"]', "href", metadata.canonical],
		]) {
			const element = document.head.querySelector(selector);
			if (element) element.setAttribute(attribute, value);
		}

		const main = document.getElementById("main");
		if (main) main.focus({ preventScroll: true });
	}, [page, route]);

	if (!page) return null;

	const result = (
		<Layout className={className} section={page.section}>
			{page.content}
		</Layout>
	);

	return result;
};
