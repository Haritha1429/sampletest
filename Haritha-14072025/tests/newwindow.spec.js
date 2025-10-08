import { test, expect } from "@playwright/test";

test('new tab', async ({ page, context }) => {
    await page.goto("https://the-internet.herokuapp.com/windows");
    const [newPage] = await Promise.all([
        context.waitForEvent("page"), // listen for new tab
        page.click('//a[@href="/windows/new"]'), // triggers the new tab
    ]);
    await newPage.waitForLoadState();
    const message = await newPage.locator('//h3[text()="New Window"]')
    expect(message).toHaveText("New Window");


});
