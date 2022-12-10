const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../pageObjects/LoginPage')

test('Login with valid credentials: Sauce Lap', async ({page})=>{
    const loginPage = new LoginPage(page)
    const pageUrl = 'https://www.saucedemo.com/'
    const usernameValue = 'standard_user'
    const userPasswordValue = 'secret_sauce'

    await loginPage.goTo(pageUrl)
    await loginPage.validLogin(usernameValue,userPasswordValue)

});

test.only('Login with invalid credentials', async ({page})=>{
    const loginPage = new LoginPage(page)
    const pageUrl = 'https://www.saucedemo.com/'
    const pageTitle= 'Swag Labs'
    const usernameValue = 'standard_user'
    const userPasswordValue = 'abcd'
  
    //await expect(page).toHaveTitle(pageTitle)
    
    await loginPage.goTo(pageUrl)
    await expect(page).toHaveTitle(pageTitle)
    await loginPage.invalidLogin(usernameValue,userPasswordValue)
    
    // await passwordLocator.fill("secret_sauce")
    // await signinBtnLocator.click()
    // await expect(dashboardLocator).toHaveText('Sauce Labs Backpack')

})