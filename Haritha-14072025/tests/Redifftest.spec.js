import { test, expect } from '@playwright/test';

import Hari from  "../TestData/rediffaccount.json"

test('RediffMail Credentials', async ({ page }) => {

    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details") - 2000

    await page.locator('//input[@placeholder="Enter your full name"]').fill(Hari.fullname) - 5000

    await page.locator('//input[@placeholder="Enter Rediffmail ID"]').fill(Hari.rediffid) - 5000

    await page.locator('//span[@id="toggle-password"]').click() - 5000

    await page.locator('//input[@id="newpasswd"]').pressSequentially(Hari.password) - 5000

    await page.locator('//input[@placeholder="Retype password"]').pressSequentially(Hari.password) - 5000

    await page.locator('select[name^="DOB_Day"]').selectOption(Hari.day) - 500

    await page.locator('select[name ^="DOB_Month"]').selectOption(Hari.month) - 5000

    await page.locator('select[name ^="DOB_Year"]').selectOption(Hari.year) - 5000

    await page.locator('//input[@value="f"]').check() - 6000

    await page.locator('select[id ^="country"]').selectOption(Hari.country) - 6000

    await page.locator('select[name ^="city"]').selectOption(Hari.city) - 6000
/*
    await page.locator('//input[@placeholder="Enter recovery email"]').pressSequentially(Hari.recoveryemail)  - 5000

    await page.locator('//input[@id="mobno"]').fill(Hari.mobilenumber)  - 5000

    await page.locator('//input[@type="checkbox"]').click()

    await page.locator('select[name ^="hintq"]').selectOption(Hari.question)
*/

});