import { test, expect } from '@playwright/test';

test('Valid Credentials', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    var logo = page.getByAltText('company-branding')

    await expect(logo).toBeVisible();

    await page.getByPlaceholder('Username').fill('Admin')

    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByPlaceholder('Password').press("Enter")

    // await page.getByRole('//button[@type="submit"]').click();
    
});