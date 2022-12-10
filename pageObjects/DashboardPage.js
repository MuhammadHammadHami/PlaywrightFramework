class DashboardPage {
    constructor(page){
        this.page = page
        this.dashboardLocator = page.locator('//div[text()="Sauce Labs Backpack"]')
        this.itemsList = page.locator('div[class="inventory_item_name"]')
    }

    async dashboard(){
        await this.page.expect(page).toHaveTitle(pageTitle)
    }
}
module.exports = {DashboardPage}