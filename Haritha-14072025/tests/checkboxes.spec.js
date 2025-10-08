import { test, expect } from '@playwright/test';

test('code', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    const checkboxes = ['#checkBoxOption1', '#checkBoxOption2', '#checkBoxOption3']

    for (let checkbox of checkboxes) {
        await page.locator(checkbox).check();
    }


    await page.waitForTimeout(2000);
    
    for (let checkbox of checkboxes) {
        await page.locator(checkbox).uncheck();

        await page.waitForTimeout(2000);

    }
});
