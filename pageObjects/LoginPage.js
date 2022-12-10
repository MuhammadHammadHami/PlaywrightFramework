class LoginPage {

    constructor(page){
        this.page = page
        this.usernameLocator = page.locator('input[id="user-name"]')
        this.passwordLocator = page.locator('input[id="password"]')
        this.signinBtnLocator = page.locator('input[id="login-button"]')
        this.dashboardLocator = page.locator('//div[text()="Sauce Labs Backpack"]')
        this.errorMessage = page.locator('h3[data-test="error"]')

    }

   async goTo(pageUrl){
        await this.page.goto(pageUrl)


    }
    async validLogin(username,password){

        await this.usernameLocator.type(username) 
        await this.passwordLocator.type(password)
        await this.signinBtnLocator.click()
        await this.page.waitForLoadState('networkidle')
    }

    async invalidLogin(username, password){
        await this.usernameLocator.type(username)
        await this.passwordLocator.type(password)
        await this.signinBtnLocator.click()
//        await expect(this.errorMessage).toContainText('Username and password')
    }

}
module.exports = {LoginPage}