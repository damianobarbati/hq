import { hydrateRoot } from "react-dom/client";
import { Router } from "wouter";
import { path } from "./data/site";
import { Portfolio } from "./Portfolio";

const app = document.getElementById("app");

if (app) {
	hydrateRoot(
		app,
		<Router
			base={path().slice(0, -1)}
			aroundNav={(navigate, target, options) => {
				if (target !== location.pathname) window.scrollTo(0, 0);
				navigate(target, options);
			}}
		>
			<Portfolio />
		</Router>,
	);
}
