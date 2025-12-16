const {test, expect} = require('@playwright/test')
const {POManager} = require('../../pageObjects/POManager')
const dataset = require('../../fixtures/test-data/dataset.json')
const url = require('../../fixtures/test-data/routes.json')

test(`Checkbox Test`, async({page})=>{

    const poManager = new POManager(page)
    const checkbox = poManager.getTestsPOMPage()
    
    await checkbox.goto(dataset.rahulshetty.pageUrl)
    // await checkbox.goto(url.rahulshettyPageUrl)
    await expect(page).toHaveTitle(dataset.rahulshetty.pageTitle)
    await checkbox.selectCheckbox()

})