import { test, expect } from "@playwright/test";

test('selectoption', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/dropdown")
    await page.locator('//select[@id="dropdown"]').selectOption("2");

    
});