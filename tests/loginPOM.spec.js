const {test, expect} = require('@playwright/test');
const {POManager} = require('../pageObjects/POManager')
const env = require ('../utils/Testoptions'); 
const dataset = JSON.parse(JSON.stringify(require('../fixtures/test-data/dataset.json')))
const newData = JSON.parse(JSON.stringify(require('../fixtures/test-data/newData.json')))

// for (let data of dataset){
// test.only(`Login with ${data.userPasswordValue} password: Sauce Lap'` , async ({page})=>{
    
//     const poManager = new POManager(page)
//     const loginPage = poManager.getLoginPage()

//     await loginPage.goTo(data.pageUrl)
//     await expect(page).toHaveTitle(data.pageTitle)
//     await loginPage.validLogin(data.usernameValue,data.userPasswordValue)
//     });

// }

test('Login with invalid credentials', async ({page})=>{
    
    const poManager = new POManager(page)
    const loginPage = poManager.getLoginPage()
  
    //await expect(page).toHaveTitle(pageTitle)
    
    await loginPage.goTo(env.base_url)
    await expect(page).toHaveTitle(newData.validData.pageTitle)
    await loginPage.invalidLogin(newData.validData.usernameValue,newData.validData.userPasswordValue)
    
    // await passwordLocator.fill("secret_sauce")
    // await signinBtnLocator.click()
    // await expect(dashboardLocator).toHaveText('Sauce Labs Backpack')

})