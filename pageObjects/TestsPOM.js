
const {expect} =require('@playwright/test')
class TestsPOM{

    constructor(page){
        this.page = page
        this.radioButton = page.locator('input[value="radio1"]')
        this.dropdownLocator = page.locator('select[id="dropdown-class-example"]')
        this.checkboxLocator = page.locator('input[id="checkBoxOption1"]')

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

}
module.exports = {TestsPOM}