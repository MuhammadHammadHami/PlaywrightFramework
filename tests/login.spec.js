const {test, expect} = require('@playwright/test')

test.only('Login with valid credentials', async ({page})=>{
    const pageUrl = 'https://www.saucedemo.com/'
    const pageTitle= 'Swag Labs'
    const usernameLocator = page.locator('input[id="user-name"]')
    const passwordLocator = page.locator('input[id="password"]')
    const signinBtnLocator = page.locator('input[id="login-button"]')
    const usernameValue = 'standard_user'
    const userPasswordValue = 'secret_sauce'
    const dashboardLocator = page.locator('//div[text()="Sauce Labs Backpack"]')
    
    await page.goto(pageUrl)
    await expect(page).toHaveTitle(pageTitle)
    await usernameLocator.type(usernameValue)
    await passwordLocator.type(userPasswordValue)
    await signinBtnLocator.click()
    await expect(dashboardLocator).toHaveText('Sauce Labs Backpack')

});



test('Login with invalid credentials', async ({page})=>{
    const pageUrl = 'https://www.saucedemo.com/'
    const pageTitle= 'Swag Labs'
    const usernameLocator = page.locator('input[id="user-name"]')
    const passwordLocator = page.locator('input[id="password"]')
    const signinBtnLocator = page.locator('input[id="login-button"]')
    const usernameValue = 'standard_user'
    const userPasswordValue = 'abcd'
    const errorMessage = page.locator('h3[data-test="error"]')
    
    await page.goto(pageUrl)
    await expect(page).toHaveTitle(pageTitle)
    await usernameLocator.type(usernameValue)
    await passwordLocator.type(userPasswordValue)
    await signinBtnLocator.click()
    await expect(errorMessage).toContainText('Username and password')

})