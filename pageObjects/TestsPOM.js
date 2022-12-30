
const {expect} =require('@playwright/test')
class TestsPOM{

    constructor(page){
        this.page = page
        this.radioButton = page.locator('input[value="radio1"]')
        this.dropdownLocator = page.locator('select[id="dropdown-class-example"]')
        this.checkboxLocator = page.locator('input[id="checkBoxOption1"]')
        this.suggestionBox = page.locator('input[id="autocomplete"]')
        this.suggestedOption = page.locator('ul[id="ui-id-1"] li')

    }

    async goto(url){
        return this.page.goto(url)
    }

    async selectRadioBtn(){
        
        await expect(this.radioButton).not.toBeChecked()
        await this.radioButton.click()
        await expect(this.radioButton).toBeChecked()
    
    }

    async selectDropdown(){
        await expect(this.dropdownLocator).not.toHaveValue('option1')
        await this.dropdownLocator.selectOption('option1')
        await expect(this.dropdownLocator).toHaveValue('option1')
    }

    async selectCheckbox(){
        await expect(this.checkboxLocator).not.toBeChecked()
        await this.checkboxLocator.click()
        await expect(this.checkboxLocator).toBeChecked()
    }

    async selectSuggestionBox(text,expectedText){
        await expect(this.suggestionBox).toBeEmpty()
        await this.suggestionBox.fill(text)
        await this.suggestedOption.locator(expectedText).click()

        await this.page.pause()

    }

}
module.exports = {TestsPOM}