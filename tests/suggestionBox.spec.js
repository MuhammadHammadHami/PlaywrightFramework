
const {test, expect} = require('@playwright/test')
const {POManager} = require('../pageObjects/POManager')
const dataset = require('../fixtures/test-data/practiceData.json')

test(`Suggestion Box Test`, async({page})=>{

    const poManager = new POManager(page)
    const suggestionBox = poManager.getTestsPOMPage()
    
    await suggestionBox.goto(dataset.url)
    await expect(page).toHaveTitle(dataset.title)
    await suggestionBox.selectSuggestionBox(dataset.text,dataset.expectedText)
//    select[id="dropdown-class-example"] [value="option1"]

})
