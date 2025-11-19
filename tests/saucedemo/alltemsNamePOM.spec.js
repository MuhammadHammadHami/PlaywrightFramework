import newData from '../../fixtures/test-data/newData.json'
import url from '../../fixtures/test-data/routes.json'

const {test, expect} = require('@playwright/test')
const {POManager} = require('../../pageObjects/POManager')
const dataset = JSON.parse(JSON.stringify(require('../../fixtures/test-data/dataset.json')))

// test('Get All Items Name with dataset: ',async ({page})=>{

//     const poManager = new POManager(page)
//     const loginPage = poManager.getLoginPage()
//     const dashboardPage = poManager.getDashboardPage()
// let data
//     for (let data of dataset){        
//             await loginPage.goTo(data.saucedemoPageUrl)
//             await expect(page).toHaveTitle(data.pageTitle)
//             await loginPage.validLogin(data.usernameValue,data.userPasswordValue)
//         }
//     await expect(dashboardPage.dashboardLocator).toHaveText('Sauce Labs Backpack')
//     await page.waitForLoadState('networkidle') // => wait for all the request to complete
//     const itemsName = await dashboardPage.itemsList.allTextContents() // will return an array of items name
//     console.log(itemsName)

// })

test('Get All Items Name with newData: ',async ({page})=>{
    const poManager = new POManager(page)
    const loginPage = poManager.getLoginPage()
    const dashboardPage = poManager.getDashboardPage()

            await loginPage.goTo(url.saucedemoPageUrl)
            await expect(page).toHaveTitle(newData.validData.pageTitle)
            await loginPage.validLogin(newData.validData.usernameValue,newData.validData.userPasswordValue)
    await expect(dashboardPage.dashboardLocator).toHaveText('Sauce Labs Backpack')
    await page.waitForLoadState('networkidle') // => wait for all the request to complete
    const itemsName = await dashboardPage.itemsList.allTextContents() // will return an array of items name
    console.log(itemsName)


})