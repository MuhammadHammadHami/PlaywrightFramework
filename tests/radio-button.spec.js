const {test, expect} = require('@playwright/test')
const {POManager} = require('../pageObjects/POManager')
const dataset = require('../fixtures/test-data/practiceData.json')

test('Radio Button Test', async({page})=>{

    const poManager = new POManager(page)
    const radioButton = poManager.getTestsPOMPage()
    
    await radioButton.goto(dataset.url)
    await expect(page).toHaveTitle(dataset.title)
    await radioButton.selectRadioBtn()
   
});