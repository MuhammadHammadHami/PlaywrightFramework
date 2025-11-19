const {test, expect} = require('@playwright/test')
const {POManager} = require('../../pageObjects/POManager')
const dataset = require('../../fixtures/test-data/dataset.json')

test(`Dropdown Test`, async({page})=>{

    const poManager = new POManager(page)
    const dropdown = poManager.getTestsPOMPage()
    
    await dropdown.goto(dataset.url)
    await expect(page).toHaveTitle(dataset.title)
    await dropdown.selectDropdown()
//    select[id="dropdown-class-example"] [value="option1"]

})