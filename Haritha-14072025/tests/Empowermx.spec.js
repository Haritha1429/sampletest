import {test , expect} from '@playwright/test';
import { text } from 'stream/consumers';

test ('Empowermx app' , async ({ page }) => {

   await page.goto("https://qajbwf15.mymxportal.com/emx/") - 5000

   /* await page.locator('//button[@id="details-button"]') - 5000

    await page.locator('//a[@id="proceed-link"]') - 5000

    */

    await page.locator('//input[@id="username"]').pressSequentially("1704") - 5000

    await page.locator('//input[@id="password"]').pressSequentially("Emx@101010") - 5000

    await page.locator('//input[@id="kc-login"]').click() - 5000


    //Assertions

    await expect(page).toHaveURL("https://qajbwf15.mymxportal.com/emx/billOfWork/selectAircraft.do?service_lookup=search") - 5000

    // to select heavy mx menu
/*
    await page.getByRole('link', { name: 'Heavy MX' }).click();

    await page.getByRole('link', { name: 'Crews', exact: true }).click();

    await page.getByRole('button', { name: 'Add Crew' }).click();

*/
   //to select Heavy mx and crews menu

    await page.locator("//a[contains(text(),'Heavy MX')]").click(); - 50000
  
    await page.click("//a[text()='Production Support']") - 50000

    await page.click("//a[.='Crews']")[1] - 50000

  
    

/*
    // assertions
    await expect(page).toHaveURL("https://qajbwf15.mymxportal.com/emx/crewManagement/crewMaintenance.do?service_lookup=crewMaintenance") - 5000

*/
    //to select Add Crew button
    await page.waitForTimeout(3000);

    await page.locator('(//span[@class="hidden-xs hidden-sm"])[3]').click(); - 5000
    
    await page.waitForTimeout(3000);

    //to fill required deatils of crew

    await page.locator('//input[@name="/crewRoot/crew/name"]').fill("CREW1010") - 5000

    await page.waitForTimeout(3000);

    await page.locator('//select[@id="stationFacility"]').selectOption("CTO") - 5000

     await page.waitForTimeout(3000);

    await page.locator('(//span[@class="hidden-xs hidden-sm"])[1]') - 5000

});