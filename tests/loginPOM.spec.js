const {test, expect} = require('@playwright/test');
const {POManager} = require('../pageObjects/POManager')
const dataset = JSON.parse(JSON.stringify(require('../test-Data/dataset.json')))

for (let data of dataset){
test.only(`Login with ${data.userPasswordValue} password: Sauce Lap'` , async ({page})=>{
    
    const poManager = new POManager(page)
    const loginPage = poManager.getLoginPage()

    await loginPage.goTo(data.pageUrl)
    await expect(page).toHaveTitle(data.pageTitle)
    await loginPage.validLogin(data.usernameValue,data.userPasswordValue)
    });

}

// test('Login with invalid credentials', async ({page})=>{
    
//     const poManager = new POManager(page)
//     const loginPage = poManager.getLoginPage()
  
//     //await expect(page).toHaveTitle(pageTitle)
    
//     await loginPage.goTo(dataset.pageUrl)
//     await expect(page).toHaveTitle(dataset.pageTitle)
//     await loginPage.invalidLogin(dataset.usernameValue,dataset.userPasswordValue)
    
//     // await passwordLocator.fill("secret_sauce")
//     // await signinBtnLocator.click()
//     // await expect(dashboardLocator).toHaveText('Sauce Labs Backpack')

// })