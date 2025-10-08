
import { test, expect } from '@playwright/test';

test('code', async ({ page }) => {

    await page.goto("https://www.imdb.com/chart/top/");
    await page.locator('//h3[text()="13. Fight Club"]').scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000)

    await page.locator('//h3[text()="13. Fight Club"]').click();
});