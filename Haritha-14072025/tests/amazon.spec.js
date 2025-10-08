
import { test, expect } from "@playwright/test";
test("amazon links", async ({ page }) => {
    await page.goto("https://www.amazon.in/");
    await page.locator('//div[@id="nav-link-accountList"]').hover();
});
