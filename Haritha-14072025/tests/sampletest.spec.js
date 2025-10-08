import { test, expect } from '@playwright/test';

test('Valid Credentials', async ({ page }) => {
  await page.goto('https://accounts.lambdatest.com/login');
  await page.getByRole('textbox', { name: 'email' }).click();
  await page.getByRole('textbox', { name: 'email' }).fill('haritha.sunke@gmail.com');
  await page.getByRole('textbox', { name: 'password' }).click();
  await page.getByRole('textbox', { name: 'password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'password' }).fill('C');
  await page.getByRole('textbox', { name: 'password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'password' }).fill('Cookies@10369!');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Realtime Testing Exploratory' }).click();


  //Verifications
  //Assertions
  await expect(page).toHaveURL('https://app.lambdatest.com/console/realtime/browser/desktop')

  });


test('Invalid password', async ({ page }) => {
  await page.goto('https://accounts.lambdatest.com/login');
  await page.getByRole('textbox', { name: 'email' }).click();
  await page.getByRole('textbox', { name: 'email' }).fill('haritha.sunke@gmail.com');
  await page.getByRole('textbox', { name: 'password' }).click();
  await page.getByRole('textbox', { name: 'password' }).fill('6789yuy5hh');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByTestId('errors-password').click();
  await expect(page.getByTestId('errors-password')).toBeVisible();
});


test('Invalid username', async ({ page }) => {
  await page.goto('https://accounts.lambdatest.com/login');
  await page.getByRole('textbox', { name: 'email' }).click();
  await page.getByRole('textbox', { name: 'email' }).fill('haritha123@gmail.com');
  await page.getByRole('textbox', { name: 'password' }).click();
  await page.getByRole('textbox', { name: 'password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'password' }).fill('C');
  await page.getByRole('textbox', { name: 'password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'password' }).fill('Cookies@10369!');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByTestId('errors-email')).toBeVisible();
});


test('Both credentials are invalid', async ({ page }) => {
  await page.goto('https://accounts.lambdatest.com/login');
  await page.getByRole('textbox', { name: 'email' }).click();
  await page.getByRole('textbox', { name: 'email' }).fill('hari@gmail.com');
  await page.getByRole('textbox', { name: 'password' }).click();
  await page.getByRole('textbox', { name: 'password' }).fill('4879856566565');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByTestId('errors-email')).toBeVisible();
});

