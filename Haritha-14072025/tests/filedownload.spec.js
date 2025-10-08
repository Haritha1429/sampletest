import {test , expect} from '@playwright/test'
import fs from 'fs';

test('download file',async({page}) =>{
  await page.goto("https://the-internet.herokuapp.com/download");

  await page.waitForTimeout(2000);

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.locator('//a[@href="download/stdout.log"]').click()
    ])

    const suggestedFilename = download.suggestedFilename()
    const filepath = 'download/' + suggestedFilename
    await download.saveAs(filepath)
    expect(fs.existsSync(filepath)).toBeTruthy();
     //After downloading a file with Playwright, we want to make sure the file is really saved on disk.

    //fs = File System module in Node.js.

    //It allows you to work with files and folders on your computer (like read, write, check if a file exists, delete, etc).

})