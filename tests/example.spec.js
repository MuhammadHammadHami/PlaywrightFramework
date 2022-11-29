// @ts-check
const { test, expect } = require('@playwright/test');

test('Page context: homepage has title and links to intro page', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);

  // // create a locator
  // const getStarted = page.getByRole('link', { name: 'Get started' });

  // // Expect an attribute "to be strictly equal" to the value.
  // await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // // Click the get started link.
  // await getStarted.click();
  
  // // Expects the URL to contain intro.
  // await expect(page).toHaveURL(/.*intro/);
});

test('browser context: has title and links to intro page', async ({ browser }) => {

  const context = await browser.newContext()
  const page = await context.newPage()

  await page.goto('https://the-internet.herokuapp.com/')
  console.log('Page Title: '+await page.title())
  await expect(page).toHaveTitle('The Internet')

  // // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);

  // // create a locator
  // const getStarted = page.getByRole('link', { name: 'Get started' });

  // // Expect an attribute "to be strictly equal" to the value.
  // await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // // Click the get started link.
  // await getStarted.click();
  
  // // Expects the URL to contain intro.
  // await expect(page).toHaveURL(/.*intro/);
});

test('Rahulshetty Academy Practice | Incorrect Password', async({page})=>{

  const pageUrl = 'https://rahulshettyacademy.com/loginpagePractise/'
  const pageTitle= 'LoginPage Practise | Rahul Shetty Academy'
  const usernameLocator = page.locator('input[id="username"]')
  const passwordLocator = page.locator('input[id="password"]')
  const signinBtnLocator = page.locator('input[id="signInBtn"]')
  

  await page.goto(pageUrl)
  await expect(page).toHaveTitle(pageTitle)
  await usernameLocator.type('rahulshetty')
  await passwordLocator.type('learning')
  await signinBtnLocator.click()
//  console.log(await page.locator('div[style*="block"]').textContent())
  await expect(page.locator('div[style*="block"]')).toContainText('Incorrecta')
});

test('Open range HRM Website and Validate URL:', async ({page})=>{
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  await expect(page).toHaveTitle('OrangeHRM')
  await page.locator('input[name="username"]').type('Admin')
  await page.locator('input[name="password"]').type('admin123')
  await page.locator('button[type="submit"]').click()

})