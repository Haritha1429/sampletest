

import { test, expect } from '@playwright/test';

test('Login', async ({ page }) => {

await page.goto("https://testautomationpractice.blogspot.com") - 5000

await page.getByplaceholder('input[placeholder="Enter Name"]').fill(haritha);

await page.getByplaceholder('input[placeholder="Enter EMail"]').fill(haritha123456);

await page.getByplaceholder('input[placeholder="Enter Phone"]').fill(5478985522);

await page.getByplaceholder('input[placeholder="Enter Phone"]').fill(bachupally);

await page.locator('//input[@name="gender"]')[1].check();

});