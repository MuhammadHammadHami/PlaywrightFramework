const {test, expect} = require('@playwright/test')
const {POManager} = require('../../pageObjects/POManager')
const dataset = require('../../fixtures/test-data/dataset.json')

test(`Dropdown Test`, async({page})=>{

    const poManager = new POManager(page)
    const dropdown = poManager.getTestsPOMPage()
    
    await dropdown.goto(dataset.rahulshetty.pageUrl)
    await expect(page).toHaveTitle(dataset.rahulshetty.pageTitle)
    await dropdown.selectDropdown()

}) 