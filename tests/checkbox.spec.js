const {test, expect} = require('@playwright/test')
const {POManager} = require('../pageObjects/POManager')
const dataset = require('../test-data/practiceData.json')

test(`Checkbox Test`, async({page})=>{

    const poManager = new POManager(page)
    const checkbox = poManager.getTestsPOMPage()
    
    await checkbox.goto(dataset.url)
    await expect(page).toHaveTitle(dataset.title)
    await checkbox.selectCheckbox()
//    select[id="dropdown-class-example"] [value="option1"]

})