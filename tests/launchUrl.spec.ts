import {expect, test} from '@playwright/test';

test('launch Ndosi Dev Url @smoke', async ({page}) => {
  await page.goto('https://ndosisimplifiedautomation.vercel.app/');
  await expect(page).toHaveTitle('Ndosi Test Automation');
});

test('Verify login button @sanity', async ({page}) => {
  await page.goto('https://ndosisimplifiedautomation.vercel.app/');
  const loginButton = await page.getByRole('button', {name: 'Login'}).isVisible();
  console.log(loginButton);
  await expect(page.getByRole('button', {name: 'Login'})).toBeVisible();
  // await.page.screenshot({path: 'Screenshot/LandngPage.png'});
});

test('Landing Page Screenshot @regression', async ({page}) => {
  await page.goto('https://ndosisimplifiedautomation.vercel.app/');
  await expect(page.getByRole('button', {name: 'Login'})).toBeVisible();
  await page.screenshot({path: 'Screenshot/LandingPage.png', fullPage: true});
});







