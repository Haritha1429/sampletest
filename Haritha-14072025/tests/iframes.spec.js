import { test, expect } from '@playwright/test';

test('iframes', async ({ page }) => {

    await page.goto("https://jqueryui.com/checkboxradio/")

    await page.frameLocator('//iframe[@class="demo-frame"]').locator('//label[@for="checkbox-1"]').click();


});


