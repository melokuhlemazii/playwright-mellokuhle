import { test, expect } from '@playwright/test';

test.describe('Valid Login', () => {
    test('Login to Ndosi using valid credentials @regression', async ({ page }, testInfo) => {
    await page.goto('https://ndosisimplifiedautomation.vercel.app/');

    await page.getByRole('button', { name: 'Login' }).click();

    await page.getByRole('textbox', { name: 'Email' }).fill('melomazibuko8@gmail.com');

    await page.getByRole('textbox', { name: 'Password' }).fill('Mwelase@1031');

    //await page.click('button:has-text("Login")');
    await page.getByRole('button', { name: 'Login' }).click();

    await page.waitForTimeout(5000);

    await page.screenshot({path: 'Screenshot/LoginDashboard.png', fullPage: true});
    await testInfo.attach('screenshot', { path: 'Screenshot/LoginDashboard.png', contentType: 'image/png' });
});
});

/*
test.describe('Invalid Login', () => {
    test('Login to Ndosi using invalid credentials @smoke', async ({ page }, testInfo) => {
    await page.goto('https://ndosisimplifiedautomation.vercel.app/');

    await page.getByRole('button', { name: 'Login' }).click();

    //this block of code stays on the look for any alert that may popup and then accepts it
    page.on('dialog', async dialog => {
        expect(dialog.message()).toBe('Invalid email or password');
        await dialog.accept();
        console.log('Message from dialog : ' + dialog.message());
    });
    
    await page.waitForTimeout(5000);
    
    await page.click('button:has-text("Login")');
    
});
});
*/



