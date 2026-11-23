import { defineConfig } from "playwright/test";

export default defineConfig({
	testDir: "./tests",
	outputDir: ".reports",
	use: { baseURL: "http://127.0.0.1:3175" },
	webServer: {
		command:
			"pnpm build && pnpm exec vite preview --host 127.0.0.1 --port 3175",
		url: "http://127.0.0.1:3175/hq/",
	},
});
