import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';

  test('code', async ({ page }) => {

  // Launch one browser
  const browser = await chromium.launch({ headless: false });

//   // Create two isolated sessions (like two incognito windows)
  const userAContext = await browser.newContext();
//   const userBContext = await browser.newContext();

//   // Open pages for both users
//   const userAPage = await userAContext.newPage();
//   const userBPage = await userBContext.newPage();

//   // User A logs in
//   await userAPage.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await userAPage.fill('#username', 'UserA');
//   await userAPage.fill('#password', 'passwordA');
//   await userAPage.click('#login');

//   // User B logs in
//   await userBPage.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await userBPage.fill('#username', 'UserB');
//   await userBPage.fill('#password', 'passwordB');
//   await userBPage.click('#login');

//   // Example: User A sends a message
//   await userAPage.fill('#message', 'Hello from User A');
//   await userAPage.click('#send');

//   // Verify User B receives the message
//   await userBPage.waitForSelector('text=Hello from User A');

//   console.log('✅ Chat message received successfully!');

//   await browser.close();

 })