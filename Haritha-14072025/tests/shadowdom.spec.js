import { test, expect } from '@playwright/test';

test('iframes', async ({ page }) => {

    await page.goto("http://watir.com/examples/shadow_dom.html")

    await page.locator('input[type="text"]').fill("name");


});

