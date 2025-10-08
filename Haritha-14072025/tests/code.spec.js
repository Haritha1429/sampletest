
import { test, expect } from '@playwright/test';

test('code', async ({ page }) => {

    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details");

    await expect(page.getByAltText('Rediffmail')).toBeVisible();
    await page.getByPlaceholder('Enter your full name').fill('Haritha')
    await page.getByPlaceholder('Enter Rediffmail ID').fill('haritha123@gmail.com')
    await page.locator("//input[@id='newpasswd']").fill("pass")
    await page.getByPlaceholder('Retype password').fill("pass")
    await page.locator('select[name^="DOB_Day"]').selectOption('05')
    await page.locator('select[name^="DOB_Month"]').selectOption('01')
    await page.locator('select[name^="DOB_Year"]').selectOption('1996')
    await page.locator('//input[@value="f"]').check()
    await page.locator('select[id ^="country"]').selectOption('India')
    await page.locator('select[name ^="city"]').selectOption('Agra')
    const checked = await page.locator('//input[@type="checkbox"]').isChecked();

    //checked = true

    if (!checked) {
        await page.locator('//input[@type="checkbox"]').check()
    }

    console.log(checked)

    await expect(page.locator('//input[@type="checkbox"]')).toBeChecked()

    await page.waitForTimeout(5000)

    await page.locator('//input[@type="checkbox"]').uncheck()

    await page.waitForTimeout(5000)

    await expect(page.locator('//input[@type="checkbox"]')).not.toBeChecked()

    await page.waitForTimeout(5000)

});

