import { test, expect } from '@playwright/test';

test('Valid Credentials', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    var logo = page.getByAltText('company-branding')

    await expect(logo).toBeVisible();

    await page.getByPlaceholder('Username').fill('Admin')

    await page.getByPlaceholder('Password').fill('admin123')

    await page.getByRole('button' ,{type:'submit'}).click();

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    const name = page.locator("//h6[text()='Dashboard']")

    await expect(name).toHaveText('Dashboard');
    
});