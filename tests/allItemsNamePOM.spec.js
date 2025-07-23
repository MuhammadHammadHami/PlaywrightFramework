const {test, expect} = require('@playwright/test')
const {POManager} = require('../pageObjects/POManager')
// const {LoginPage}= require('../pageObjects/LoginPage')
// const {DashboardPage} = require('../pageObjects/DashboardPage')
const dataset = JSON.parse(JSON.stringify(require('../test-data/dataset.json')))

test('Get All Items Name',async ({page})=>{
//    const loginPage = new LoginPage(page)
//    const dashboardPage = new DashboardPage(page)
    const poManager = new POManager(page)
    const loginPage = poManager.getLoginPage()
    const dashboardPage = poManager.getDashboardPage()



//     const pageTitle= 'Swag Labs'
//     const usernameValue = 'standard_user'
//     const userPasswordValue = 'secret_sauce'
//     const errorMessage = page.locator('h3[data-test="error"]')
//    // const itemsList = page.locator('div[class="inventory_item_name"]')
//    const pageUrl = "https://www.saucedemo.com/"

let data


    for (let data of dataset){
        // test.only(`Login with ${data.userPasswordValue} password: Sauce Lap'` , async ({page})=>{
        
            await loginPage.goTo(data.pageUrl)
            await expect(page).toHaveTitle(data.pageTitle)
            await loginPage.validLogin(data.usernameValue,data.userPasswordValue)
            
        
        }

    
    // await loginPage.goTo(pageUrl,pageTitle)
    // await loginPage.validLogin(usernameValue,userPasswordValue)
    
//    await expect(page).toHaveTitle(pageTitle)
    //await usernameLocator.type(usernameValue)
    //await passwordLocator.type(userPasswordValue)
   // await signinBtnLocator.click()
  //  await expect(errorMessage).toContainText('Username and password')
   // await passwordLocator.fill("secret_sauce")
  //  await signinBtnLocator.click()
    await expect(dashboardPage.dashboardLocator).toHaveText('Sauce Labs Backpack')
    await page.waitForLoadState('networkidle') // => wait for all the request to complete
    const itemsName = await dashboardPage.itemsList.allTextContents() // will return an array of items name
    console.log(itemsName)


})