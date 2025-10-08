import {test, expect} from '@playwright/test';

test('multiple file uploads', async({page}) => {

    await page.goto("https://blueimp.github.io/jQuery-File-Upload/")

    await page.setInputFiles(("//input[@type='file']"),['TestData/Uploadfiles/cartoon.png' , 'TestData/Uploadfiles/spider.jpg'])

    await page.waitForTimeout(2000);

});

