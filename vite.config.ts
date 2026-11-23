import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import tailwind from "@tailwindcss/vite";

import {
	build,
	defineConfig,
	isRunnableDevEnvironment,
	type Plugin,
} from "vite";

import type * as Renderer from "./src/render";

const source = new URL("./src/", import.meta.url);

const portfolioPages: Plugin = {
	name: "portfolio-pages",
	configureServer(server) {
		const templateFile = new URL("index.html", source);
		const environment = server.environments.ssr;

		if (!isRunnableDevEnvironment(environment)) {
			throw new Error(
				"Vite requires a runnable SSR environment to render pages.",
			);
		}

		return () => {
			server.middlewares.use(async (request, response, next) => {
				if (
					!request.url ||
					(request.method !== "GET" && request.method !== "HEAD")
				) {
					next();
					return;
				}

				try {
					const url = new URL(request.url, "http://localhost");
					const route = url.pathname.slice(1);
					const page = route && !route.endsWith("/") ? `${route}/` : route;

					const { render, routes } =
						await environment.runner.import<typeof Renderer>("/render.tsx");

					if (!routes.includes(page)) {
						next();
						return;
					}

					if (route !== page) {
						response.writeHead(301, {
							Location: `${server.config.base}${page}${url.search}`,
						});

						response.end();
						return;
					}

					const template = await readFile(templateFile, "utf8");

					const transformed = await server.transformIndexHtml(
						url.pathname,
						template,
					);

					response.setHeader("Content-Type", "text/html; charset=utf-8");
					response.end(render(transformed, page));
				} catch (error) {
					next(error);
				}
			});
		};
	},
	hotUpdate({ file, server }) {
		if (this.environment.name === "ssr" && /\/src\/.*\.tsx?$/.test(file)) {
			server.ws.send({ type: "full-reload" });
		}
	},
	writeBundle: {
		order: "post",
		async handler() {
			if (this.environment.name !== "client") return;

			const {
				base,
				build: clientBuild,
				logLevel,
				mode,
				root,
			} = this.environment.config;

			const output = resolve(root, clientBuild.outDir);
			const rendererDirectory = await mkdtemp(join(output, ".render-"));

			try {
				await build({
					configFile: false,
					base,
					logLevel,
					mode,
					root,
					build: {
						ssr: join(root, "render.tsx"),
						outDir: rendererDirectory,
						emptyOutDir: false,
						copyPublicDir: false,
					},
				});

				const rendererUrl = pathToFileURL(join(rendererDirectory, "render.js"));

				const { render, routes }: typeof Renderer = await import(
					rendererUrl.href
				);

				const template = await readFile(join(output, "index.html"), "utf8");

				for (const route of routes) {
					const directory = join(output, route);

					await mkdir(directory, { recursive: true });

					await writeFile(
						join(directory, "index.html"),
						render(template, route),
					);
				}
			} finally {
				await rm(rendererDirectory, { recursive: true, force: true });
			}
		},
	},
};

export default defineConfig(({ command, isPreview }) => ({
	root: fileURLToPath(source),
	envDir: fileURLToPath(new URL("./", import.meta.url)),
	publicDir: "../public",
	build: { outDir: "../dist", emptyOutDir: true, sourcemap: false },
	optimizeDeps: {
		rolldownOptions: { output: { sourcemapExcludeSources: true } },
	},
	base: "/hq/",
	appType: command === "serve" && !isPreview ? "custom" : "mpa",
	server: { port: 3000, strictPort: true },
	preview: { port: 3000, strictPort: true },
	plugins: [tailwind(), portfolioPages],
}));
