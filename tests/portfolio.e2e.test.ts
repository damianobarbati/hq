import { expect, test } from "playwright/test";

test.describe("Project catalog", () => {
	test("opens project details and shows the source link", async ({ page }) => {
		await page.goto("/hq/");
		await page.getByRole("link", { name: "Browse projects" }).click();

		const catalog = page.getByRole("main");

		await expect(catalog.getByRole("link")).toHaveCount(9);

		await catalog.getByRole("link", { name: /Contributing/ }).click();
		await expect(page).toHaveURL("/hq/projects/contributing/");
		await expect(page).toHaveTitle("Contributing · Damiano Barbati");

		const documentUrl = await page.evaluate(
			() => performance.getEntriesByType("navigation")[0].name,
		);

		expect(new URL(documentUrl).pathname).toEqual("/hq/");

		await expect(
			catalog.getByRole("link", { name: "Source code" }),
		).toHaveAttribute("href", "https://github.com/damianobarbati/contributing");

		await page.goBack();

		await expect(catalog.getByRole("heading", { level: 1 })).toHaveText(
			"Projects",
		);

		await page.goForward();
		await page.reload();

		await expect(catalog.getByRole("heading", { level: 1 })).toHaveText(
			"Contributing",
		);
	});
});

test.describe("Theme selector", () => {
	test.use({ colorScheme: "light" });

	test("defaults to dark and keeps the keyboard selection after reload", async ({
		page,
	}) => {
		await page.goto("/hq/");

		const themeButton = page.getByRole("button", {
			name: "Change color theme",
		});

		const html = page.locator("html");

		await expect(html).toHaveCSS("color-scheme", "dark");
		await themeButton.press("Enter");
		await expect(html).toHaveCSS("color-scheme", "light dark");
		await themeButton.press("Enter");
		await expect(html).toHaveCSS("color-scheme", "light");

		await page.reload();

		await expect(html).toHaveCSS("color-scheme", "light");
		await themeButton.press("Enter");
		await expect(html).toHaveCSS("color-scheme", "dark");
	});
});
