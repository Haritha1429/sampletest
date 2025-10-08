import { test, expect } from '@playwright/test';

test('code', async ({ page }) => {

    await page.goto("https://kitchen.applitools.com/ingredients/drag-and-drop");

    // await page.locator(('//ul[@id="menu-items"]//li[text()="Fried Chicken"]')).dragTo(page.locator('//ul[@id="plate-items"]/li'))
    // await page.waitForTimeout(2000);
    // await page.locator(('//ul[@id="menu-items"]/li[2]')).dragTo(page.locator('//ul[@id="plate-items"]/li'))
    // await page.waitForTimeout(5000);
    // await page.locator(('//ul[@id="menu-items"]/li[3]')).dragTo(page.locator("/ul[@id='plate-items']//li[contains(text()='Drag an item')]"))
    // await page.waitForTimeout(2000);

    const menuitems = ['//ul[@id="menu-items"]//li[text()="Fried Chicken"]',
         '//ul[@id="menu-items"]//li[text()="Hamburger"]', 
         '//ul[@id="menu-items"]//li[text()="Ice Cream"]',
        ]
    console.log(menuitems)

    for (let items of menuitems) {

        await page.locator(items).dragTo(page.locator(("//ul[@id='plate-items']")))

         await page.waitForTimeout(2000);
    }


});