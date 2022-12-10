const {test, expect} = require('@playwright/test')
const {LoginPage}= require('../pageObjects/LoginPage')
const {DashboardPage} = require('../pageObjects/DashboardPage')

test('Get All Items Name',async ({page})=>{
    const loginPage = new LoginPage(page)
    const dashboardPage = new DashboardPage(Page)
    const pageTitle= 'Swag Labs'
    const usernameValue = 'standard_user'
    const userPasswordValue = 'abcd'
    const errorMessage = page.locator('h3[data-test="error"]')
    const itemsList = page.locator('div[class="inventory_item_name"]')

    
    await loginPage.goTo(pageUrl,pageTitle)
    await loginPage.validLogin(usernameValue,userPasswordValue)
    
    await expect(page).toHaveTitle(pageTitle)
    await usernameLocator.type(usernameValue)
    await passwordLocator.type(userPasswordValue)
    await signinBtnLocator.click()
    await expect(errorMessage).toContainText('Username and password')
    await passwordLocator.fill("secret_sauce")
    await signinBtnLocator.click()
    await expect(dashboardLocator).toHaveText('Sauce Labs Backpack')
    await page.waitForLoadState('networkidle') // => wait for all the request to complete
    const itemsName = await itemsList.allTextContents() // will return an array of items name
    console.log(itemsName)


})